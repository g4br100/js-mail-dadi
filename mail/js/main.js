const memoriamail = ["1234@gmail.com", "abcd@gmail.com", "qwerty@gmail.com", "lorem@gmail.com"];
console.log(memoriamail);
const inviobottone = document.getElementById("send");
inviobottone.addEventListener("click", invio);
function invio() {
    let p = 0;
    mail = document.getElementById("mail").value;
    console.log("mail " + mail);
    for (let i = 0; i < memoriamail.length; i++ ) {
        console.log(memoriamail[i]);
        if (mail === memoriamail[i]) {
            document.getElementById("esito").innerHTML = "Pass";
            console.log("Pass");
            p = 1;
        } 
    }
    if (p === 0) {
        document.getElementById("esito").innerHTML = "Not pass";
            console.log("Not pass");
    }
}

