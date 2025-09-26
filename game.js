let scrap = 0;
let clickPower = 1;
let autoClick = 0;
let godMode = false;
let scrapDisplay = document.getElementById('scrap');

document.getElementById('clickButton').addEventListener('click', () => {
  scrap += clickPower;
  updateScrap();
});

function buyUpgrade(type) {
  if (type === 'clickPower' && scrap >= 10) {
    scrap -= 10;
    clickPower++;
  } else if (type === 'autoClick' && scrap >= 50) {
    scrap -= 50;
    autoClick++;
    setInterval(() => { scrap += clickPower; updateScrap(); }, 1000);
  }
  updateScrap();
}

function updateScrap() {
  scrapDisplay.textContent = scrap;
}

function checkPassword() {
  const pw = document.getElementById('password').value;
  if (pw === 'Khalil14') {
    document.getElementById('creator-menu').classList.remove('hidden');
  }
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
}

// Creator menu object
const creator = {
  addScrap: () => { scrap += 1000; updateScrap(); },
  unlockAll: () => { clickPower = 100; autoClick = 10; updateScrap(); },
  spawnLoot: () => { alert('Loot Box Spawned!'); },
  godMode: () => { godMode = !godMode; alert('God Mode: ' + godMode); }
};
