let str = prompt("nhap vao chuoi bat ky: ");
let spacecnt = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
        spacecnt++;
    }
}
if(spacecnt){
    document.write("chuoi chua dau cach");
}else{
    document.write("chuoi khong chua dau cach");
}