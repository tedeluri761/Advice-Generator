const dice = document.getElementById("dice");
const span = document.getElementById("span");
const alladvice = document.querySelectorAll(".alladvice"); // Select all advice paragraphs

dice.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * alladvice.length); // Get a random number
  console.log(randomNumber);

  alladvice.forEach((para, index) => {
    para.style.display = index === randomNumber ? "block" : "none"; // Show the selected advice
  });

  span.textContent = `#${randomNumber + 1}`; // Update the span with the new advice number
});

// Optional: Automatically show a random advice every 10 seconds
setInterval(() => {
  const randomNumber = Math.floor(Math.random() * alladvice.length);
  alladvice.forEach((para, index) => {
    para.style.display = index === randomNumber ? "block" : "none";
  });

  span.textContent = `#${randomNumber + 1}`;
}, 10000);
