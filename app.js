const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const date = document.querySelector(".date");

// let saat = new Date();
// console.log(saat.toLocaleDateString());
// console.log(saat.toDateString());
const dateFunc = () => {
    let newDate = new Date();
    hour.innerHTML = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
    minute.innerHTML = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
    second.innerHTML = newDate.getSeconds() < 10 ? "0" + newDate.getSeconds() : newDate.getSeconds();
    date.innerHTML = newDate.toLocaleDateString()
};
setInterval(dateFunc, 1000);