// script.js
const images = [
    "./assests/email-svgrepo-com.svg",


    "./assests/email-svgrepo-com2.svg"
];
let currentImageIndex = 0; // اندیس عکس فعلی

function changeImage() {
    const imageElement = document.getElementById('myImage');
    currentImageIndex = (currentImageIndex + 1) % images.length; // به عکس بعدی برو
    imageElement.src = images[currentImageIndex]; // تغییر src عکس
}
const changeImageBtn = document.getElementById('theme-toggle');
// تابع برای تغییر تم
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // ذخیره حالت در localStorage
    updateThemeButton(isDarkMode);
    changeImageBtn.addEventListener('click', changeImage);
}

// تابع برای به‌روزرسانی آیکون دکمه تم
function updateThemeButton(isDarkMode) {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// بررسی localStorage برای حالت تاریک
function checkDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateThemeButton(isDarkMode);
}

// رویداد کلیک برای دکمه تغییر تم
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);

// بررسی حالت تاریک هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', checkDarkMode);

// توابع ماشین حساب
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'خطا';
    }
}

// باز و بسته کردن منو
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sideMenu = document.querySelector('.side-menu');

openMenuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});