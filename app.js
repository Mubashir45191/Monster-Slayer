new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {


            this.monsterHealth -= this.damageCalculator(3, 10);


            this.monsterAttack();
            this.checkWin();


        },
        specialAttack() {

            this.monsterHealth -= this.damageCalculator(10, 20);
            this.monsterAttack();


            return this.checkWin();
        },
        heal: function () {

        },
        giveUp() {

        },
        damageCalculator(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttack: function () {
            this.playerHealth -= this.damageCalculator(5, 12);
        },
        checkWin() {

            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;

                }
                return true;
            }
            return false;
        }

    }
})