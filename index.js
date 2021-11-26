let sec = document.getElementById("second");
let min = document.getElementById("minute");
let hr = document.getElementById("hour");

let t_box = document.getElementById("time_box");

let cdate = new Date();
let sec_angle = cdate.getSeconds() * 6;
let min_angle = (cdate.getMinutes() * 6) + sec_angle / 60;
let hr_angle = (cdate.getHours() * 30) + min_angle / 12;
let sp = document.querySelectorAll("span");

let x = 0;
for (let i = 0; i < 60; i++) {
    sp[i].style.transform = `rotate(${i * 6}deg)`;
    if (i * 6 == x) {
        sp[i].style.background = `linear-gradient(to top,transparent 89%, rgb(0, 0, 0) 89%)`;
        x += 30;
    }
    if (i * 6 == 0 || i * 6 == 90 || i * 6 == 180 || i * 6 == 270) {
        sp[i].style.background = `linear-gradient(to top,transparent 86%, rgb(0, 0, 0) 86%)`;
        sp[i].style.width = `.5rem`;
    }
}


sec.style.transform = `translate(-50%,-100%) rotateZ(${sec_angle}deg)`;
min.style.transform = `translate(-50%,-100%) rotate(${min_angle}deg)`;
hr.style.transform = `translate(-50%,-100%) rotate(${hr_angle}deg)`;

//for moving the clock hands
setInterval(() => {
    sec.style.transform = `translate(-50%,-100%) rotateZ(${sec_angle}deg)`;
    sec_angle += 6;
}, 1000);

setInterval(() => {
    min.style.transform = `translate(-50%,-100%) rotateZ(${min_angle}deg)`;
    min_angle += .1;
}, 1000);

setInterval(() => {
    hr.style.transform = `translate(-50%,-100%) rotateZ(${hr_angle}deg)`;
    hr_angle += 1 / 2;
}, 60000);

//for showing a running time in digital format
let now = cdate;
setInterval(() => {
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    if (h > 12) {
        h -= 12;
    }
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (now.getHours() >= 12) {
        t_box.innerHTML = `${h} : ${m} : ${s} PM`;
    }
    else {
        t_box.innerHTML = `${h} : ${m} : ${s} AM`;
    }
    now = new Date();
}, 1000);

// for set a shine effect on mouse over
document.onmousemove = function(e){
    let x1 = e.clientX; 
    let y1 = e.clientY;
    const sx = document.getElementById("shine").getBoundingClientRect().x;
    const sy = document.getElementById("shine").getBoundingClientRect().y;
    document.getElementById("shine").style.setProperty('--x',`${x1 - sx}`);
    document.getElementById("shine").style.setProperty('--y',`${y1- sy}`);
}
