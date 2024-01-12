var marka = "Opel"
var model = "Astra"
var otomatik = "yes"

//if else

if (otomatik == "yes") {
    console.log("Araç otomatiktir.")
} else {
    console.log("Araç otomatik değildir.")
}
otomatik = true;

if (otomatik){
    console.log(marka+ " " + model + " "+"otomatiktir.")
}

if (10 === "10"){
    console.log("Sayılar eşittir.")
}else {
    console.log("Sayılar eşit değildir.")
}

var vites = "3"

if (vites == "1") {
    console.log("Araç manuel vitestir.")
}else if (vites == "2") {
    console.log("Araç otomatik vitestir.")
}else {
    console.log("Yanlış değer girdiniz.")
}

//switch case

vites = "2"
switch (vites) {
    case "1" : console.log("Araç manuel vitestir.")
        break;

    case "2" : console.log("Araç otomatik vitestir.")
        break;

    default : console.log("Yanlış değer girdiniz.")
}