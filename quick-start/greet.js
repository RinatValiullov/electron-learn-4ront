const createElement = (type = "DIV", content) => {
  const element = document.createElement(type);
  element.innerHTML = content;

  return element;
};

const setTitleButton = createElement("BUTTON", "Set title");
const titleInput = createElement("INPUT");

document.querySelector(".ipc").append(titleInput, setTitleButton);

setTitleButton.addEventListener("click", () => {
  const titleValue = titleInput.value;
  window.electronAPI.setTitle(titleValue);
});

const btn_greet = createElement("BUTTON", "Say hello");

btn_greet.addEventListener("click", () => console.log("Hello, 4ront!"));

document.body.appendChild(btn_greet);
