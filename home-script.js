const startDate = new Date("2024-06-08T09:00:00");
const clock = document.getElementById("clock");

function updateTimeTogether() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    // Borrow days from previous month
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  // Time part (hours, minutes, seconds)
  const diffMs = now - startDate;
  const diffSecs = Math.floor(diffMs / 1000);
  const hours = Math.floor((diffSecs / 3600) % 24);
  const minutes = Math.floor((diffSecs / 60) % 60);
  const seconds = diffSecs % 60;

  clock.textContent = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

setInterval(updateTimeTogether, 1000);
updateTimeTogether();


const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
});

const loveNotes = [
  "You're so caring to everybody around you",
  "You're REALLY pretty",
  "You're so funny and I always laugh with you",
  "You have a very nice smile",
  "You're so motivated and hardworking",
  "You're the most smartie pants ever 🤓",
  "You have so much love in your heart",
  "You let me talk to you about anything",
  "You get really excited about seeing me"
];
let i = 0;
const loveText = document.getElementById("love-text");

setInterval(() => {
  // Slide out current text
  loveText.classList.remove("slide-in");
  loveText.classList.add("slide-out");

  // After slide-out animation, update text and slide in
  setTimeout(() => {
    i = (i + 1) % loveNotes.length;
    loveText.textContent = loveNotes[i];
    loveText.classList.remove("slide-out");
    loveText.classList.add("slide-in");
  }, 500); // match animation duration
}, 3000);

window.addEventListener('load', () => {
    const container = document.getElementById('animationContainer');
    const emojis = ['❤️','🎉','💛','💜','💚','💖', '😘'];

    const numParticles = 80; // more particles for full effect

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random emoji
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Random starting horizontal position across the screen
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${-50 - Math.random() * 100}px`; // start above viewport

        // Random size
        particle.style.fontSize = `${Math.random() * 30 + 15}px`;

        // Random horizontal drift (-100 to +100px)
        particle.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');

        // Random rotation
        particle.style.setProperty('--rotate', (Math.random() * 720 - 360) + 'deg');

        // Random duration for falling
        particle.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3-5s

        // Add slight delay for staggered effect
        particle.style.animationDelay = `${Math.random() * 1.5}s`;

        container.appendChild(particle);

        // Remove particle after animation completes
        particle.addEventListener('animationend', () => particle.remove());
    }
});
