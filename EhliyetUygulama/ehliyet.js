var yas = prompt("Lütfen yaşınızı giriniz.")

if (yas >= 18) {
    console.log("Ehliyet alabilirsiniz.")
}else {
    console.log("Ehliyet alamazsınız. "+ (18-yas) + " yıl sonra ehliyet alabilirsiniz.")
}

var ay = prompt("Ay bilgisi giriniz : ")

switch (ay){
    case "12":
    case "1":
    case "2":
        console.log("Kış mevsiminzdesiniz.")
        break

    case "3":
    case "4":
    case "5":
        console.log("İlkbahar mevsimindesiniz.")
        break

    case "6":
    case "7":
    case "8":
        console.log("Yaz mevsimindesiniz.")
        break

    case "9":
    case "10":
    case "11":
        console.log("Sonbahar mevsimindesiniz.")
        break

    default: console.log("Yanlış değer giriniz.")

}