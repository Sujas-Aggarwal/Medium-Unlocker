const url = window.location.href;
const body = document.body;
const a = document.createElement("a");
const scrollNum = parseInt(location.href.split("?scroll=")[1]);
if (scrollNum && window.scrollY !== scrollNum) {
}
a.id = "Medium-Article-Unlocker";
a.style.cursor = "pointer";
const img = document.createElement("img");
img.src =
  "https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png";
img.style.width = "100%";
a.style.display = "flex";
a.style.alignItems = "center";
a.style.justifyContent = "center";
img.style.height = "100%";
img.style.backgroundSize = "cover";
img.style.backgroundPosition = "center";
a.style.position = "fixed";
a.style.bottom = "20px";
a.style.right = "20px";
a.style.zIndex = "9999";
a.style.backgroundColor = "white";
a.style.padding = "0px";
a.style.width = "60px";
a.style.height = "60px";
a.style.borderRadius = "5px";
a.style.transition = "all 0.3s ease";
a.addEventListener("mouseover", () => {
  a.style.transform = "scale(1.1)";
});
a.addEventListener("mouseleave", () => {
  a.style.transform = "scale(1)";
});
a.style.overflow = "hidden";
a.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
a.appendChild(img);
a.href = url.split("https://freedium.cfd/")[1];
body.appendChild(a);
