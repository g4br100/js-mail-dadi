const play = document.getElementById ("play");
let user, pc;
play.addEventListener("click", button);
function button () {
    user = Math.floor ( Math.random () * 6 ) + 1;
    console.log("User number: " + user);
    document.getElementById("user").innerHTML= user;
    pc = Math.floor ( Math.random () * 6) + 1;
    console. log ("Computer number: " + pc);
    document.getElementById("pc").innerHTML= pc;
    if (user > pc){
        console.log("Ha vinto l'utente");
        document.getElementById("winner").innerHTML = "Ha vinto l'utente";
    } else if (user < pc){
        console.log("Ha vinto il computer");
        document.getElementById("winner").innerHTML = "Ha vinto il computer";
    } else {
        console.log("Pareggio");
        document.getElementById("winner").innerHTML = "Pareggio";
    }
}