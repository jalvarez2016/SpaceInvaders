import shotCollide from "./shotHit.jsx";

function handleEnemyShots(player, shots) {
  let playerPosition = [player];
  let playerHealth = player.health;

  // if (shots.length === 0) {
  //   shots.push({
  //     top: num,
  //     left: num2
  //   });
  // }
  //couldn't figure out enemy shot back in time
  for (let i = 0; i < shots.length; i++) {
    let shot = shots[i];
    if (shot.top >= 500) {
      shots.splice(i, 1);
    } else if (shotCollide(shot, playerPosition)) {
      shots.splice(i, 1);
      //could be refactored
      playerHealth -= 1;
    } else {
      let newTop = shot.top + 10;
      shots[i].top = newTop;
    }
  }
  return { shots, playerHealth };
}

export default handleEnemyShots;
