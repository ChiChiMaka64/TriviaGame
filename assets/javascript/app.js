var questions= new Array() [
    "1. At the beginning of HSM 1, Troy and Gabriella first met at a ski lodge resort on New Year's Eve.",
    "2. At the end of the movie, Ryan and Sharpay got the lead roles in the school musical.",
    "3. Troy is the captain of the varsity basketball team and his dad is the head coach of the varsity basketball team.",
    "4. At the beginning of HSM 2, all of the main characters got jobs at a summer resort owned by Ryan and Sharpay's family.",
    "5. Troy and Gabriella are together throughout most of the movie.",
    "6. What is the name of the resort that the main characters work at?",
    "7. At the beginning of HSM 3: Senior Year, what team did the East High Wildcats play in the championship game?",
    "8. Before her high school graduation, what college did Gabriella got accepted to and get to attend early?",
    "9. At the end of the movie, what college did Troy decide to go to?",
    "10. BONUS QUESTION! Is this trilogy actually a stage musical?"
]
var choices= new Array ();
   choices[0]=["True", "False"],
   choices[1]=["True", "False"],
   choices[2]=["True", "False"],
   choices[3]=["True", "False"],
   choices[4]=["True", "False"],
   choices[5]=["Silver Springs Country Club", "Lava Springs Country Club", "Roaring Springs Country Club", "Gold Springs Country Club"],
   choices[6]=["North High Sharks", "West High Knights", "South High Snakes", "Rio Americano High Raiders"],
   choices[7]=["UC Berkeley", "Cal State University Northridge", "UCLA", "Stanford University"],
   choices[8]=["UC Davis", "UC San Diego", "UC Berkeley", "UC Riverside"],
   choices[9]=["Yes.", "YES!", "YAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!", "There is only one choice. PICK YES!!!!!!!!"]

var answers=new Array();
  answers[0]=['True']
  answers[1]=['False']
  answers[2]=['True']
  answers[3]=['True']
  answers[4]=['False']
  answers[5]=['Lava Springs Country Club']
  answers[6]=['West High Knights']
  answers[7]=['Stanford University']
  answers[8]=['UC Berkeley']
  answers[9]=['There is only one choice. PICK YES!!!!!!!!']

var questionsRight=0;
var questionsWrong=0;
i=0;
var countDownClock=45;
var timer=document.getElementById("#Timer");
var timer=setInterval(countDown(), 1000);
function countDown() {
    if (countDownClock===0) {
       clearTimeout(timer);
    } else {
        timer.innerHTML= countDownClock + "Time Remaining";
        countDownClock--;
    }
}

countDown();