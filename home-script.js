const startDate = new Date("2024-06-08T09:00:00"); // <-- change to your date

function updateClock() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = days - years * 365 - months * 30;

  const display = `${years} years, ${months} months, ${remainingDays} days, 
                   ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;

  const clockEl = document.getElementById("clock");

  // Add fade effect
  clockEl.classList.add("fade");
  setTimeout(() => {
    clockEl.textContent = display;
    clockEl.classList.remove("fade");
  }, 150);
}

setInterval(updateClock, 1000);
updateClock();