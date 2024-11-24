// Function to get selected options from a multi-select dropdown
function getSelectedOptions(selectElement) {
  return Array.from(selectElement.selectedOptions).map(
    (option) => option.value
  );
}

// Helper function to format lists into natural sentences
function formatList(list) {
  if (list.length === 1) return list[0]; // Single item
  if (list.length === 2) return `${list[0]} and ${list[1]}`; // Two items
  return `${list.slice(0, -1).join(", ")}, and ${list[list.length - 1]}`; // Three or more items
}

// Expanded story elements
const conflicts = [
  "must overcome a great personal loss",
  "discover a terrible secret",
  "find joy in life's simple moments",
  "reconnect with a loved one",
  "seek balance in a chaotic world",
  "help their community",
  "protect a cherished tradition",
  "navigate an unexpected friendship",
  "uncover their own hidden potential",
  "deal with an unexpected opportunity",
  "restore harmony in their environment",
  "confront a shadowy figure from their past",
  "accidentally trigger a chain of events with global consequences",
  "find themselves at the center of a forbidden love triangle",
  "protect a dangerous secret that could shatter lives",
  "team up with their sworn enemy for survival",
  "stumble upon a world-changing invention",
  "navigate a moral dilemma with no clear right or wrong",
  "save a loved one from their own destructive choices",
  "get caught in a web of political intrigue and manipulation",
  "expose corruption in their community despite personal risk",
  "realize they are living in a carefully constructed lie",
  "reconcile their own beliefs with a shocking revelation",
  "fulfill a prophecy they don’t believe in",
  "find common ground between two warring factions",
  "inherit a mysterious responsibility tied to their ancestry",
  "face the consequences of a deal they made long ago",
  "become the guardian of a power they cannot control",
  "face the consequences of an invention gone wrong",
  "struggle with guilt over an action they thought was right",
  "lead a group through an impossible journey",
];

const resolutions = [
  "and emerge stronger",
  "and find peace of mind",
  "and create lasting memories",
  "and inspire those around them",
  "and rekindle hope",
  "and find unexpected allies",
  "and bring happiness to others",
  "and discover a profound truth",
  "and cherish their newfound perspective",
  "and rebuild their life with gratitude",
  "find redemption through an unexpected act of kindness",
  "unravel the mystery and find a new purpose",
  "build a bridge between two opposing worlds",
  "uncover the truth but pay a heavy personal price",
  "learn the value of vulnerability and connection",
  "become a catalyst for change in their community",
  "accept their flaws and turn them into strengths",
  "forgive themselves and others, freeing them from guilt",
  "inspire others to follow their path of courage",
  "bring peace to their world but lose something dear",
  "find joy in creating a new life from scratch",
  "restore balance to a chaotic situation",
  "let go of what they thought they wanted for something greater",
  "turn their greatest failure into a stepping stone for success",
  "discover the beauty in imperfection and incompleteness",
  "earn the respect of those who doubted them",
  "sacrifice something precious for the greater good",
  "gain a deeper understanding of the complexity of life",
  "become a mentor or guide for others on a similar journey",
  "leave behind a legacy that lasts for generations",
];

// Generate story idea
function generateStory() {
  const genreElement = document.getElementById("genre");
  const characterElement = document.getElementById("character");
  const settingElement = document.getElementById("setting");

  // Get all selected options
  const genres = getSelectedOptions(genreElement);
  const characters = getSelectedOptions(characterElement);
  const settings = getSelectedOptions(settingElement);

  if (genres.length === 0 || characters.length === 0 || settings.length === 0) {
    document.getElementById("result").innerText =
      "Please select at least one genre, character, and setting.";
    return;
  }

  // Choose random elements from conflicts and resolutions
  const randomConflict =
    conflicts[Math.floor(Math.random() * conflicts.length)];
  const randomResolution =
    resolutions[Math.floor(Math.random() * resolutions.length)];

  // Format the result
  const genreText = `a ${formatList(genres)} story`;
  const characterText = `${formatList(characters.map((char) => `a ${char}`))}`;
  const settingText = `in ${formatList(
    settings.map((setting) => `a ${setting}`)
  )}`;
  const story = `${genreText}, featuring ${characterText} ${settingText}, who ${randomConflict} ${randomResolution}.`;

  document.getElementById("result").innerText = story.trim();
}

document.getElementById("generate").addEventListener("click", generateStory);
