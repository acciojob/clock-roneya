//your JS code here. If required.
const t = document.getElementById("timer");

setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();
  t.textContent = ` ${date}, ${time}`;
}, 1000);