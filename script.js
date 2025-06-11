function updateTime() {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const parts = formatter.formatToParts(new Date());

  let hour, minute, dayPeriod;

  for (const part of parts) {
    if (part.type === "hour") hour = part.value;
    if (part.type === "minute") minute = part.value;
    if (part.type === "dayPeriod") dayPeriod = part.value;
  }

  console.log("Hour:", hour);
  console.log("Minute:", minute);
  console.log("AM/PM:", dayPeriod);

  document.getElementById('inner1').textContent = hour;
  document.getElementById('inner2').textContent = minute;
  document.getElementById('ti').textContent = dayPeriod;
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);
