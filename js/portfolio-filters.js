const filterList = document.querySelectorAll(".portfolio__filters-item");

const toggleAccent = (event) => {
  filterList.forEach((item) =>
    item.classList.remove("portfolio__filters-item-accent")
  );

  const clickedItem = event.currentTarget;
  clickedItem.classList.add("portfolio__filters-item-accent");
};

filterList.forEach((item) => item.addEventListener("click", toggleAccent));
