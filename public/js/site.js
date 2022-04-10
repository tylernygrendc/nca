window.addEventListener("load", () => {
    let toast = document.querySelector("#toast");
    setTimeout(() => {
        toast.style.transition = "2s ease-in-out";
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
    }, 10000);
    setTimeout(() => {
        toast.style.transition = "2s ease-in-out";
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
    }, 20000);
});