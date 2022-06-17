const createElement = (type = "DIV", content = "This is content") => {
  const element = document.createElement(type);
  element.innerHTML = content;

  return element;
};

const btn_greet = createElement("BUTTON", "Say hello");

btn_greet.addEventListener("click", () => console.log("Hello, 4ront!"));

document.body.appendChild(btn_greet);
