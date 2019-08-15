//  var slider = $("slider");
// output.innerHTML = slider.value;
//
//  slider.oninput = function() {
//    output.innerHTML = this.value;
//    if(ui.value == 50){
//      console.log('Hi')
//        $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-happy_r9hswo.png');
//    }else if(ui.value == 100){
//        $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/happy_k51drq.png');
//    }else if(ui.value == 150){
//        $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/average_t4kd0z.png');
//   }else if(ui.value == 200){
//       $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/sad_fm4jg7.png');
//    }else(ui.value == 250){
//        $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-mad_bsczhk.png');
//    };
// }
//  });
//  $("#mood").val(steps[$("#slider").slider("value")]);
//  });
//  }
//
//  $(function() {
//      $("#slider").slider({
//          value: 2,
//          min: 0,
//          max: 4,
//          step: 1,
//          slide: function(event, ui) {
//             $("#mood").val(steps[ui.value]);
//          },
//          change: function(event, ui){
//          if(ui.value == 0){
//              $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-happy_r9hswo.png');
//          }else if(ui.value == 1){
//              $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/happy_k51drq.png');
//          }else if(ui.value == 2){
//              $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/average_t4kd0z.png');
//          }else if(ui.value == 3){
//             $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/sad_fm4jg7.png');
//          }else if(ui.value == 4){
//              $('#mood-icon').attr('src','https://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-mad_bsczhk.png');
//         };
//        }
//      });
//      $("#mood").val(steps[$("#slider").slider("value")]);
//  });

var slide = document.getElementById('slide'),
    sliderDiv = document.getElementById("sliderAmount");

slide.onchange = function() {
    sliderDiv.innerHTML = this.value;
}​
