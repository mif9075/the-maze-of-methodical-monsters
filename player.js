const player = {
hitPoints: 100,
damage: 0,
level: 1,
isAlive: true,
lastDamageTaken: 0,

fight: function(){
this.lastDamageTaken = Math.ceil((Math.random() * 5));
this.hitPoints = this.hitPoints - this.lastDamageTaken;
if (this.hitPoints<1){
    this.isAlive = false;
}
},

}