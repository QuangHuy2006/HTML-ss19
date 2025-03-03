let input = Number(prompt("nhap so thang bat ky: "));
if(input >0 && input <=12){
    switch(input){
        case 4: case 6: case 9: case 11:
            document.write("tháng có 30 ngày !");
            break;
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            document.write("tháng có 31 ngày !");
            break;
        case 2:
            document.write("tháng có 28/29 ngày tùy vào năm nhuận !");
            break;
        default:
            document.write("tháng không hợp lệ !");
            break;
    }      
}else{
    document.write("tháng không hợp lệ !");
}