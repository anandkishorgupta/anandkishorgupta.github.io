let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let h = 0;
let m = 0;
let s = 0;


let start = document.getElementById("button-start");
let stop = document.getElementById("button-stop");
let reset = document.getElementById("button-reset");


let interval = 0;
let watch = () => {
    interval = setInterval(() => {
        s++;
        if (s < 9) {

            second.innerText = "0" + s;
        }
        if (s > 9) {
            second.innerText = s;
        }
        // console.log(s);
        // MINUTE LOGIC
        if (s == 60) {
            s = 0;
            m++;
            second.innerText = "0" + s;
            if (m < 9) {
                minute.innerText = "0" + m;

            }
            if (m > 9) {
                minute.innerText = m;

            }
        }
        // Hour logic
        if (m == 60) {
            m = 0;
            h++;
            minute.innerHTML = "0" + m;
            if (h < 9) {
                hour.innerText = "0" + m;

            }
            if (h > 9) {
                hour.innerText = m;

            }

        }
    }, 1000)
}

// START

start.addEventListener("click", watch);
// STOP

stop.addEventListener("click", () => {
    clearInterval(interval);
})

// RESET

reset.addEventListener("click", () => {
    clearInterval(interval);
    h = 0;
    m = 0;
    s = 0;
    hour.innerText = "0" + h;
    minute.innerText = "0" + m;
    second.innerText = "0" + s;
})