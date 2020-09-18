 
 var arrIMG= [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
 ];

 var btntruoc = document.querySelector(".btntruoc input");
var btnsau = document.querySelector(".btnNext input");
var getTitle = document.querySelector(".viewlike");
var getimg = document.querySelector(".viewimg img");
var btnview = document.querySelector(".btnview input");
var getindex = document.querySelector(".viewindex input");
var getSize = document.querySelector(".viewindex span");
 
getSize.innerHTML = arrIMG.length;
var stt = 0;
btnview.value =stt + 1;
getimg.src = arrIMG[stt];

getSize.innerHTML =arrIMG;

btnview.onmouseover =function () {
	 btnview.style.opacity = " 100%";
};
btnview.onmouseout =function () {
	 btnview.style.opacity = "30%";
};
btntruoc.onmouseover =function () {
	 btnview.style.opacity = " 100%";
};
btntruoc.onmouseout =function () {
	 btnview.style.opacity = "30%";
};
btnsau.onmouseover =function () {
	 btnview.style.opacity = " 100%";
};
btnsau.onmouseout =function () {
	 btnview.style.opacity = "30%";
};

function showImg(i) {
  getImg.src = arrIMG[i];
  btnView.value = i + 1;
}


btntruoc.onclick = function () {
  if (stt > 0) {
    stt--;
  } else {
    stt = arrIMG.length - 1;
  }
  showImg(stt);
};

btnsau.onclick = function () {
  if (stt < arrIMG.length - 1) {
    stt++;
  } else {
    stt = 0;
  }
  showImg(stt);
};


getImg.onclick = function () {
  getImg.style.height = "700px";
};

getImg.onmouseout = function () {
  getImg.style.height = "500px";
};


getindex.onkeyup = function (evt) {
  if (evt.key == "Enter") {
    var index = getindex.value;
    if (!isNaN(index)) {
      if (index > 0 && index <= arrIMG.length) {
        stt = index - 1;
        showImg(stt);
      } else {
        alert("Phải nhập thứ tự từ 1 đến " + arrIMG.length);
      }
    }
  }
};

var checkss = true;
var timeOut;

function goImg() {
  if (stt == arrIMG.length) {
    stt = 0;
  }
  getimg.src = arrIMG[stt];
  stt++;
  timeOut = setTimeout(goImg, 2000);
}

var checkAu = true;
var timeout;
var time;
var ranAudio = Math.round(Math.random() * (arrAudio.length - 1));

function autoAudio() {
  console.log(ranAudio);
  switch (ranAudio) {
    case 0:
      time = 230000;
      clearTimeout(timeout);
      timeout = setTimeout(autoNext, time);
      break;
    case 1:
      time = 108000;
      clearTimeout(timeout);
      timeout = setTimeout(autoNext, time);
      break;
    case 2:
      time = 160900;
      clearTimeout(timeout);
      timeout = setTimeout(autoNext, time);
      break;
  }
}

function autoNext() {
  ranAudio++;
  if (ranAudio == arrAudio.length) {
    ranAudio = 0;
  }
  audio.src = arrAudio[ranAudio];
  audio.play();
  checkAu = false;
  autoAudio();
}

function autoImg() {
  if (checkss) {
    btnView.onmouseout = function () {
      btnView.style.opacity = "100%";
    };
    btnView.value = "PAUSE";
    checkss = false;
    goImg();
    autoAudio();
  } else {
    checkss = true;
    btnView.onmouseout = function () {
      btnView.style.opacity = "30%";
    };
    btnView.value = stt + 1;
    clearTimeout(timeOut);
    clearTimeout(timeout);
  }
}
btnView.addEventListener("click", autoImg);

getTitle.onclick = function () {
  if (checkAu) {
    checkAu = false;
    audio.src = arrAudio[ranAudio];
    audio.play();
  } else {
    checkAu = true;
    audio.pause();
  }
};

getTitle.ondblclick = function () {
  ranAudio = Math.round(Math.random() * (arrAudio.length - 1));
  if (ranAudio == arrAudio.length) {
    ranAudio = 0;
  }
  audio.src = arrAudio[ranAudio];
  audio.play();
};
