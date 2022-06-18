const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const date = document.querySelector(".date");

let saat = new Date();
console.log(saat.toLocaleDateString());
console.log(saat.toDateString());
const dateFunc = () => {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
}