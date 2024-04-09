const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const brushWidth = document.querySelector("#brush-width");
const colorPicker = document.querySelector("#color-picker");
const eraser = document.getElementsByClassName("eraser")[0];
const brush = document.getElementsByClassName("brush")[0];
const clearButton = document.getElementsByClassName("clear")[0];
const saveButton = document.getElementsByClassName("save")[0];

let isDrawing = false;
let currentWidth = 5;
let currentColorPicker = "black";
const fillReact = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fillReact();
});

canvas.addEventListener("mousedown", () => {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = currentWidth;
});
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = currentColorPicker;
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
brushWidth.addEventListener("change", () => {
  currentWidth = brushWidth.value;
});
colorPicker.addEventListener("change", () => {
  currentColorPicker = colorPicker.value;
});

eraser.addEventListener("click", () => {
  eraser.classList.add("active");
  brush.classList.remove("active");
  currentColorPicker = "#fff";
});
brush.addEventListener("click", () => {
  brush.classList.add("active");
  eraser.classList.remove("active");
  currentColorPicker = colorPicker.value;
});
clearButton.addEventListener("click", () => {
  fillReact();
});
saveButton.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = `Saman${Date.now()}.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
