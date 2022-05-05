const footerLogo = () => {
    window.location.href = "/index.html";
}




document.querySelector('#downArrow').addEventListener('click', () => {
   document.querySelector('.aboutUs').style.display = "block"; 
   document.querySelector('#downArrow').style.display = "none";
   document.querySelector('#upArrow').style.display = "inline-block";
});

document.querySelector("#upArrow").addEventListener("click", () => {
  document.querySelector(".aboutUs").style.display = "none";
  document.querySelector("#downArrow").style.display = "inline-block";
  document.querySelector("#upArrow").style.display = "none";
});

// socialHandle
document.querySelector("#downArrow2").addEventListener("click", () => {
  document.querySelector(".socialHandle").style.display = "block";
  document.querySelector("#downArrow2").style.display = "none";
  document.querySelector("#upArrow2").style.display = "inline-block";
});

document.querySelector("#upArrow2").addEventListener("click", () => {
  document.querySelector(".socialHandle").style.display = "none";
  document.querySelector("#downArrow2").style.display = "inline-block";
  document.querySelector("#upArrow2").style.display = "none";
});

// policy
document.querySelector("#downArrow1").addEventListener("click", () => {
  document.querySelector(".policy").style.display = "block";
  document.querySelector("#downArrow1").style.display = "none";
  document.querySelector("#upArrow1").style.display = "inline-block";
});

document.querySelector("#upArrow1").addEventListener("click", () => {
  document.querySelector(".policy").style.display = "none";
  document.querySelector("#downArrow1").style.display = "inline-block";
  document.querySelector("#upArrow1").style.display = "none";
});