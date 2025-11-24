function updateClock() {
    const now = new Date();

    // Extract time
    let hours = now.getHours().toString().padStart(2, '0');
   let minutes = now.getMinutes().toString().padStart(2, '0');
   let seconds = now.getSeconds().toString().padStart(2, '0');

    //AM PM 

const ampm = hours >= 12 ? 'pm' : 'am';
 hours = (hours % 12 || 12).toString().padStart(2, '0');

    // Extract date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();


    // Update the time and date in the DOM
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('date').textContent = `${dayName}, ${month} ${day}, ${year}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call updateClock once to show the time immediately on load
updateClock();
