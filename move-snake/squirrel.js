var id;

var snake = {"name":"", "x":0, "y":0, "w":300, "h":225}

var up,down,left,right;
up = 38;
down = 40;
left = 37;
right = 39;

var direction = right;

var elem = document.getElementById("canvas");   
var whole = document.getElementById("container");
elem.style.backgroundImage = "url('img/snake/up-right.jpg')"

console.log("Hello");

function upf(){
  snake.y-=100;
}

function downf(){
  snake.y+=100;
}

function leftf(){
  snake.x-=100;
  direction = left;
}

function rightf(){
  snake.x+=100;
  direction = right;
}

function manageEvents(){
  console.log("entered manageEvents");
  window.onkeyup = function(e){
    var key = e.keyCode;
    console.log("entered event");

    if(key == up){
      upf();
      console.log("up");
    }
    else if(key == down){
      downf();
      console.log("down");
    }
    else if(key == left){
      leftf();
      console.log("left");
    }
    else if(key == right){
      rightf();
      console.log("right");
    }

  }
}

function snakeFunc() {

  manageEvents();
  snake.y = 400;
  snake.x = 0;

  var count = 0;
  var ic = 0;

  if(id != null){
    clearInterval(id);
    elem.style.left = 0;
  }
  id = setInterval(frame, 100);
  function frame() {
    ic++;
    //if (snake.x == 800) {
      //clearInterval(id);
      //snake.x = 0;;
    //} 
    //else {

      if(ic%100){
        if(direction == right){
          if(count==0){
            count++;
            elem.style.backgroundImage = "url('img/snake/up-right.jpg')";
            //snake.x++;
            //console.log("snake.x = "+snake.x);
          }
          else if(count == 1){
            count=0;
            elem.style.backgroundImage = "url('img/snake/down-right.jpg')";
          }
        }
        else if(direction == left){
          if(count==0){
            count++;
            elem.style.backgroundImage = "url('img/snake/up.jpg')";
          }
          else if(count == 1){
            count=0;
            elem.style.backgroundImage = "url('img/snake/down.jpg')";
          }
        } 
      }

    //} 

    elem.style.top = snake.y +'px';
    elem.style.left = snake.x +'px'; 
    //console.log("elem.style = "+elem.style.left);

  }
}

snakeFunc();