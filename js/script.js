const links = document.querySelectorAll(".nav-link");

links.forEach(element => {
    element.addEventListener("click", function(item) {
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior:"smooth", 
                block:"start"
            });
        });
});