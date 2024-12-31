function countdownToNewYear(){
    const newYear = new Date(new Date().getFullYear() + 1, 0, 1);
    const now = new Date();
    const timeDiff = newYear - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    document.getElementById('countdown').textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
   
}

setInterval(countdownToNewYear, 1000);

const fireworksContainer = document.getElementById("fireworks");

function createFirewoek() {
    const firework = document.createElement("div");
    firework.className = "firewoek";
    firework.style.position = "absolule";
    firework.style.width = "10px";
    firework.style.height = "10px";
    firework.style.borderRadius = "50%";
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 100%)`;
    firework.style.top = ` ${Math.random() * 100}vh`;
    firework.style.left = ` ${Math.random() * 100}vw`;
    firework.style.animation = "explode 1.5s ease-out forwards";
    fireworksContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 1500); 
}

startFireworks();

const style = document.createElement("style");
style.textContent = `
    @keyframes explode {
    0%{
        transform: scale(0);
        opacity: 1;
    }
    50%{
        transform: scale(2);
        opacity: 0.7;
    }
    100%{
        transform: scale(0);
        opacity: 0;
    }

`;
document.head.appendChild(style);