import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Text,
  Flex,
  Spacer,
  Box,
  DrawerCloseButton,
  Stack,
  Image,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function Cartpage(isOpen, onOpen, onClose, setsidebar, sidebar) {
  const [items, setItems] = useState([]);
  const [qty, setQty] = useState(1);

  const { id } = useParams();
  const updatecartqty = async (value, id) => {
    const data = await axios.patch(
      `http://localhost:8080/jewelry-watches/${id}`,
      {
        qty: value,
      }
    );
    setQty(data.data.qty);
  };

  const handleQty = (value, id) => {
    if (value < 1) {
      alert("Quantity cant be 0");
      return;
    }
    if (value > 5) {
      alert("You can't buy more than 5 Products");
      return;
    }
    updatecartqty(value, id);
  };

  const getCartData = async () => {
    const data = await axios
      .get("https://bluefly-api.herokuapp.com/product")
      .then((res) => {
        setItems(res.data);
      });
    console.log(data, "cartdata");
  };

  useEffect(() => {
    getCartData();
  }, [qty]);

  let navigate = useNavigate();

  return (

    <div style={{marginTop: "30px"}}>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <h1
              style={{ fontSize: "30px", fontFamily: "'Futura', sans-serif" }}
            >
              CART
            </h1>
            <DrawerCloseButton
              onClick={() => {
                navigate('/');
                // window.location.reload('/');
                // setsidebar(false);
              }}
              mt="4"
            />
          </DrawerHeader>
          <DrawerBody>
            {items.map((e) => {
              return e.id == id ? ( 
                <Box mb="5">
                  <Grid
                    templateRows="auto"
                    templateColumns="repeat(12,1fr)"
                    gap={4}
                    borderBottomWidth="2px"
                    pb="5"
                  >
                    <GridItem rowSpan={3} colSpan={3}>
                      <Image src={e.img1} />
                    </GridItem>
                    <GridItem colSpan={9} style={{ margin: "10px" }}>
                      <Text>{e.title}</Text>
                    </GridItem>
                    <GridItem colSpan={9} h="10">
                      <Text>color - {e.color}</Text>
                    </GridItem>
                    <GridItem colStart={4}>
                      <Stack border="1px" direction="row">
                        <Button
                          borderRight="1px"
                          borderRadius="none"
                          size="sm"
                          onClick={() => {
                            handleQty(e.qty - 1, e.id);
                          }}
                        >
                          -
                        </Button>
                        <Center>
                          <Text>{e.qty}</Text>
                        </Center>
                        <Button
                          size="sm"
                          borderLeft="1px"
                          borderRadius="none"
                          onClick={() => {
                            handleQty(e.qty + 1, e.id);
                          }}
                        >
                          +
                        </Button>
                      </Stack>
                    </GridItem>
                    <GridItem colEnd={12}>
                      <Text>${e.price}</Text>
                    </GridItem>
                  </Grid>
                  <Flex mt="4" mb="4">
                    <Text>SUBTOTAL</Text>
                    <Spacer />
                    <Text>${e.qty * e.price}</Text>
                  </Flex>
                </Box>
              ) : null;
            })}

            <Box>
              <Text mb="4">
                Shipping, taxes, and discounts codes calculated at checkout.
              </Text>
              <Button
                width="100%"
                bgColor="black"
                color="white"
                onClick={() => {
                  "<Payment></Payment>";
                }}
              >
                <Link to={"/payment"}>Checkout</Link>
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
