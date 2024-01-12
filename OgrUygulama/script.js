var ad = prompt("Adınızı giriniz :");
var ogrNo = prompt("Numaranızı giriniz :");
var ders = prompt("Dersinizi giriniz :");
var vize = prompt("Vize notunuzu giriniz :");
var final = prompt("Final notunuzu giriniz :");

var ortalama = (Number(vize) + Number(final))/2;

console.log(ad + " isimli " + ogrNo + " numaralı öğrencinin " + ders + " dersi not ortalaması " +ortalama+ "'dır.")
