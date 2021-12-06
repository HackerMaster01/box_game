var score = 0;
var noe = [];
var dark_mode = "";


function get_random() {
    var rtop = Math.floor(Math.random() * 100);
    var rleft = Math.floor(Math.random() * 100);

    document.getElementById("box").style.top = rtop + "%";
    document.getElementById("box").style.left = rleft + "%";

    score++;
    document.getElementById("live_score").innerHTML = "Score: " + score;
    console.log(score);
}

function time() {
    var counter = 5;
    var interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
            scoreboard();
            window.location.href = "./scoreboard.html";
            darkmode2();
        }else{
            document.getElementById("timer").innerHTML = "timer: " + counter;
        }
    }, 1000);
}

function start_round() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    get_random();
    time();
}
function thelevel(x) {
    var boxd = document.querySelectorAll("box");
    if (x === 1) {
        boxd.style.width = "10px";
        boxd.style.height = "10px";
    }
}

function new_game() {
    var user = document.getElementById("username");
    var levelf = document.getElementById("level");
    thelevel(user.value, levelf.value);
    noe = [user.value, levelf.value];
    console.log(user.value + "    " + levelf.value + "     " + noe);

}

function scoreboard() {

}

function darkmode() {
    var checkBox = document.getElementById("backgroundswith");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById("body1").style.backgroundColor = "black";
    document.body.style.color = "white";
    dark_mode = "black";
  } else {
    document.getElementById("body1").style.backgroundColor = "white";
    document.body.style.color = "black";
    dark_mode = "white";
  }
}
function darkmode2() {
    document.getElementById("body1").style.backgroundColor = dark_mode; 
}
