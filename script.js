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

document.getElementById("submitBtnEnglish").addEventListener("click", function() {
    submitWish('english');
});

document.getElementById("submitBtnArabic").addEventListener("click", function() {
    submitWish('arabic');
});

    

    function submitWish(language) {
        var userAnswer;
        if (language === 'english') {
            userAnswer = document.getElementById("userAnswer2").value;
        } else if (language === 'arabic') {
            userAnswer = document.getElementById("userAnswerArabic").value;
        }

        // Process or store the wish data on the server if needed

        // Redirect to the Thank You page
        window.location.href = "thankyou.html";
    }


  