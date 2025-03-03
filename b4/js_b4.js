let num = Number(prompt("nhap vao so bat ky: "));
if(isNaN(num) == true){
    document.write("khong phai so");
}else{
    if(num % 3 == 0 && num % 5 == 0){
        document.write("so chia het cho ca 3 va 5");
    }else{
        if(num % 3 == 0 && num % 5 !=0){
            document.write("so chia het cho 3 va khong chia het cho 5");
        }else{
            document.write("so chia het cho 5 va khong chia het cho 3");
        }
    }
}