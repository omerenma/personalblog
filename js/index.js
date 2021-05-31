document.addEventListener("DOMCOntentLoaded", () => {
  document.getElementsByTagName("h1").forEach((each) => {
    each.addEventListener("mouseover", () => {
      each.style.color = "blue";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const ul = document.getElementById("ul");
  open.addEventListener("click", () => {
    ul.classList.add("open");
    open.style.display = "none";
    close.style.display = "block";
  });

  close.addEventListener("click", () => {
    ul.classList.remove("open");
    close.classList.add("close");
    open.style.display = "block";
  });
});

const head = document.querySelector("#create-head");
//head.innerHTML = "I have just changed this with JS";

// const p = document.createElement("p");
// const myParaText = document.createTextNode(
//   "I created this text with javascript"
// );
// p.appendChild(myParaText);
// document.body.appendChild(p);
// p.style.color = "red";
// p.style.marginLeft = "200px";

// const mainHeading = document.querySelector("#main-heading");
// const otherHeading = document.querySelector("#other-heading");
// const excitedText = document.createElement("span");

// excitedText.textContent = "!!!";
// mainHeading.appendChild(excitedText);
// otherHeading.appendChild(excitedText);

// Responsive menu
