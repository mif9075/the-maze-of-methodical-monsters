const player = {
hitPoints: 100,
damage: 0,
level: 1,
isAlive: true,
lastDamageTaken: 0,

fight: function(enemy){
const rawDamage = enemy.calculateRawDamage();

this.lastDamageTaken = rawDamage - this.level;
this.hitPoints = this.hitPoints - this.lastDamageTaken;

enemy.takeDamage(this.calculateRawDamage());

if (this.hitPoints<1){
    this.isAlive = false;
}
},

calculateRawDamage: function(){
    return Math.ceil((Math.random() * 5));
},

}