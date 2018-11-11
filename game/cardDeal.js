const role4 = ["scheriff \n", "bandit \n", "bandit \n", "renegate \n"];
const role5 = ["scherif \n", "bandit \n", "bandit \n", "renegate \n", "vice \n"];
const role6 = ["scherif \n", "bandit \n", "bandit \n","bandit \n", "renegate \n", "vice \n"]
const role7 = ["scherif \n", "bandit \n", "bandit \n","bandit \n", "renegate \n", "vice \n", "vice \n"]

const cards = ["bang \n", "bang \n", "bang \n", "bang \n", "bang \n", "miss \n", "miss \n", "miss \n", "miss \n", "miss \n", "miss \n", "beer \n", "beer \n", "beer \n", "beer \n", "beer \n", "beer \n", "beer \n"]

const character = ["BartCassidy \n", "BlackJack \n", "CalamityJanet \n", "ElGringo \n"];
const order = ["player1", "player2", "player3", "player4"];
const players = [];

let numberOfPlayers = 4;

function player(role, character, abilities, hp, card, order) {
  this.role = role;
  this.character = character;
  this.abilities = abilities;
  this.hp = hp;
  this.card = cards;
  this.order = order;
}
  player.prototype.playerStat = function () {
    for(let i=0; i<numberOfPlayers; i++)
    {
        document.getElementById(order[i]).innerHTML = players[i].role;
        document.getElementById(order[i]).innerHTML = document.getElementById(order[i]).textContent + players[i].character;
    }
}
  player.prototype.playerCreate = function () {
    for(let i=0; i<numberOfPlayers; i++)
    {
      players[i] = new player(chooseRole(chooseArray()), chooseCharacter());
    }
}

function chooseArray() {

  switch (numberOfPlayers)
  {
    case 4:
      return role4;
      break;

    case 5:
      return role5;
      break;

    case 6:
      return  role6;
      break;

    case 7:
      return role7;
      break;
  }
}

function chooseRole(roleArray) {
    let temp = roleArray.pop();
  return temp;
}

function chooseCharacter() {
    let randCharacter = Math.floor((Math.random() * Object.keys(character).length) + 0);
    let temp = character[randCharacter];
    character.splice(randCharacter, 1);
    console.log(character);
  return temp;
}

function dealCards() {
  let temp;
  console.log(cards);
  console.log(Object.keys(cards).length);
  for(let i=0; i<Object.keys(cards).length-1; i++)
  {
    let randNum = Math.floor((Math.random() * Object.keys(cards).length));
    temp = cards[i];
    cards[i] = cards[randNum];
    cards[randNum] = temp;
  }
  console.log(cards);
}
