// Game output calculation
function processGame() {
        var firstInput = document.getElementById("input");
        var secondInput = document.getElementById("input-2");
        var loveScores = Math.floor(Math.random()*100) + 1;


         if (loveScores < 40) {
            document.querySelector("em").innerHTML = firstInput.value + " " + "and" + " " + secondInput.value + " " +
            "your Lovescores is" + " "
            + loveScores + "%" + " " + "and" + " " + " " + "i don't think it will work.";
        } else if (loveScores >= 41 && loveScores <= 60) {
            document.querySelector("em").innerHTML = firstInput.value + " " + "and" + " " + secondInput.value + " " +
            "your Lovescores is" + " "
            + loveScores + "%" + " " + "and" + " " + " " +
            "put in more pressure guys, you might end up with babies.";
        } else {
            document.querySelector("em").innerHTML = firstInput.value + " " + "and" + " " + secondInput.value + " " +
            "your Lovescores is" + " "
            + loveScores + "%" + " " + "and" + " " + " " +
            "Don't think of breaking up, because the two of you are compatible.";
        }

    }

//  reload function to defult state
    function reload() {
        document.getElementById("emphasis").innerHTML =
        "check here for ypur result after the names are written in the input!";
    }




//    for (var i = 0; i < 1; i++) {
//        document.getElementById("reload")[i].addEventListener("click", function(){
//            document.querySelectorAll("input").style.background = "purple";
//        })
//    }



//     function error_message(id, message){
//         document.getElementById(id).innerText = message;
//     }

//     function gameFlow() {
//     var firstInput = document.getElementById("input");
//     var secondInput = document.getElementById("input-2");
//      var firstInputvalue = firstInput.value;
//     var secondInputvalue = secondInput.value;

//     if (firstInput === "") {
//         firstInput.style.border = "1px solid #ff8471";
//         error_message("un-err-msg", "This field cannot be empty");
//     }else if (firstInput.length < 2) {
//         firstInput.style.border = "1px solid #ff8471";
//         error_message("un-err-msg", "Plese enter a name not a Number");
//     } else {
//         firstInput.style.border = "1px solid #ff8471";
//         error_message("un-err-msg", "");
//     }


//     if (secondInput === "") {
//         secondInput.style.border = "1px solid #ff8471";
//         error_message("pn-err-msg", "This field cannot be empty");
//     } else if (secondInput.length < 2) {
//         secondInput.style.border = "1px solid #ff8471";
//         error_message("pn-err-msg", "please enter a name not a number");
//     } else {
//         secondInput.style.border = "1px solid #ff8471";
//         error_message("pn-err-msg", "");
//     }

//     if(firstInput == "" || secondInput == "" || firstInput.length
//     < 6 || secondInput.length < 6) {

//         return false;
//     } else {
//         return true;
//     }

//     }

//     var input_items = document.querySelectorAll("input");

// input_items. forEach((input_item, input_index)=>{
//     input_item.addEventListener("input",()=>{
//         if (input_item.value.length == 0){
//             input_item.style.border = "1px solid #ff8471"
//           input_item.parentElement.nextElementSibling.innerText =
//           "This field cannot be empty"
//         } else {
//             input_item.style.border = "1px solid #7b5be4"
//             input_item.parentElement.nextElementSibling.innerText =
//             ""
//         }
//     })
// })


// function getFibonacci(n){
//  var output = [];
//  var i = 0;

//     for(var i = 0; i < 10; i++){
//         if ( n === 1){
//          output [0];
//         } else if ( n === 2){
//             output [ 0 , 1];
//         } else {
//             output [ 0 , 1];
//            for ( i = 2; i < output.length; i++){
//                output.push(output [output.length  -2 ] + output [output.length  -1 ])
//            }
//         }
//     }
//     return output;


// }
// ouput.getFibonacci(5);
// console.log(output);
