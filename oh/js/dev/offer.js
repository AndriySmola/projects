import "./main.min.js";
import "./common.min.js";
window.addEventListener("load", windowLoad);
function windowLoad() {
  document.body.classList.add(".loaded");
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest(".navigation-blog__item")) {
      const tabNavItem = targetElement.closest(".navigation-blog__item");
      if (!tabNavItem.classList.contains("active")) {
        const activeTabNavItem = document.querySelector(".navigation-blog__item.active");
        activeTabNavItem.classList.remove("active");
        tabNavItem.classList.add("active");
        const tabItems = document.querySelectorAll(".blog-page__tab");
        const activeTabItem = document.querySelector(".blog-page__tab.active");
        activeTabItem.classList.remove("active");
        tabItems[getIndex(tabNavItem)].classList.add("active");
      }
    }
  }
  function getIndex(el) {
    return Array.from(el.parentNode.children).indexOf(el);
  }
}
