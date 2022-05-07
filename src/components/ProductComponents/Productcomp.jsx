import { addProduct } from "../../Redux/Product/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Paginate from "./Paginate";
import React from "react";
import axios from "axios";
import "./product.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  SimpleGrid,
  Checkbox,
  Select,
} from "@chakra-ui/react";

const Productcomp = () => {
  const dataProducts = useSelector((store) => store.products.products);
  // console.log(dataProducts, "a");
  const [currentPage, setCurrentPage] = useState(1);
  const [pro, setpro] = useState(dataProducts);
  const [results, setResults] = useState(0);
  const dispatch = useDispatch();
  const totalPosts = pro.length;
  const postPerPage = 6;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const prod = pro.slice(indexOfFirstPost, indexOfLastPost);
  
  //catagory checkbox state
  let [priceState1, setPriceState1] = useState(false);
  let [priceState2, setPriceState2] = useState(false);
  let [priceState3, setPriceState3] = useState(false);
  let [priceState4, setPriceState4] = useState(false);

  let [priceState5, setPriceState5] = useState(false);
  let [priceState6, setPriceState6] = useState(false);
  let [priceState7, setPriceState7] = useState(false);
  let [priceState8, setPriceState8] = useState(false);
  let [priceState9, setPriceState9] = useState(false);
  let [priceState10, setPriceState10] = useState(false);
  let [priceState11, setPriceState11] = useState(false);

  let [priceState12, setPriceState12] = useState(false);
  let [priceState13, setPriceState13] = useState(false);
  let [priceState14, setPriceState14] = useState(false);
  let [priceState15, setPriceState15] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://bluefly-api.herokuapp.com/product").then((res) => {
      // axios.get("http://localhost:8080/jewelry-watches").then((res) => {
      dispatch(addProduct(res.data));
      setpro(res.data);
      setResults(res.data.length);
    });
  };

  ///////////////// SORTING /////////////
  const sorting = (x) => {
    if (x.target.value === "PRICEHL") {
      setpro((prev) => [
        ...prev.sort((a, b) => b.discounted_price - a.discounted_price),
      ]);
    } else if (x.target.value === "PRICELH") {
      setpro((prev) => [
        ...prev.sort((a, b) => a.discounted_price - b.discounted_price),
      ]);
    } else if (x.target.value === "TITLE-A-Z") {
      setpro((prev) => [...prev.sort((a, b) => (a.title > b.title ? 1 : -1))]);
    } else if (x.target.value === "TITLE-Z-A") {
      setpro((prev) => [...prev.sort((a, b) => (b.title > a.title ? 1 : -1))]);
    } else {
      setpro(dataProducts);
    }
    console.log(pro, "filt");
  };

  /////////////filter//////////////////

  const catagSort = (x) => {
    if (x == "watch") {
      setPriceState1(true);
      setpro(dataProducts.filter((a) => a.type == "watch"));
      setResults(dataProducts.filter((a) => a.type == "watch").length);
      console.log(pro, "w");
    } else if (x == "ring") {
      setPriceState2(true);
      setpro(dataProducts.filter((a) => a.type == "ring"));
      setResults(dataProducts.filter((a) => a.type == "ring").length);
      console.log(pro, "ring");
    } else if (x === "earrings") {
      setPriceState3(!11);
      setpro(dataProducts.filter((a) => a.type == "earrings"));
      setResults(dataProducts.filter((a) => a.type == "earrings").length);
    } else {
      setPriceState4(!priceState4);
      setpro(dataProducts.filter((a) => a.type == "necklace"));
      setResults(dataProducts.filter((a) => a.type == "necklace").length);
    }
  };

  /////////////BRAND//////////////////

  const brandSort = (x) => {
    if (x == "JEWELRY AFFAIRS") {
      setPriceState6(true);
      setpro(dataProducts.filter((a) => a.owner == "JEWELRY AFFAIRS"));
      setResults(
        dataProducts.filter((a) => a.owner == "JEWELRY AFFAIRS").length
      );
    } else if (x == "VERSACE") {
      setPriceState7(!priceState7);
      setpro(dataProducts.filter((a) => a.owner == "VERSACE"));
      setResults(dataProducts.filter((a) => a.owner == "VERSACE").length);
    } else if (x == "CARTIER") {
      setPriceState8(!priceState8);
      setpro(dataProducts.filter((a) => a.owner == "CARTIER"));
      setResults(dataProducts.filter((a) => a.owner == "CARTIER").length);
    } else if (x == "SALVATORE FERRAGAMO") {
      setPriceState9(!priceState9);
      setpro(dataProducts.filter((a) => a.owner == "SALVATORE FERRAGAMO"));
      setResults(
        dataProducts.filter((a) => a.owner == "SALVATORE FERRAGAMO").length
      );
    } else if (x == "ROLEX") {
      setPriceState5(!priceState5);
      setpro(dataProducts.filter((a) => a.owner == "ROLEX"));
      setResults(dataProducts.filter((a) => a.owner == "ROLEX").length);
    } else if (x == "PIERRE CARDIN") {
      setPriceState10(!priceState10);
      setpro(dataProducts.filter((a) => a.owner == "PIERRE CARDIN"));
      setResults(dataProducts.filter((a) => a.owner == "PIERRE CARDIN").length);
    } else if (x == "PALMBEACH JEWELRY") {
      setPriceState11(!priceState11);
      setpro(dataProducts.filter((a) => a.owner == "PALMBEACH JEWELRY"));
      setResults(
        dataProducts.filter((a) => a.owner == "PALMBEACH JEWELRY").length
      );
    }
    // else {
    //   setPriceState4(!priceState4);
    //   setpro(dataProducts.filter((a) => a.type == "neck"));
    //   setResults(dataProducts.filter((a) => a.type == "neck").length);
    // }
  };

  /////////PRICE////////
  const priceSort = (x) => {
    if (x == "99") {
      setPriceState12(!priceState12);
      setpro(dataProducts.filter((a) => a.discounted_price <= 99));
      setResults(dataProducts.filter((a) => a.discounted_price <= 99).length);
    } else if (x == "999") {
      setPriceState13(!priceState13);
      setpro(
        dataProducts.filter(
          (a) => a.discounted_price > 99 && a.discounted_price <= 999
        )
      );
      setResults(
        dataProducts.filter(
          (a) => a.discounted_price > 99 && a.discounted_price <= 999
        ).length
      );
    } else if (x == "1999") {
      setPriceState14(!priceState14);
      setpro(
        dataProducts.filter(
          (a) => a.discounted_price > 999 && a.discounted_price <= 1999
        )
      );
      setResults(
        dataProducts.filter(
          (a) => a.discounted_price > 999 && a.discounted_price <= 1999
        ).length
      );
    } else {
      setPriceState15(!priceState15);
      setpro(dataProducts.filter((a) => a.discounted_price > 2000));
      setResults(dataProducts.filter((a) => a.discounted_price > 2000).length);
    }
  };

  // const products = storedProducts.map((pro) => <ProductCard key={pro.id} />);
  if (pro.length === 0) return null;

  return (
    <div className="mainbody">
      <div>
        <h1 style={{ fontSize: "40px" }}>Women's Jewelry & Watches</h1>

        <div className="sec">
          <div>
            <h3>{`Showing ${results} results for "Women's Bracelets"`}</h3>
          </div>

          {/* -------------------------sorting ---------------------*/}
          <div className="sorting">
            <Select width="200px" onChange={sorting}>
              <option value="BESTSELLING">BESTSELLING</option>
              <option value="TITLE-A-Z">TITLE A-Z</option>
              <option value="TITLE-Z-A">TITLE Z-A</option>
              <option value="PRICELH">PRICE LOW TO HIGH</option>
              <option value="PRICEHL">PRICE HIGH To LOW</option>
            </Select>
          </div>
        </div>
        {/* -------------------------filter ---------------------*/}
        <div className="splitmainpage">
          <div className="filter">
            <div  className="az">
              {/* // filter accouring to brand */}
              <Accordion defaultIndex={[0]} allowMultiple>
                {/* // filter accouring to BESTSELLING */}
                <AccordionItem>
                  <Button
                    colorScheme="teal"
                    variant="ghost"
                    onClick={() => {
                      setpro(dataProducts);
                      setResults(dataProducts.length);
                      setPriceState1(false);
                      setPriceState2(false);
                      setPriceState3(false);
                      setPriceState4(false);

                      setPriceState5(false);
                      setPriceState6(false);
                      setPriceState7(false);
                      setPriceState8(false);
                      setPriceState9(false);
                      setPriceState10(false);
                      setPriceState11(false);

                      setPriceState12(false);
                      setPriceState13(false);
                      setPriceState14(false);
                      setPriceState15(false);
                    }}
                  >
                    Reset Filters
                  </Button>
                  {/* -------------------------filter-catagory ---------------------*/}
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        CATEGORY
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      value="watch"
                      checked={priceState1}
                      onChange={() => {
                        catagSort("watch");
                      }}
                    >
                      Watches
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="ring"
                      checked={priceState2}
                      onChange={() => {
                        catagSort("ring");
                      }}
                    >
                      Ring
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="earrings"
                      checked={priceState3}
                      onChange={() => {
                        catagSort("earrings");
                      }}
                    >
                      Earrings
                    </Checkbox>
                    <br></br>
                    <Checkbox
                      value="necklace"
                      checked={priceState3}
                      onChange={() => {
                        catagSort("necklace");
                      }}
                    >
                      Necklace
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
                {/* -------------------------filter-brand ---------------------*/}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        BRAND
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      value="ROLEX"
                      checked={priceState5}
                      onChange={() => {
                        brandSort("ROLEX");
                      }}
                    >
                      ROLEX
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="JEWELRY AFFAIRS"
                      checked={priceState6}
                      onChange={() => {
                        brandSort("ROLEX");
                      }}
                    >
                      JEWELRY AFFAIRS
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="VERSACE"
                      checked={priceState7}
                      onChange={() => {
                        brandSort("VERSACE");
                      }}
                    >
                      VERSACE
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="CARTIER"
                      checked={priceState8}
                      onChange={() => {
                        brandSort("CARTIER");
                      }}
                    >
                      CARTIER
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="SALVATORE FERRAGAMO"
                      checked={priceState9}
                      onChange={() => {
                        brandSort("SALVATORE FERRAGAMO");
                      }}
                    >
                      SALVATORE FERRAGAMO
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="PIERRE CARDIN"
                      checked={priceState10}
                      onChange={() => {
                        brandSort("PIERRE CARDIN");
                      }}
                    >
                      PIERRE CARDIN
                    </Checkbox>
                    <br />
                    <Checkbox
                      value="PALMBEACH JEWELRY"
                      checked={priceState11}
                      onChange={() => {
                        brandSort("PALMBEACH JEWELRY");
                      }}
                    >
                      PALMBEACH JEWELRY
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>

                {/* -------------------------filter-price ---------------------*/}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        PRICE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} textAlign="left">
                    <Checkbox
                      checked={priceState12}
                      onChange={() => {
                        priceSort("99");
                      }}
                      value="99"
                    >
                      Below $99
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState13}
                      onChange={() => {
                        priceSort("999");
                      }}
                      value="999"
                    >
                      From $100 - $999
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState14}
                      onChange={() => {
                        priceSort("1999");
                      }}
                      value="1999"
                    >
                      From $1000 - $1999
                    </Checkbox>
                    <br />
                    <Checkbox
                      checked={priceState15}
                      onChange={() => {
                        priceSort("2000");
                      }}
                      value="2000"
                    >
                      Above 2000
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              {/* <SliderThumbWithTooltip /> */}
            </div>
          </div>
          {/* -------------------------product ---------------------*/}
          <div>
            <div className="simple"
            >
              {prod &&
                prod.map((el) => (
                  <ProductCard
                    key={el.id}
                    id={el.id}
                    img1={el.img1}
                    img3={el.img3}
                    title={el.title}
                    owner={el.owner}
                    price={el.price}
                    discounted_price={el.discounted_price}
                    saveupto={el.saveupto}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------pagination ---------------------*/}
      {totalPosts > postPerPage && (
        <Paginate       
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalPosts}
          postPerPage={postPerPage}
        />
      )}
    </div>
  );
};

export default Productcomp;
