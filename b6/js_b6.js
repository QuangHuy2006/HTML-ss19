let num1 = Number(prompt("nhap so thu nhat: "));
let num2 = Number(prompt("nhap so thu hai: "));
let num3 = Number(prompt("nhap so thu ba: "));
let delta = Number(num2*num2 - 4*num1*num3);
let x = 0;
if(delta > 0){
    let x1=(-num2 + Math.sqrt(delta))/ 2*num1;
    let x2=(-num2 - Math.sqrt(delta))/ 2*num1;
    document.write("x1 = " + x1 + "<br>");
    document.write("x2 = " + x2);
}else if(delta == 0){
    x= -1 * num2 / 2 * num1;
    document.write("pt co nghiem kep = " + x);
}else{
    document.write("pt vo nghiem");
}