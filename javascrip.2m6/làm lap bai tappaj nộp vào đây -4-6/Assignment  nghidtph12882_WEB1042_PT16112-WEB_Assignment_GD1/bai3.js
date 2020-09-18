var getMucGia = document.querySelector("#mucgia");
var getCheck = document.querySelectorAll("#check");
var getNameItem = document.querySelectorAll("#tenHang");
var getPriceItem = document.querySelectorAll("#gia");
var getQtyItem = document.querySelectorAll("#soLuong");
var setPrice = document.querySelectorAll("#thanhtien");
var setSumPrice = document.querySelector("#tongtien");
var getRown = document.querySelectorAll("#rownProduct");

function outClick() {
  var tongTien = 0;
  var count = 0;
  for (let i = 0; i < getCheck.length; i++) {
    if (getCheck[i].checked) {
      getPriceNow(true);
      getQtyItem[i].disabled = false;
      setSumPrice.innerHTML = 0;
    } else {
      getQtyItem[i].disabled = true;
      getPriceNow(false);
    }

    function getPriceNow(flag) {
      if (flag) {
        if (!isNaN(getQtyItem[i].value)) {
          var donGia = getPriceItem[i].innerHTML;
          var soLuong = getQtyItem[i].value;
          setPrice[i].innerHTML = donGia * soLuong;
          tongTien = tongTien + Number(setPrice[i].innerHTML);
          count++;
        } else {
          setPrice[i].innerHTML = "";
        }
      } else {
        setPrice[i].innerHTML = "";
      }
    }
  }
  if (count == 0) {
    setSumPrice.innerHTML = "";
  } else {
    setSumPrice.innerHTML = tongTien;
  }
}

for (let i = 0; i < getCheck.length; i++) {
  getCheck[i].addEventListener("click", outClick);
  getQtyItem[i].addEventListener("keyup", outClick);
  if (getCheck[i].checked) {
    getQtyItem[i].disabled = false;
  } else {
    getQtyItem[i].disabled = true;
  }
}

function sortPrice() {
  if (getMucGia.value == "") {
    showRow();
  } else if (getMucGia.value == 300) {
    showRow();
    hiddenRow(0, 300);
  } else if (getMucGia.value == 500) {
    showRow();
    hiddenRow(300, 500);
  } else {
    showRow();
    hiddenRow(500, 10000);
  }
}

function hiddenRow(min, max) {
  for (let i = 0; i < getRown.length; i++) {
    var gia = parseInt(getPriceItem[i].innerHTML);
    if (gia < min || gia >= max) {
      getRown[i].hidden = true;
    }
  }
}

function showRow() {
  for (let i = 0; i < getRown.length; i++) {
    getRown[i].hidden = false;
  }
}

getMucGia.addEventListener("click", sortPrice);
