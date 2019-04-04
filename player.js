const player = {
hitPoints: 100,
damage: 0,
level: 1,
isAlive: true,
lastDamageTaken: 0,
baseAttackDamage: 5,

fight: function(enemy){
//Damage from monster to player
const rawDamage = enemy.calculateRawDamage();

this.lastDamageTaken = rawDamage - this.level;
this.hitPoints = this.hitPoints - this.lastDamageTaken;

//Send damage to monster/enemy
enemy.takeDamage(this.calculateRawDamage());

if (this.hitPoints<1){
    this.isAlive = false;
}
},


// To calculate damage to monster
calculateRawDamage: function(){
    return Math.ceil((Math.random() * this.baseAttackDamage));
},

levelUp: function(){
    this.level = this.level + 1;
    this.hitPoints = this.hitPoints + 5;
    this.baseAttackDamage = this.baseAttackDamage + (this.baseAttackDamage * .2);
},

}