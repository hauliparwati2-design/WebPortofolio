// --- 1. CONFIGURATION ---
const textElement = document.getElementById('typing-text');
const phrases = ["Math Tutor", "Information System Student", "Tech Enthusiast"];
let pIndex = 0;
let cIndex = 0;
let isDeleting = false;

function type() {
    if (!textElement) return; 
    const current = phrases[pIndex];
    if (isDeleting) {
        textElement.textContent = current.substring(0, cIndex - 1);
        cIndex--;
    } else {
        textElement.textContent = current.substring(0, cIndex + 1);
        cIndex++;
    }
    let speed = isDeleting ? 20 : 60;
    if (!isDeleting && cIndex === current.length) {
        speed = 1000; 
        isDeleting = true;
    } else if (isDeleting && cIndex === 0) {
        isDeleting = false;
        pIndex = (pIndex + 1) % phrases.length;
        speed = 280;
    }
    setTimeout(type, speed);
}

// --- 2. TAB SYSTEM ---
function openTab(evt, tabName) {
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
        contents[i].classList.remove("active");
    }
    const btns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    const target = document.getElementById(tabName);
    if (target) {
        target.style.display = "block";
        setTimeout(() => target.classList.add("active"), 10);
    }
    evt.currentTarget.classList.add("active");
}

// --- 3. WHATSAPP & INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    type();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nama = this.querySelector('input').value;
            const pesan = this.querySelector('textarea').value;
            const noHP = "6285711844677"; 
            const teks = `Halo Hauli! 👋%0A%0A*Nama:* ${nama}%0A*Pesan:* ${pesan}`;
            const url = `https://wa.me/${noHP}?text=${teks}`;
            console.log("Mencoba kirim ke:", url); 
            window.open(url, '_blank');
            this.reset();
        });
    }
    
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) firstTab.click();
});