document.querySelector("button").onclick = function () {

    document.querySelector(".hero").style.display = "none";

    document.querySelector(".acara").scrollIntoView({
        behavior: "smooth"
    });

};
