const monster = {
    hitPoints: 30,
    damage: 0,
    isAlive: true,
    lastDamageTaken: 0,

    calculateRawDamage: function () {
        return (Math.ceil((Math.random() * 5)) + 2);
    },

    takeDamage: function () {
        const rawDamage = (Math.ceil((Math.random() * 5)) + 2);
        
        this.lastDamageTaken = rawDamage;
        this.hitPoints = this.hitPoints - this.lastDamageTaken;

        if (this.hitPoints < 1) {
            this.isAlive = false;
        }
    },
}

