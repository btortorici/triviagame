$(document).ready();
$('#start').on('click', function () {
    game.start();
})
    $(document).on('click', '#done', function(){
        game.done();
    })
var questions = [{

    question: "The Godfather movies are based on a novel by what author?",
    answers: ["Elia Kazan", "Mario Puzo", "Richard Conte", "Dario Fo"],
    correctAnswer: "Mario Puzo"
},

{
    question: "In the opening scenes of The Godfather, who is celebrating their wedding?",
    answers: ["Michael Corleone", "Sonny Corleone", "Fredo Corleone", "Connie Corleone"],
},
{
    question: "What is the name of the horse whose severed head finds its way into Hollywood producer Jack Woltz's bed when Mr. Woltz refuses to cast Johnny Fontane in his new war film?",
    answers: ["Kazan", "Shazam", "Khartoum", "Tartuffe"],
    correctAnswer: "Khartoum"
},
{
    question: "What actor won an Academy Award for his performance in The Godfather?",
    answers: ["Marlon Brando", "Al Pacino", "Robert Duvall", "James Caan"],
    correctAnswer: "Marlon Brando"
},
{
    question: "How many Academy Awards did the first Godfather movie win?",
    answers: ["3", "6", "10", "0"],
    correctAnswer: "3"
},
{
    question: "In The Godfather Part II, what does Vito Corleone receive as payment from his neighbor for hiding a bundle of handguns?",
    answers: ["Rent Money", "New Suit", "Carpet", "Canoli"],
    correctAnswer: "Carpet"
},
{
   question: "What character in The Godfather is known as The Turk?",
   answers: ["Tom Hagan", "Emilio Barzini", "Carlo Rizzi", "Virgil Sollozzo"],
   correctAnswer: "Virgil Sollozzo"
},
{
    question: "In The Godfather Part II, what country is Michael Corleone considering expanding his gambling operations into?",
    answers: ["Mexico", "Brazil", "Canada", "Cuba"],
    correctAnswer: "Cuba"
},
{
    question: "What does Don Corleone have in his mouth when he dies?",
    answers: ["Apple", "Orange", "Tomato", "Avocado"],
    correctAnswer: "Orange"
},
{
    question: "Which Godfather movie won the most Oscars?",
    answers: ["The Godfather", "The Godfather: Part II", "The Godfather: Part III", "It was a tie between Part I and II"],
    correctAnswer: "The Godfather: Part II"

}]

// Collect guesses
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0){
            console.log("time is up");
            game.done();
        }
    },

    // Start the game
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subWrapper').prepend('<h2>Time Remaining: <span id = "counter">60</span> Seconds</h2>');
            $('#start').remove();
            for(var i = 0; i < questions.length; i++){
                $('#subWrapper').append('<h2>'+questions[i].question+'</h2>');
                for(var c = 0; c < questions[i].answers.length; c++){
                    $("#subWrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[c]+"'>"+questions[i].answers[c])
                }
            }
            $('#subWrapper').append('<br><button id="done">Done!</button>')
        },
    // End the game
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function() {
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function() {
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"),function() {
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"),function() {
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        this.restult();
        },
        restult: function(){
            clearInterval(timer);
            $('#subWrapper h2').remove();

            $('#subWrapper').html("<h2>All Done!</h2>");
            $('#subWrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
            $('#subWrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
            $('#subWrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }


        
}