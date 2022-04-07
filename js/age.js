const agetext = document.getElementById("agetext");

const ddlDays = document.getElementById("ddlDay");

let arrDays = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


for(let i = 0; i< arrDays.length; i++){
    
    let opt = arrDays[i];
    let el = document.createElement("option");
    if(i<=8){
        
        el.textContent = "0"+opt;
    }
    else {
        
        el.textContent = opt;
    }
    el.value = opt;
    ddlDays.appendChild(el);
}


const ddlMonths = document.getElementById("ddlMonth");

let arrMonths = [
    "Januar",
    "februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
];


for(let i = 0; i< arrMonths.length; i++){
    
    let opt = arrMonths[i];
    let el = document.createElement("option");    
    el.textContent = opt;
    let valueMonths = i+1;
    el.value = valueMonths;
    ddlMonths.appendChild(el);
}



const ddlYears = document.getElementById("ddlYear");


let arrYears = Array.from(Array(new Date().getFullYear() - 1899), (_, i) => (i + 1900).toString())


for(let i = 0; i< arrYears.length; i++){
    
    let opt = arrYears[i];
    let el = document.createElement("option");    
    el.textContent = opt;
    el.value = opt;
    ddlYears.appendChild(el);
}


const ageImg = document.getElementById("ageimg");

function yourAge(){

    let userBirth = new Date(ddlMonths.value + "/" + ddlDays.value + "/" + ddlYears.value); /* MM/DD/YYYY */

    
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
