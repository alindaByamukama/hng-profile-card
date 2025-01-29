function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();