const visited = document.querySelector(".visits");
const lastVisitTime = Number(window.localStorage.getItem("lastVisitTime-ls"));

const now = new Date().getTime();
const oneDayInMillis = 24 * 60 * 60 * 1000;

if (lastVisitTime) {
  const timeElapsed = now - lastVisitTime;
  if (timeElapsed < oneDayInMillis) {
    visited.textContent = "Back so soon! Awesome!";
  } else {
    const daysSinceLastVisit = Math.floor(timeElapsed / oneDayInMillis);
    const dayText = daysSinceLastVisit === 1 ? "day" : "days";
    visited.textContent = "You last visited ${daysSinceLastVisit} ${dayText} ago.";
  }
} else {
  visited.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisitTime-ls", now);