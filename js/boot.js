FBInstant.initializeAsync().then(function() {
    var config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 1200 },
                debug: false
            }
        },
        scene: [Preloader, MainMenu, GameScene]
    };
    new Phaser.Game(config);
});