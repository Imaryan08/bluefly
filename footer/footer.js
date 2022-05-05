//home page link on footer logo
const footerLogo = () => {
  window.location.href = "/index.html";
};

// about us
const downArrow = () => {
  document.querySelector(".aboutUs").style.display = "block";
  document.querySelector("#downArrow").style.display = "none";
  document.querySelector("#upArrow").style.display = "inline-block";
};

const upArrow = () => {
  document.querySelector(".aboutUs").style.display = "none";
  document.querySelector("#downArrow").style.display = "inline-block";
  document.querySelector("#upArrow").style.display = "none";
};

// socialHandle
const downArrow2 = () => {
  document.querySelector(".socialHandle").style.display = "block";
  document.querySelector("#downArrow2").style.display = "none";
  document.querySelector("#upArrow2").style.display = "inline-block";
};

const upArrow2 = () => {
  document.querySelector(".socialHandle").style.display = "none";
  document.querySelector("#downArrow2").style.display = "inline-block";
  document.querySelector("#upArrow2").style.display = "none";
};

// policy
const downArrow1 = () => {
  document.querySelector(".policy").style.display = "block";
  document.querySelector("#downArrow1").style.display = "none";
  document.querySelector("#upArrow1").style.display = "inline-block";
};

const upArrow1 = () => {
  document.querySelector(".policy").style.display = "none";
  document.querySelector("#downArrow1").style.display = "inline-block";
  document.querySelector("#upArrow1").style.display = "none";
};
