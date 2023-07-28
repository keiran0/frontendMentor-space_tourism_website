document.getElementsByClassName("mobile-hamburger")[0].addEventListener("click", function() {
    document.getElementsByClassName("mobile-nav")[0].classList.remove("hidden");
})

document.getElementsByClassName("close-sidebar")[0].addEventListener("click", function() {
    document.getElementsByClassName("mobile-nav")[0].classList.add("hidden");
})