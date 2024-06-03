document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2000); // 2 seconds 

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }

    setTimeout()
});