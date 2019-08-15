var extrableh = ["If people are doubting how far you can go, go so far that you can't hear them anymore. - Michele Ruiz", "Don't compare your life to others. There's no comparison between the sun and the moon, they shine when it's their time. -Unknown", "I BELIEVE IN YOU - Unknown"]
var bleh = ["We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde", "The only person you should try to be better than is the person you were yesterday. - Unknown", "A closed mind will give you an expected outcome, but an open mind will give you incredible possibilities. - Unknown", "There are far, far better things ahead than any we leave behind. - C.S. Lewis"]
var meh = ["Make your life a masterpiece, imagine no limitations on what you can be, have, or do. - Brian Tracy", "Creativity takes courage. - Henri Matisse", "Expect problems and eat them for breakfast. - Alfred A. Montapert"]
var yeh = ["Be somebody who makes everybody feel like a somebody. - Courtney Shields", "I find beauty in unusual things, like hanging your head out the window or sitting on a fir escape. - Scarlett Johansson", "If it's still on your mind, it;s worth taking the risk. - Unknown"]
var extrayeh = ["Mind your own biscuits and life will be gravy. - Unknown", "Here comes a great day in 3 . . . 2 . . . 1 . . .GO", "No one is you and that is your power. - Unknown"]

var tipday = ["Try to get everything done in the morning so you have a free evening to hang out with friends and watch Netflix.", "Write out a to-do list and a time you hope to finish each goal.", "Clean off your desk except for all the materials you will need. Put your phone in another room, and start working.", "Look up work music on Youtube and start at it. Sometimes all you need to do is begin and before you know it hours will have gone by.", "Work for 45 minutes and then take a break for 5-15 minutes, then repeat until all your work is done."]
var tipweek = ["one", "two", "three"]
var tipmonth = ["one", "two", "three"]
var tipyear = ["Make a mood board with pictures to represent what you want to get done (ex: a weight for exercise) and put it in a place that you will see everyday.", "Make a mind map at the beginning of the year with branches for spiritual health, physical health, religion, family,   "]

var button = $('.day');
var tip = tipday[Math.floor(Math.random() * tipday.length)];
var section = $('.section')

button.on("click", showDay);
function showDay() {
    event.preventDefault();
    console.log(tip);
    section.append(`<p>${tip}</p>`);
}

var buttonweek = $('.week');
var wek = tipweek[Math.floor(Math.random() * tipweek.length)];
var section = $('.section')

buttonweek.on("click", showWeek);
function showWeek() {
    event.preventDefault();
    console.log(wek);
    section.append(`<p>${wek}</p>`);
}

var buttonmonth = $('.month');
var mon = tipmonth[Math.floor(Math.random() * tipmonth.length)];
var section = $('.section')

buttonmonth.on("click", showMonth);
function showMonth() {
    event.preventDefault();
    console.log(mon);
    section.append(`<p>${mon}</p>`);
}

var buttonyear = $('.year');
var yea = tipyear[Math.floor(Math.random() * tipyear.length)];
var section = $('.section')

buttonyear.on("click", showYear);
function showYear() {
    event.preventDefault();
    console.log(yea);
    section.append(`<p>${yea}</p>`);
}
