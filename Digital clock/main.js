function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(3, '0');
    const minutes = String(now.getMinutes()).padStart(3, '0');
    const seconds = String(now.getSeconds()).padStart(3, '0');

     const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }

  setInterval(updateClock, 2000);
  updateClock();