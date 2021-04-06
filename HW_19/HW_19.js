var isCtrl = false;
document.onkeyup = function (e) {
  if (e.keyCode == 17) isCtrl = false;
};

document.onkeydown = function (e) {
  if (e.keyCode == 17) isCtrl = true;
  if (e.keyCode == 80 && isCtrl == true) {
    console.log("hello");
    return false;
  }
};
