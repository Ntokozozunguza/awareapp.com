document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to stay on the same page

    // Get the answers to the questions
    const question1Answer = document.querySelector('input[name="question1"]:checked');
    const question2Answer = document.querySelector('input[name="question2"]:checked');

    // Check if answers are provided
    if (!question1Answer || !question2Answer) {
        alert("Please answer all the questions.");
        return;
    }

    // Calculate the score
    let score = 0;
    if (question1Answer.value === 'yes') score++;
    if (question2Answer.value === 'yes') score++;

    // Display results
    let resultText = '';
    if (score === 0) {
        resultText = "You seem to have a healthy relationship. Keep it up!";
    } else if (score === 1) {
        resultText = "You may want to keep an eye on your habits and consider seeking more information.";
    } else {
        resultText = "It might be time to seek support and explore resources for managing addiction.";
    }

    // Show results div and set result text
    document.getElementById('results').style.display = 'block';
    document.getElementById('quiz-results-text').innerText = resultText;
});

