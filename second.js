var extrableh = ["If people are doubting how far you can go, go so far that you can't hear them anymore. - Michele Ruiz", "Don't compare your life to others. There's no comparison between the sun and the moon, they shine when it's their time. -Unknown", "I BELIEVE IN YOU - Unknown"]
var bleh = ["We are all in the gutter, but some of us are looking at the stars. - Oscar Wilde", "The only person you should try to be better than is the person you were yesterday. - Unknown", "A closed mind will give you an expected outcome, but an open mind will give you incredible possibilities. - Unknown", "There are far, far better things ahead than any we leave behind. - C.S. Lewis"]
var meh = ["Make your life a masterpiece, imagine no limitations on what you can be, have, or do. - Brian Tracy", "Creativity takes courage. - Henri Matisse", "Expect problems and eat them for breakfast. - Alfred A. Montapert"]
var yeh = ["Be somebody who makes everybody feel like a somebody. - Courtney Shields", "I find beauty in unusual things, like hanging your head out the window or sitting on a fir escape. - Scarlett Johansson", "If it's still on your mind, it;s worth taking the risk. - Unknown"]
var extrayeh = ["Mind your own biscuits and life will be gravy. - Unknown", "Here comes a great day in 3 . . . 2 . . . 1 . . .GO", "No one is you and that is your power. - Unknown"]
var slide = document.getElementById('slide');
var exb = extrableh[Math.floor(Math.random() * extrableh.length)];
var ble = bleh[Math.floor(Math.random() * bleh.length)];
var mah = meh[Math.floor(Math.random() * meh.length)];
var ya = yeh[Math.floor(Math.random() * yeh.length)];
var exy = extrayeh[Math.floor(Math.random() * extrayeh.length)];
var sectionmd = $('.sectionmd')
sliderDiv = document.getElementById("sliderAmount");
slide.onchange = function() {
 if (this.value == 250) {
 $('.face').attr('src', 'https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-happy_r9hswo.png');
 (sectionmd).append(`<p>${exy}</p>`);
}else if(this.value == 200){
    $('.face').attr('src', 'https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/happy_k51drq.png');
    (sectionmd).append(`<p>${ya}</p>`);
}else if(this.value == 150){
    $('.face').attr('src', 'https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/average_t4kd0z.png');
    (sectionmd).append(`<p>${mah}</p>`);
}else if(this.value == 100){
    $('.face').attr('src', 'https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/sad_fm4jg7.png');
    (sectionmd).append(`<p>${ble}</p>`);
}else if(this.value == 50){
    $('.face').attr('src', 'https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-mad_bsczhk.png');
    (sectionmd).append(`<p>${exb}</p>`);
}
}
