// function to calculate the result of the survey
$(document).ready(
    (score = () => {
        let adventurescore = 0;
        let comfortscore = 0;
        let countryscore = 0;

        // get a list of the radio inputs on the page
        let choices = document.getElementsByTagName("input");
        // loop through all the radio inputs
        for (i = 0; i < choices.length; i++) {
            // if the radio is checked..
            if (choices[i].checked) {
                // add 1 to that choice's score
                if (choices[i].value == "ad1") {
                    adventurescore = adventurescore + 1;
                }
                if (choices[i].value == "com2") {
                    comfortscore = comfortscore + 1;
                }
                if (choices[i].value == "coun3") {
                    countryscore = countryscore + 1;
                }
                
            }
        }
        // Find out which choice got the highest score.
        let maxscore = Math.max(adventurescore, comfortscore, countryscore);
        // Display answer corresponding to that choice
        let answerbox1 = document.getElementById("answer");
        if (adventurescore == maxscore) {
            // If user chooses the first choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "You are an adventure seeker... why not look at our Adventure package";
        }
        if (comfortscore == maxscore) {
            // If user chooses the second choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "Looking for a relaxing getaway? Enjoy a week away in our Comfort package";
        }
        if (countryscore == maxscore) {
            // If user chooses the third choice the most, this outcome will be displayed.
            answerbox1.innerHTML = "You seek the Country life... enjoying nature, local towns... why not explore our Country packages";
        }
        if(countryscore == maxscore && comfortscore == maxscore && adventurescore == maxscore) {
                answerbox1.innerHTML = "Fill in the above for your choice!";
                }
    })
);

// program the reset button
$(resetAnswer = () => {
        let answerbox = document.getElementById("answer");
        answerbox.innerHTML = "Your result will show up here!";
    });