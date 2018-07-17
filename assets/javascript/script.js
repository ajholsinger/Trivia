//Global Variables

var questions = [{
	question: "How many licks does it take to get to the center of a tootsie pop?",
	answers: ["10", "30", "none", "The world may never know"],
	correctAnswer: "The world may never know"
}, {
	question: "Who is the best point guard in the NBA?",
	answers: ["Kryie Irving - Boston Celtics", "Steph Curry - Golden State Warriors", "James Harden - Houston Rockets", "Kemba Walker - Charlotte Hornets"],
	correctAnswer: "Kryie Irving - Boston Celtics"
}, {
	question: "What team did Shaq play for?",
	answers: ["LA Clippers", "Charlotte Bobcats", "LA Lakers", "Miami Heat"],
	correctAnswer: "LA Lakers"
}, {
	question: "How many fouls does it take to foul out of a game in the NBA?",
	answers: ["8", "6", "5", "4"],
	correctAnswer: "6"
}, {
	question: "What year was the Charlotte Bobcats changed back to the Charlotte Hornets?",
	answers: ["2018", "4135", "2014", "2009"],
	correctAnswer: "2014"
}];

//get random object from array
var getObject = questions[Math.floor(Math.random() * questions.length)];

//When question is selected, log the object with correct answer
$("#start-button").on("click", function() {
	console.log(getObject.question);
	console.log(getObject.answers);
	console.log(getObject.correctAnswer);
	$("#timer").html(countdown)
});
		var count = 30;
		var timer = setInterval(countdown, 1000);
		var timerDiv = $('#timer');

function countdown() {
    if (count <= 0) {
        clearTimeout(timer);
    } else {
        timerDiv.html = count + ' seconds remaining';
        count--;
    };
};
