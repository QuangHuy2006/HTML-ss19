let num1 = Number(prompt("nhap so thu nhat: "));
let num2 = Number(prompt("nhap so thu hai: "));
let num3 = Number(prompt("nhap so thu ba: "));
let check = "";
let max=0;
check = (num1 > num2 && num1 > num3) ? max = num1 : "";
check = (num2 > num3 && num2 > num1) ? max = num2 : "";
check = (num3 > num2 && num3 > num1) ? max = num3 : "";
document.write("so lon nhat trong 3 so la : " + max);