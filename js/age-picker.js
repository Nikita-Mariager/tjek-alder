const agetext = document.getElementById("agetext");

const ageImg = document.getElementById("ageimg");

const picker = document.getElementById("picker");

function yourAge(){

    let userBirth = picker; /* MM/DD/YYYY */

    
/* variable med navn 'today' indeholder dages dato */
    let today = new Date();
    
/* get time er altid i milisekunder */
/* omregner fødselsdato og dags dato til ms */
    let msUserBirth = userBirth.getTime();
    let msToday = today.getTime();

/* trækker dags dato i ms fra fødselsdato i ms */
    let msAge = msToday - msUserBirth;

/* omregne ms age til dage */
    let age = Math.floor(msAge/1000/60/60/24/365);
    /* omregner til: sekunder/ min / timer / dage / år */
/* indsætter img i img tag i html */

    /* hvis age er højre end 50 */
    if(age >= 50){
    ageImg.src = "images/old.jpg";
    agetext.innerHTML = "Go home, you're old!";
    

    }

    /* hvis age er laver en 50 og højre end 40 */
    else if(age < 50 && age > 40){
    ageImg.src = "images/young.jpg";
    agetext.innerHTML = "Prime";

    }

    /* hvis ingen af overstående */
    else {
    ageImg.src = "images/baby.png";
    agetext.innerHTML = "Just a baby";

    }

    
}
