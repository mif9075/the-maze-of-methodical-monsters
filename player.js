const player = {
hitPoints: 100,
damage: 0,
level: 1,
isAlive: true,
fight: function(){
this.hitPoints = this.hitPoints - Math.ceil((Math.random() * 5));
console.log(this.hitPoints);
}

}