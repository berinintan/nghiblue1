 
 var arrIMG= [
  "../img/img1.jpg",
  "../img/img2.jpg",
  "../img/img3.jpg",
 ];
var arrAudio = [
  "audio/phoxa.mp3",
  "audio/motlandangdo.mp3",
  "audio/phuongbuon.mp3"
];

var btnPrev = document.querySelector(".btnPrev input");
var btnNext = document.querySelector(".btnNext input");
var getTitle = document.querySelector(".viewTitle");
var getImg = document.querySelector(".viewImg img");
var btnView = document.querySelector(".btnView input");
var getIndex = document.querySelector(".viewindex input");
var getSize = document.querySelector(".viewindex span");
var getAudio = document.querySelector("#audio");

getSize.innerHTML = arrIMG.length;
var stt = 0;
btnView.value = stt + 1;
getImg.src = arrIMG[stt];

btnView.onmouseover = function () {
  btnView.style.opacity = "100%";
};
btnView.onmouseout = function () {
  btnView.style.opacity = "30%";
};
btnPrev.onmouseover = function () {
  btnPrev.style.opacity = "100%";
};
btnPrev.onmouseout = function () {
  btnPrev.style.opacity = "30%";
};
btnNext.onmouseover = function () {
  btnNext.style.opacity = "100%";
};
btnNext.onmouseout = function () {
  btnNext.style.opacity = "30%";
};

function showImg(i) {
  getImg.src = arrIMG[i];
  btnView.value = i + 1;
}

btnPrev.onclick = function () {
  if (stt > 0) {
    stt--;
  } else {
    stt = arrIMG.length - 1;
  }
  showImg(stt);
};

btnNext.onclick = function () {
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

getIndex.onkeyup = function (evt) {
  if (evt.key == "Enter") {
    var index = getIndex.value;
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
  getImg.src = arrIMG[stt];
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
