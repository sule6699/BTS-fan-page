function toggleMembers() {
    var memberNames = document.getElementById("member-names");

    if (memberNames.style.display === "none" || memberNames.style.display === "") {
        memberNames.style.display = "block";
    } else {
        memberNames.style.display = "none";
    }
}









let currentLanguage = 'en';

function switchLanguage(language) {
  currentLanguage = language;
  updateContent();
}

function updateContent() {
  const englishContent = document.querySelectorAll('#english-content');
  const arabicContent = document.querySelectorAll('#arabic-content');

  if (currentLanguage === 'en') {
    showElements(englishContent);
    hideElements(arabicContent);
  } else {
    showElements(arabicContent);
    hideElements(englishContent);
  }
}

function showElements(elements) {
  elements.forEach(element => {
    element.style.display = 'block';
  });
}

function hideElements(elements) {
  elements.forEach(element => {
    element.style.display = 'none';
  });
}

function checkAnswer(answer) {
  // Example: Update the answer element with the selected answer
  const answerElement = document.getElementById('answer1');
  answerElement.textContent = `Selected answer: ${answer}`;
}

// You can add more functions as needed
  
// Get all buttons in the section
var buttons = document.querySelectorAll('.section button');

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the background color of the clicked button between green and default
    if (this.style.backgroundColor === 'green') {
      this.style.backgroundColor = ''; // Set to default color
    } else {
      this.style.backgroundColor = 'green';
    }
  });
});


// here 



document.addEventListener('DOMContentLoaded', function () {
  let submitBtn = document.getElementById('submitBtnThankYou');
  let thankYouMessage = document.getElementById('thankYouMessage');

  submitBtn.addEventListener('click', function () {
      // Show the Thank You message
      thankYouMessage.style.display = 'block';
  });
});














// this for the icon menu to work with arab and english button 

function toggleMembers() {
    var memberNames = document.querySelectorAll('.member-names');

    memberNames.forEach(function (names) {
        if (names.style.display === "none") {
            names.style.display = "block";
        } else {
            names.style.display = "none";
        }
    });
}
