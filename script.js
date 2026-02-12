const textContainer = document.getElementById('text-container');
const fullText = 
`
...and I hung up the phone. Immediately I recollected the voice that had spoken in 
German. It was that of Captain Richard Madden. Madden, in Viktor Runeberg's 
office, meant the end of all our work and - though this seemed a secondary matter, 
or should have seemed so to me - of our lives also. His being there meant that 
Runeberg had been arrested or murdered. 1 Before the sun set on this same day, I ran 
the same risk. Madden was implacable. Rather, to be more accurate, he was obliged 
to be implacable. An Irishman in the service of England, a man suspected of equivocal 
feelings if not of actual treachery, how could he fail to welcome and seize upon this 
extraordinary piece of luck: the discovery, capture and perhaps the deaths of two 
agents of Imperial Germany?
`
const words = fullText.split(' ');
let index = 0;

function addNextWord() {
  if (index < words.length) {
    // Create a new span for each word to allow individual styling if needed
    const span = document.createElement('span');
    span.textContent = words[index] + ' '; // Add space after the word
    textContainer.appendChild(span);
    index++;
  } else {
    // Stop the interval when all words are shown
    clearInterval(wordInterval);
  }
}

// Set an interval to add a word every 200 milliseconds
const wordInterval = setInterval(addNextWord, 200);