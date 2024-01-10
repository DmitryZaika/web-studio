const modal = document.querySelector(".backdrop");
const openModalButton = document.querySelector(".js-open-modal-btn");
const closeModalButton = document.querySelector(".js-close-modal-btn");

const toggleModal = () => modal.classList.toggle("is-hidden");

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);

function addClassToParentExcludeChild() {
  var parentElement = document.getElementById("backdrop");
  var childElement = document.getElementById("modal");

  parentElement.addEventListener("click", function (event) {
    if (event.target !== childElement) {
      parentElement.classList.add("is-hidden");
    }
  });

  childElement.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

addClassToParentExcludeChild();
