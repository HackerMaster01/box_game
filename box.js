var score = 0;
var noe = [];
var round = 1;


function get_random() {
    var rtop = Math.floor(Math.random() * 100);
    var rleft = Math.floor(Math.random() * 100);

    document.getElementById("box").style.top = rtop + "%";
    document.getElementById("box").style.left = rleft + "%";

    score++;
    document.getElementById("live_score").innerHTML = "Score: " + score;
}

function time() {
    var counter = 5;
    document.getElementById("timer").innerHTML = "Timer: 5";
    var interval = setInterval(function () {
        counter--;
        // Display 'counter' wherever you want to display it.
        if (counter <= 0) {
            localStorage.setItem("score", score);
            window.location.href = "./scoreboard.html";
        } else {
            document.getElementById("timer").innerHTML = "Timer: " + counter;

        }
    }, 1000);
}

function start_round() {
    document.getElementById("start").style.display = "none";
    document.getElementById("box").style.display = "block";
    document.body.style.backgroundColor = localStorage.getItem("dark_mode1");
    document.body.style.color = localStorage.getItem("dark_mode2");
    var level = localStorage.getItem("level");

    thelevel(level);
    get_random();
    time();
}

function thelevel(x) {
    var boxd = document.getElementById("box");
    if (x === 1) {
        boxd.style.width = "10px";
        boxd.style.height = "10px";
    } else if (x === 2) {
        boxd.style.width = "20px";
        boxd.style.height = "20px";
    } else if (x === 3) {
        boxd.style.width = "30px";
        boxd.style.height = "30px";
    } else if (x === 4) {
        boxd.style.width = "40px";
        boxd.style.height = "40px";
    } else if (x === 5) {
        boxd.style.width = "50px";
        boxd.style.height = "50px";
    }
}

function box_game() {
    localStorage.setItem("user", document.getElementById("username").value);
    localStorage.setItem("level", document.getElementById("level").value);
}

function new_game() {
    window.location.href = "./index.html";
}

function scoreboard() {
    document.body.style.backgroundColor = localStorage.getItem("dark_mode1");
    document.body.style.color = localStorage.getItem("dark_mode2");
    var score = localStorage.getItem("score");
    var user = localStorage.getItem("user");
    var level = localStorage.getItem("level");

    // add to table
    var x = document.getElementById('myTable').insertRow(-1);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    var v = x.insertCell(2);
    var l = x.insertCell(3);
    y.innerHTML = round;
    z.innerHTML = user;
    v.innerHTML = score;
    l.innerHTML = level;

    round++;

    noe.push(user, level);
    console.log(user + "   fff " + level + "     " + noe + "    " + round);
}

function darkmode_get() {
    var checkBox = document.getElementById("backgroundswith");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        document.getElementById("body1").style.backgroundColor = "black";
        document.body.style.color = "white";
        localStorage.setItem("dark_mode1", "black");
        localStorage.setItem("dark_mode2", "white");
    } else {
        document.getElementById("body1").style.backgroundColor = "white";
        document.body.style.color = "black";
        localStorage.setItem("dark_mode1", "white");
        localStorage.setItem("dark_mode2", "black");
    }
}