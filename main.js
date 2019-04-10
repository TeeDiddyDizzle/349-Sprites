// get robot image
var robotObj = document.getElementsByClassName('robot');
// get zombie image
var zombieObj = document.getElementsByClassName('zombie');

// check for keyup presses
document.addEventListener('keyup', checkEvent);

// check the event that was pressed i.e. the number associated with the keypress
function checkEvent (e) {
  console.log(e.which);
  switch (e.which) {
    case 68:
      moverobotRight();
      break;
    case 39:
      movezombieRight();
      break;
    case 65:
      moverobotLeft();
      break;
    case 37:
      movezombieLeft();
      break;
    case 83:
      moverobotDown();
      break;
    case 40:
      e.preventDefault();
      movezombieDown();
      break;
    case 87:
      moverobotUp();
      break;
    case 38:
      e.preventDefault();
      movezombieUp();
      break;
  }
}
// *** Move Set For robot Object *** //
function moverobotRight () {
  var pos = robotObj[0].offsetLeft;
  if (pos >= 700) {
    console.log(pos);
    pos = 600;
  }
  pos += 100;
  robotObj[0].style.left = pos + 'px';
}

function moverobotLeft () {
  var pos = robotObj[0].offsetLeft;
  if (pos <= 0) {
    console.log(pos);
    pos = 100;
  }
  pos -= 100;
  robotObj[0].style.left = pos + 'px';
}

function moverobotDown () {
  var pos = robotObj[0].offsetTop;
  if (pos >= 700) {
    pos = 600
  }
  pos += 100;
  robotObj[0].style.top = pos + 'px';
}

function moverobotUp () {
  var pos = robotObj[0].offsetTop;
  if (pos <= 0) {
    pos = 100;
  }
  pos -= 100;
  robotObj[0].style.top = pos + 'px';
}
// *** Move Set For zombie Object **** //
function movezombieRight () {
  var pos = zombieObj[0].offsetLeft;
  if (pos >= 700) {
    pos = 600
  }
  pos += 0;
  zombieObj[0].style.left = pos + 'px';
}

function movezombieLeft () {
  var pos = zombieObj[0].offsetLeft;
  console.log(pos);
  if (pos <= 0) {
    pos = 100
  }
  pos -= 200;
  console.log(pos);
  zombieObj[0].style.left = pos + 'px';
}

function movezombieDown () {
  var pos = zombieObj[0].offsetTop;
  if (pos >= 700) {
    pos = 600
  }
  pos += 0;
  zombieObj[0].style.top = pos + 'px';
}

function movezombieUp () {
  var pos = zombieObj[0].offsetTop;
  if (pos <= 0) {
    pos = 100
  }
  pos -= 200;
  zombieObj[0].style.top = pos + 'px';
}
