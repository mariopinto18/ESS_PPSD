
const images = document.querySelectorAll("img");
const containers = document.querySelectorAll(".container");

images.forEach((image) => {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragend", dragEnd);
});

containers.forEach((container) => {
  container.addEventListener("dragover", dragOver);
  container.addEventListener("drop", drop);
});

function dragStart(event) {
  event.dataTransfer.setData("draggedImageId", event.target.id);
  setTimeout(() => event.target.classList.toggle("hidden"));
}

function dragEnd(event) {
  event.target.classList.toggle("hidden");
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  const draggedImageId = event.dataTransfer.getData("draggedImageId");
  const draggedImage = document.getElementById(draggedImageId);
  const fromContainer = draggedImage.parentNode;
  const toContainer = event.currentTarget;

  if (toContainer !== fromContainer) {
    fromContainer.appendChild(toContainer.firstElementChild);
    toContainer.appendChild(draggedImage);
  }
}