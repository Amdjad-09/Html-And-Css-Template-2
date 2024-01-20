let statsSection = document.querySelector(".stats");
let stats = document.querySelectorAll(".stats .box h2");
let precenSection = document.querySelector(".percen");
let progs = document.querySelectorAll(".percen .prog  span");
let started= false;
let started2 = false;

window.addEventListener("scroll", () => {
    if (window.scrollY >= statsSection.offsetTop - 100) {
        !started ? stats.forEach((stat) => startGoal(stat)) : "";
    }
    if (window.scrollY >= precenSection.offsetTop) {
        !started2 ? progs.forEach((prog) =>  startProg(prog)) : "";
    }
})

function startGoal(el) {
    let goal = el.dataset.goal;
    started = true;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1500 / goal)
}

function startProg(el) {
    let prog = el.dataset.progress;
    let counter = 0;
    started2 = true;
    console.log(parseInt(prog));
    let count = setInterval(() => {
        counter++;
        console.log(counter);
        el.style.width = counter + "%";
        if (counter === parseInt(prog)) {
            clearInterval(count);
        }
    }, 5)
}