new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns:[]
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns =[];
        },
        attack: function () {

         let  damage= this.damageCalculator(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster for '+damage
            })


            this.monsterAttack();
            this.checkWin();


        },
        specialAttack() {
         let damage =this.damageCalculator(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster  hard for '+damage
            })

            this.monsterAttack();


            return this.checkWin();
        },
        heal: function () {
            if(this.playerHealth<=90){
                this.playerHealth+=10;
            }
            else{
                this.playerHealth= 100;
            }
            this.turns.unshift({
                isPlayer:true,
                text: 'Player heals  for 10 '
            })
            this.monsterAttack();

        },
        giveUp() {
         this.gameIsRunning= false;
        },
        damageCalculator(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttack: function () {
            let damage =this.damageCalculator(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer:false,
                text: 'Monster hits Player for '+damage
            })
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