/* =====================================================
   Profile Generator - Your Unit 7 FINAL PROJECT
   =====================================================

   This is your CAPSTONE project! Time to combine
   everything you've learned across all 7 units.

   Your mission: Build a fully working profile generator.
   The user fills out the form, you validate it, and if
   everything checks out, you display a custom profile card.

   You can also build YOUR OWN web app instead. Some ideas:
   - To-do list / task app
   - Mini quiz with scoring
   - Theme designer
   - Custom message generator
   - Simple calculator or budget tool

   If you go your own way, just hit all the requirements:
   - At least 2 different input types
   - At least 2 different event listeners
   - At least 3 DOM updates
   - At least 1 input validated
   - At least 1 if/else
   - At least 1 custom function

   Requirements (the rubric is strict, hit them all):
   - Use at least 2 input types (text, number, checkbox, etc.)
   - Use at least 2 event listeners
   - Use at least 3 DOM updates (.textContent, .style, .classList, etc.)
   - Validate at least 1 input
   - Use at least 1 if/else
   - Use at least 1 custom function (with parameters or return)
   - Add 2+ comments
   ===================================================== */


// =====================================================
// STEP 1: Grab all the elements you need
// =====================================================
// Hint: Use getElementById to grab the form, all the inputs,
// the message paragraph, and the profile card + its parts.
//
// You'll need:
// - profileForm (the form)
// - nameInput, ageInput, emailInput, hobbyInput
// - vibeSelect, termsCheck
// - message (the feedback paragraph)
// - profileCard, cardName, cardAge, cardEmail, cardHobby, cardVibe
//
// Write your code here:
let profileForm = document.getElementById("profileForm");
let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let emailInput = document.getElementById("emailInput");
let hobbyInput = document.getElementById("hobbyInput");
let vibeSelect = document.getElementById("vibeSelect");
let termsCheck = document.getElementById("termsCheck");
let message = document.getElementById("message");
let profileCard = document.getElementById("profileCard");
let cardName = document.getElementById("cardName");
let cardAge = document.getElementById("cardAge");
let cardEmail = document.getElementById("cardEmail");
let cardHobby = document.getElementById("cardHobby");
let cardVibe = document.getElementById("cardVibe");   


// =====================================================
// STEP 2: Write a validation FUNCTION
// =====================================================
// Hint: This is your custom function for the rubric.
// Make a function called validateForm that takes name, age,
// email, and agreed as parameters. It should return an
// error message string if anything is wrong, or "" (empty
// string) if everything is good.
//
// Example structure:
// function validateForm(name, age, email, agreed) {
//   if (name === "") return "Please enter your name.";
//   if (age < 13) return "You must be at least 13.";
//   if (!email.includes("@")) return "Invalid email.";
//   if (!agreed) return "You must agree to the terms.";
//   return "";  // all good
// }
//
// Write your code here:




// =====================================================
// STEP 3: Write a function to SHOW the profile card
// =====================================================
// Hint: This function takes the form data and updates the
// card's text content for each field. It also removes the
// "hidden" class so the card appears.
//
// Example structure:
// function showProfile(name, age, email, hobby, vibe) {
//   cardName.textContent = name;
//   cardAge.textContent = `Age: ${age}`;
//   cardEmail.textContent = `Email: ${email}`;
//   cardHobby.textContent = `Hobby: ${hobby}`;
//   cardVibe.textContent = `Vibe: ${vibe}`;
//   profileCard.classList.remove("hidden");
// }
//
// Write your code here:




// =====================================================
// STEP 4: Listen for the form submit
// =====================================================
// Hint: Add a "submit" event listener to profileForm.
// Inside:
// 1. Call event.preventDefault()
// 2. Read all the values from the inputs
// 3. Call validateForm with the values
// 4. If there's an error, show it in red
// 5. If no error, show success message AND show the profile card
//
// Don't forget:
// - Use .trim() on text inputs
// - Use Number() on age
// - Use .checked on the checkbox
//
// Write your code here:




// =====================================================
// STEP 5: Add a SECOND event listener
// =====================================================
// The rubric requires at least 2 event listeners. Pick one:
//
// OPTION A: Live preview as the user types their name
// nameInput.addEventListener("input", function() {
//   // update something live, like cardName
// });
//
// OPTION B: Reset the message when user starts typing
// nameInput.addEventListener("input", function() {
//   message.textContent = "";
//   message.classList.remove("error", "success");
// });
//
// OPTION C: Update card vibe in real time when select changes
// vibeSelect.addEventListener("change", function() {
//   // update card vibe
// });
//
// Pick one and write your code here:




// =====================================================
// BONUS CHALLENGES (Pick at least 1)
// =====================================================
//
// BONUS 1: Dark mode toggle
// Add a button to your HTML, then use classList.toggle("dark")
// on document.body. You'll need to add .dark styles to CSS.
//
//
// BONUS 2: Reset button
// Add a Clear/Reset button. Set all input values to "",
// uncheck the checkbox, hide the profile card again.
//
//
// BONUS 3: Live email validation
// Listen for "input" on emailInput. As they type, change
// the input border color: red if invalid, green if it
// contains @ and a dot.
//
//
// BONUS 4: Vibe-driven styling
// When the user picks a different vibe, change the
// profile card's background to a matching color.



// =====================================================
// DONE! Save and open index.html in a browser.
// Test:
// - Empty form submit shows red error about name
// - Filling out partial form shows specific errors
// - Valid submit shows green success + reveals card
// - Your bonus event listener works
//
// You did it! 7 units down. \ud83c\udfc6
// =====================================================
