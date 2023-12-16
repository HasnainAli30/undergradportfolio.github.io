// Define the text to be typed
var text = "Electronics.";

// Get the element where the text will be displayed
var element = document.getElementById("typing-text");

// Set the initial index to zero
var index = 0;
var interval = 100;
var waitTime = 2000; // Time to wait before clearing the text (in milliseconds)

// Define a function to type one character at a time
function type() {
  // If the index is less than the length of the text
  if (index < text.length) {
    // Append the next character to the element's innerHTML
    element.innerHTML += text.charAt(index);
    // Increment the index
    index++;
    // Set a timeout to call the function again after some delay
    setTimeout(type, 100);
  } else if (index === text.length) {
    // If the index is equal to the length of the text
    // Set a timeout to call the clear function after the wait time
    setTimeout(clear, waitTime);
  }
}

function clear() {
  // Clear the element's innerHTML
  element.innerHTML = "";
  // Reset the index
  index = 0;
  // Set a timeout to call the type function again after the interval time
  setTimeout(type, interval);
}

type();


