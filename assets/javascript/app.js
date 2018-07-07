var HSMQuestions = [
    {
        question: "1. At the beginning of HSM 1, Troy and Gabriella first met at a ski lodge resort on New Year's Eve.",

        choices: ["True", "False"],

        correctAnswer: 0

    },
    {
        question: "2. At the end of the movie, Ryan and Sharpay got the lead roles in the school musical.",

        choices: ["True", "False"],

        correctAnswer: 1

    },

    {
        question: "3. Troy is the captain of the varsity basketball team and his dad is the head coach of the varsity basketball team.",

        choices: ["True", "False"],

        correctAnswer: 0

    },
    {
        question: "4. At the beginning of HSM 2, all of the main characters got jobs at a summer resort owned by Ryan and Sharpay's family.",

        choices: ["True", "False"],

        correctAnswer: 0

    },
    {
        question: "5. Troy and Gabriella are together throughout most of the movie.",

        choices: ["True", "False"],

        correctAnswer: 1

    },
    {
        question: "6. What is the name of the resort that the main characters work at?",

        choices: ["Silver Springs Country Club", "Lava Springs Country Club", "Roaring Springs Country Club", "Gold Springs Country Club"],

        correctAnswer: 1

    },
    {
        question: "7. At the beginning of HSM 3: Senior Year, what team did the East High Wildcats play in the championship game?",

        choices: ["North High Sharks", "West High Knights", "South High Snakes", "Rio Americano High Raiders"],

        correctAnswer: 1

    },
    {
        question: "8. Before her high school graduation, what college did Gabriella got accepted to and get to attend early?",

        choices: ["UC Berkeley", "Cal State University Northridge", "UCLA", "Stanford University"],

        correctAnswer: 3

    },
    {
        question: "9. At the end of the movie, what college did Troy decide to go to?",

        choices: ["UC Davis", "UC San Diego", "UC Berkeley", "UC Riverside"],

        correctAnswer: 2

    },
    {
        question: "10. BONUS QUESTION! Is this trilogy actually a stage musical?",

        choices: ["Yes.", "YES!", "YAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!", "There is only one choice. PICK YES!!!!!!!!"],

        correctAnswer: 3

    },
]



var countDownClock = 45;
var timerElement = document.getElementById("Timer");
var timer = setInterval(countDown, 1000);
function countDown() {
    if (countDownClock === 0) {
        clearTimeout(timer);
    } else {
        countDownClock--;
        timerElement.innerHTML = "Time Remaining: " + countDownClock;
    }
}


$("#submit").on("click", function () {
    var UserGuess = " ";
    var questionsRight = 0;
    var questionsWrong = 0;
    for (var i = 0; i < HSMQuestions.length; i++) {
        var answer = $('input[name=radio-question'+ (i+1) + ']:checked').val();
        if(answer ==HSMQuestions[i].correctAnswer) {
            questionsRight++;
        }
        else {
            questionsWrong++;
        }
       // console.log(HSMQuestions[i].correctAnswer)
        //   //  document.onclick = function (event) {
        //         if (UserGuess === HSMQuestions[i].correctAnswer) {
        //             alert("YOU are a true Wildcat! Show off your Wildcat Pride!");
        //             questionsRight++;
        //         }
        //         else {
        //             alert("It's OK. Come on over to East High and we will make YOU a true Wildcat!");
        //             questionsWrong++;
        //         }
        //   }
    }
   $("#RightAnswers").text(questionsRight)
   $("#WrongAnswers").text(questionsWrong)
}
);
   // countDown();