let is24HourFormat = false;  // Toggle for time format
let isShortMonth = false;    // Toggle for month format
let isWeekHidden = false;    // Toggle for hiding week text

function updateClock() {
    const now = new Date();
    const dayName = now.toLocaleString('en-US', { weekday: 'long' });
    const month = isShortMonth ? now.toLocaleString('en-US', { month: 'short' }) : now.toLocaleString('en-US', { month: 'long' });
    const dayNum = now.getDate();
    const year = now.getFullYear();
    const timeOptions = is24HourFormat ? { hour12: false } : { hour12: true };
    const time = now.toLocaleTimeString('en-US', timeOptions);
    const week = Math.ceil((now.getDate() + 6 - now.getDay()) / 7);

    // Update DOM
    document.getElementById('dayname').innerText = isWeekHidden ? `${dayName}` : `${dayName}, Week ${week}`;
    document.getElementById('daynum').innerText = `${dayNum} ${month}`;
    document.getElementById('year').innerText = `${year}`;
    document.getElementById('time').innerText = `${time}`;
}

function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

// Event Listeners for the Mac-style buttons
document.getElementById('red-dot').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;  // Toggle time format
    updateClock();
});

document.getElementById('yellow-dot').addEventListener('click', () => {
    isShortMonth = !isShortMonth;  // Toggle month format
    updateClock();
});

document.getElementById('green-dot').addEventListener('click', () => {
    isWeekHidden = !isWeekHidden;  // Toggle week text
    updateClock();
});