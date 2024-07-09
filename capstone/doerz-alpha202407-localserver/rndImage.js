const fs = require('fs');

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate an array of 6 random strings with .png extension
function generateRandomImageArray() {
  const imageArray = [];
  const usedNumbers = new Set();

  while (imageArray.length < 6) {
    const randomNumber = getRandomInt(1, 25);

    // Ensure no duplicate numbers
    if (!usedNumbers.has(randomNumber)) {
      usedNumbers.add(randomNumber);
      imageArray.push(`${randomNumber.toString().padStart(2, '0')}.png`);
    }
  }

  return imageArray;
}

// Generate 30 arrays of random images
const images = [];
for (let i = 0; i < 30; i++) {
  images.push({ image: generateRandomImageArray() });
}

// Output the result to the console
images.forEach(img => console.log(JSON.stringify(img)));

// Optionally write the result to a file
fs.writeFileSync('random_images.json', JSON.stringify(images, null, 2));
