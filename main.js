var tipday = ["Try to get everything done in the morning so you have a free evening to hang out with friends and watch Netflix.", "Write out a to-do list and a time you hope to finish each goal.", "Clean off your desk except for all the materials you will need. Put your phone in another room, and start working.", "Look up work music on Youtube and start at it. Sometimes all you need to do is begin and before you know it hours will have gone by.", "Work for 45 minutes and then take a break for 5-15 minutes, then repeat until all your work is done."]
var tipweek = ["Remind yourself to stay hydrated by drinking water daily.", "Focus more on yourself by staying offline one day per week.", "Try and finish one book in a week by reading a certain amount of pages each day.", "In the morning, try getting out of bed when your alarm goes off."]
var tipmonth = ["Set aside two days a month to meet with friends.", "See if you can go one month without soda or coffee.", "Develop a workout routine to follow each day for a month.", "Try exploring new places in your town or city at least once per week."]
var tipyear = ["Make a mood board with pictures to represent what you want to get done (ex: a weight for exercise)",  "Make a mind map at the beginning of the year with branches for spiritual health, physical health, religion, family, and hobby sectors.", "Over the course of a year, spend more time putting yourself first.", "Try doing something you've always put off. (ie: hobby, sport, goal).", "Connect with others by learning a new language."]
var button = $('.day');
var tip = tipday[Math.floor(Math.random() * tipday.length)];
var section = $('.section')
button.on("click", showDay);
function showDay() {
    event.preventDefault();
    console.log(tip);
     section.append(`${tip}</p>`);
}
var buttonweek = $('.week');
var wek = tipweek[Math.floor(Math.random() * tipweek.length)];
var section = $('.section')
buttonweek.on("click", showWeek);
function showWeek() {
   event.preventDefault();
   console.log(wek);
   section.append(`${wek}</p>`);
}
var buttonmonth = $('.month');
var mon = tipmonth[Math.floor(Math.random() * tipmonth.length)];
var section = $('.section')
buttonmonth.on("click", showMonth);
function showMonth() {
 event.preventDefault();
 console.log(wek);
 section.append(`${mon}</p>`);
}
var buttonyear = $('.year');
var yea = tipyear[Math.floor(Math.random() * tipyear.length)];
var section = $('.section')
buttonyear.on("click", showYear);
function showYear() {
event.preventDefault();
console.log(yea);
section.append(`${yea}</p>`);
}
