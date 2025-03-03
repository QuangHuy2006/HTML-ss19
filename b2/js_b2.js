let input2 = prompt("nhap ki tu bat ky: ");
let input =input2.toString();
let cntchar=0;
let cntdigit=0;
let sum=0;
for(let i=0; i< input.length; i++){
    if(isNaN(input[i]) == true){
        cntchar=1; 
    }
    if(isNaN(input[i]) == false){
        cntdigit=1;
    }
}
sum = cntchar + cntdigit;
if(sum >= 2){
    document.write("không phải là kí tự");
}else{
if(isNaN(input) == false){
    document.write("chữ số");
}else if(isNaN(input) == true){
    document.write("chữ cái ");
}
}