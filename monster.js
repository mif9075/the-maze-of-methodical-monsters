const monster = {
    hitPoints: 30,
    damage: 0,
    isAlive: true,
    lastDamageTaken: 0,

    //Use to calculate raw damage to player
    calculateRawDamage: function () {
        return (Math.ceil((Math.random() * 5)) + 2);
    },

    //Monster received rawDamage from player
    takeDamage: function (rawDamage) {
        if (rawDamage > 1){
        this.lastDamageTaken = rawDamage;
        this.hitPoints = this.hitPoints - this.lastDamageTaken;
        }else {
        this.lastDamageTaken === 1;
        }

        if (this.hitPoints < 1) {
            this.isAlive = false;
        }
    },

    //Monster is death; respawn
    respawn: function () {
        this.hitPoints = 30;
        this.damage = 0;
        this.isAlive = true;
        this.lastDamageTaken = 0;
    }
}

