const selectors = [
  "#comic img",
  "#cc-comic img",
  "#cc-comicbody img",
  "img.comic"
];

document.querySelectorAll(selectors.join(", ")).forEach(img => {
  addTitleBelowImage(img, img.nextSibling === null);
})

function addTitleBelowImage(img, append = false) {
  const $title = document.createElement("div");
  $title.style.background = "#eeeeee";
  $title.style.padding = "1rem";
  $title.style.boxSizing = "border-box";
  $title.innerText = img.title;

  if (append) {
    img.parentElement.append($title);
  } else {
    const rect = img.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    $title.style.position = "absolute";
    $title.style.top = `${scrollTop +
      rect.top +
      img.offsetHeight -
      bodyRect.top}px`;
    $title.style.left = `${scrollLeft + rect.left - bodyRect.left}px`;
    $title.style.width = `${img.offsetWidth}px`;
    $title.style.zIndex = 10000;
    document.body.append($title);
  }
}
