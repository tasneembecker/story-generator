// Toggle dropdown visibility
document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle("show");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });
});

// Function to get the selected option from a dropdown
function getSelectedOption(containerId) {
  const container = document.getElementById(containerId);
  const selectedItem = container.querySelector(".dropdown-item.selected");
  return selectedItem ? selectedItem.dataset.value : null;
}

// Add event listeners to dropdown items for selection
document.querySelectorAll(".dropdown-menu").forEach((menu) => {
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-item")) {
      // Remove "selected" class from other items in the same menu
      menu
        .querySelectorAll(".dropdown-item")
        .forEach((item) => item.classList.remove("selected"));
      // Add "selected" class to clicked item
      e.target.classList.add("selected");

      // Update button text to show the selected value
      const dropdown = menu.parentElement;
      const button = dropdown.querySelector(".dropdown-btn");
      button.textContent = e.target.textContent;

      // Close the dropdown
      dropdown.classList.remove("show");
    }
  });
});

// Helper function to format the story components
function formatList(list) {
  if (!list) return "";
  return list;
}

// Generate story idea
function generateStory() {
  const genre = getSelectedOption("genre-menu");
  const character = getSelectedOption("character-menu");
  const setting = getSelectedOption("setting-menu");

  if (!genre || !character || !setting) {
    document.getElementById("result").innerText =
      "Please select a genre, character, and setting.";
    return;
  }

  const conflicts = ["must save the world", "faces a moral dilemma"];
  const resolutions = ["and emerges stronger", "and finds peace"];
  const conflict = conflicts[Math.floor(Math.random() * conflicts.length)];
  const resolution =
    resolutions[Math.floor(Math.random() * resolutions.length)];

  const story = `In a ${formatList(genre)} story, ${formatList(
    character
  )} in ${formatList(setting)} ${conflict} ${resolution}.`;

  document.getElementById("result").innerText = story;
}

// Add event listener to the Generate button
document.getElementById("generate").addEventListener("click", generateStory);
