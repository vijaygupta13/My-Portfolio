
console.log("My portfolio website is running!");


function changeContent() {
    const content = document.getElementById("web-name");

    if (window.innerWidth <= 768) {
        content.innerHTML = "&lt;/&gt;";
    } else {
        content.innerHTML = "&lt;/&gt; My Portfulio";
    }
}
changeContent();
window.addEventListener("resize", changeContent);


0