let doorImage1 = document.getElementById('door1');
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
// using DOM method to assign start to the button id of 'start'
let startButton = document.getElementById('start');
// checks if game should still be running
const currentlyPlaying = true;

//losing function
const isBot = door => {
if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  };
};


//function to check if a door has already been clicked
const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  };
};
//play door function
const playDoor = door => {
  numClosedDoors--
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  };

};
// random generator for chore bot
const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor(Math.random() * numClosedDoors);
if (choreDoor === 0) {
 openDoor1 = botDoorPath;
 openDoor2 = beachDoorPath;
 openDoor3 = spaceDoorPath;
} else if (choreDoor === 1) {
 openDoor2 = botDoorPath;
 openDoor3 = beachDoorPath;
 openDoor1 = spaceDoorPath;
} else if (choreDoor === 2) {
openDoor3 = botDoorPath;
openDoor1 = beachDoorPath;
openDoor2 = spaceDoorPath;
}

}

//on click events for each door
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}
//make start button refresh page
startButton.onclick = () => {
  if (!currentlyPlaying) {
  startRound();
  }
}

// resets values to start round over

const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};
//game over function
const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
    
  }
  currentlyPlaying = false;
};

startRound();