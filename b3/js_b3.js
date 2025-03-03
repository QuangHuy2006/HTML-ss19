let input = prompt("nhap loai tien muon doi: ");
let USD=1;
let VND=1;
let amount = Number(prompt("nhap so luong tien ban muon doi: "));
if(input == "USD"){
    USD = amount * 23000;
    document.write(USD + " VNĐ");

}else if(input == "VND"){
    VND = amount / 23000;
    document.write(VND + " $");
}