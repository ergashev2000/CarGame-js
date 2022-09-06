var carOne = 0;
var vertical = false;
if (carOne >= 0 && carOne < 900) {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        if (name == "ArrowRight") {
            let car1 = document.querySelector(".carImg");
            car1.style.transform = "translateX(" + carOne + "px)";
            carOne += 10;
        } else if (name == "ArrowLeft") {
            let car1 = document.querySelector(".carImg");
            car1.style.transform = "translateX(" + carOne + "px)";
            carOne -= 10;
        } else if (name == "ArrowUp" && vertical == true) {
            let car1 = document.querySelector(".carImg");
            car1.style.top = "65%";
            vertical = false;
        } else if (name == "ArrowDown" && vertical == false) {
            let car1 = document.querySelector(".carImg");
            car1.style.top = "70%";
            vertical = true;
        }
    }, true);
}
