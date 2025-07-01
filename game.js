const config = {
  type: Phaser.AUTO,
  width: '100%',  // 100% della larghezza della finestra
  height: '100%', // 100% dell'altezza della finestra
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  },
  scene: {
    preload,
    create,
    update
  },
  scale: {
    mode: Phaser.Scale.FIT,  // Scala per adattarsi
    autoCenter: Phaser.Scale.CENTER_BOTH, // Centra il gioco
    expand: true,  // Abilita lo scaling per adattarsi a tutti i dispositivi
  }
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('idle', 'assets/monkey/1-Sprites/Character Spritesheets/1-Idle/Idle.png', {
    frameWidth: 32, 
    frameHeight: 32
  });

  this.load.spritesheet('run', 'assets/monkey/1-Sprites/Character Spritesheets/2-Run/Run.png', {
    frameWidth: 32,
    frameHeight: 32
  });

  this.load.spritesheet('jump', 'assets/monkey/1-Sprites/Character Spritesheets/3-Jump/Jump.png', {
    frameWidth: 32,
    frameHeight: 32
  });

  this.load.image('bg', 'assets/forest/Background.png');
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();

  // 👉 SFONDO prima, con scala e profondità dietro
  const bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
  bg.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
  bg.setDepth(-1);

  // 👉 CREA la scimmietta più in alto rispetto al fondo
  const startY = this.cameras.main.height - 100;
  player = this.physics.add.sprite(100, startY, 'idle');
  player.setCollideWorldBounds(true);
  player.setBounce(0.2);

  // 👉 Scala la scimmietta in base allo schermo
  const scaleFactor = this.cameras.main.height / 200;
  player.setScale(scaleFactor);

  // 👉 Animazioni
  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 5 }),
    frameRate: 8,
    repeat: -1
  });

  this.anims.create({
    key: 'run',
    frames: this.anims.generateFrameNumbers('run', { start: 0, end: 5 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'jump',
    frames: this.anims.generateFrameNumbers('jump', { start: 0, end: 3 }),
    frameRate: 6,
    repeat: -1
  });

  player.anims.play('idle');
}

function update() {
  // Movimento della scimmietta
  if (cursors.left.isDown) {
    player.setVelocityX(-260);
    player.anims.play('run', true);
    player.flipX = true;
  } else if (cursors.right.isDown) {
    player.setVelocityX(260);
    player.anims.play('run', true);
    player.flipX = false;
  } else {
    player.setVelocityX(0);
    player.anims.play('idle', true);
  }

  // Salto della scimmietta
  if (cursors.up.isDown) {
    player.setVelocityY(-330);
    player.anims.play('jump', true);
  }
}
