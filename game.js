let chapter = 1;
let battleIndex = 0;
let deck = [];
let gold = 0;
let relics = [];
let playerHP = 100;
let playerBlock = 0;
let playerBuffs = [];
let enemy = {};
let enemyHP = 100;
let energy = 3;

function saveGame() {
  const gameState = {
    chapter, battleIndex, deck, gold, relics,
    playerHP, playerBlock, playerBuffs,
    enemyHP, enemy, energy
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
  alert("Game Saved!");
}

function loadGame() {
  const savedState = JSON.parse(localStorage.getItem('gameState'));
  if (savedState) {
    ({ chapter, battleIndex, deck, gold, relics,
       playerHP, playerBlock, playerBuffs,
       enemyHP, enemy, energy } = savedState);
    alert("Game Loaded!");
    renderPlayerStats();
  } else {
    alert("No saved game found.");
  }
}

function renderPlayerStats() {
  document.getElementById('player-stats').innerHTML = `
    <span>🏥 HP: ${playerHP}</span>
    <span>⚡ Energy: ${energy}</span>
    <span>💰 Gold: ${gold}</span>
    <span>🛡️ Buffs: ${playerBuffs.length}</span>
  `;
}

function addCardToDeck() {
  const newCard = { id: Date.now(), name: "New Card" };
  deck.push(newCard);
  alert("Card Added to Deck!");
}

function gainGold() {
  gold += 10;
  alert("You gained 10 gold!");
}

function showRewardOptions(battleType) {
  const rewardDiv = document.getElementById('reward-options');
  rewardDiv.innerHTML = '';
  
  if (battleType === 'normal') {
    rewardDiv.innerHTML = `
      <button onclick="addCardToDeck()">Add Card</button>
      <button onclick="gainGold()">Skip (Gain 10 gold)</button>
    `;
  } else if (battleType === 'elite') {
    rewardDiv.innerHTML = `
      <button onclick="addCardToDeck()">Add Card</button>
      <button onclick="gainGold()">Gain 25 gold</button>
      <button onclick="skipReward()">Skip Reward</button>
    `;
  } else if (battleType === 'boss') {
    rewardDiv.innerHTML = `
      <button onclick="addCardToDeck()">Add Card</button>
      <button onclick="gainGold()">Gain 50 gold</button>
      <button onclick="skipReward()">Skip Reward</button>
    `;
  }
}

function skipReward() {
  alert("Reward Skipped!");
}

function renderPathSelection() {
  const pathDiv = document.getElementById('path-selection');
  pathDiv.innerHTML = `
    <button onclick="selectPath('normal')">Normal Path</button>
    <button onclick="selectPath('elite')">Elite Path</button>
    <button onclick="selectPath('boss')">Boss Path</button>
  `;
}

function selectPath(pathType) {
  alert(`Selected ${pathType} path`);
}

function enterShop() {
  const shopDiv = document.getElementById('shop');
  shopDiv.innerHTML = `
    <h3>Welcome to the shop!</h3>
    <button onclick="buyCardWithDiscount()">Buy Discounted Card</button>
    <button onclick="buyRelic()">Buy Relic</button>
    <button onclick="discardCardForGold()">Discard a Card for 5 gold</button>
  `;
}

function buyCardWithDiscount() {
  alert("Bought discounted card!");
}

function buyRelic() {
  alert("Bought relic!");
}

function discardCardForGold() {
  alert("Card discarded for gold!");
}

window.onload = function() {
  loadGame();
  renderPlayerStats();
  renderPathSelection();
};
