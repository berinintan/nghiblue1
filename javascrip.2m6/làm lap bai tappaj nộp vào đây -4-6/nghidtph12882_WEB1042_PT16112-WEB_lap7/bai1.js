var gio = document.querySelector("#gio");
var nhapChuot = 0;
var content1 = document.querySelector("#content1");
var Content2 = document.querySelector("#content2");
var color = document.querySelector('.color select');
var size = document.querySelector('.size select');
var qty = document.querySelector('.qty input');
var btnAddtocart = document.querySelector('#btnAddtocart');
var btnAddtowishlist = document.querySelector('#btnAddtowishlist');
var giohang = document.querySelector('.giohang');
var wrapper = document.querySelector('#wrapper');
var btnhuydonhang = document.querySelector('#btnhuydonhang');
var giaodich = document.querySelector('.giaodich');
btncolor = document.querySelector('.btncolor');
btnsize = document.querySelector('.btnsize');
btnprice = document.querySelector('.btnprice');
btnqua = document.querySelector('.btnqua');
btnbox=document.querySelector('.box');
var right=document.querySelector('#right');
var btnthanhtoan=document.querySelector('#btnthanhtoan');
var hoten=document.querySelector('.hoten');
var sdt=document.querySelector('.sdt');
var diachi=document.querySelector('.diachi');
var tam=document.querySelector('.tam');
var tien=document.querySelector('.tien');
var km=document.querySelector('.km');

Content2.style.display = "none";

var img = document.querySelector('#img');
var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img4 = document.querySelector('#img4');
var img3 = document.querySelector('#img3');
img2.addEventListener('click', function () {
    img.src = './image/img2.jpg';//oke
})
img3.addEventListener('click', function () {
    img.src = './image/img3.jpg';//oke
})
img4.addEventListener('click', function () {
    img.src = './image/img4.png';//oke
})
img1.addEventListener('click', function () {
    img.src = './image/img1.jpg';
})
btnAddtocart.addEventListener('click', function () {
    if (color.value != 'select color' && color.value != 'Đen' && color.value != 'Trắng') {
        alert('moi ban dien vao o color');
    } else {
        if (size.value != 'select size' && size.value != '37' && size.value != '38' && size.value != '39' && size.value != '40' && size.value != '41' && size.value != '42') {
            alert('moi ban dien vao o size');
        } else {
            if (qty.value < 1) {
                alert('moi ban dien vao o qty');
            } else {
               
                alert('ban da them vao gio hang thanh cong');
            }
        }
    }
})
btnAddtocart.addEventListener('click', function () {
giohang.addEventListener('click', function () {
    btncolor.innerHTML = color.value;
    btnsize.innerHTML = size.value;
    btnqua.innerHTML = qty.value;
    btnprice.innerHTML = qty.value*499;
    content1.style.display = "none";
    Content2.style.display = "block";
    right.style.display= "none";
    tam.innerHTML=qty.value*499;
    tien.innerHTML=qty.value*499 -40;

})
})
giohang.addEventListener('click', function () {
    content1.style.display = "none";
    Content2.style.display = "block";
    right.style.display="block";
    
})
btnhuydonhang.addEventListener('click', function () {
    content2.style.display = "none";
    content1.style.display = "block";

    
})
btnbox.addEventListener('click',function(){
    right.style.display="block";
 
})


btnthanhtoan.addEventListener('click',function(){
    // var hoten=hoten.value.trim();
    // var sdt=sdt.value.trim();
    // var diachi=diachi.value.trim();
     //alert('ban da thanh toan thanh cong');
    if(hoten.value==""){
        alert('ban chua nhap thong tin khach hang');
    }else if( sdt.value=="" ){
        alert('ban chua nhap thong tin khach hang');
    }else if( diachi.value==""){
        alert('ban chua nhap thong tin khach hang');
    }else if(isNaN(sdt.value)==true){
        alert('moi ban nhap lai sdt');
    }else{
        alert('ban da thanh toan thanh cong');
    }
   
})




