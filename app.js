var wrapperEl = document.body.querySelector(".wrapper")
var dragonEl = document.body.querySelector(".dragon_dmg")
var winloseEl = document.body.querySelector(".win_msg")

function attackFunction(damage,attack){
    if(attack == "fire"){
        damage -= 1
    }
    else if(attack == "ice") {
        damage += 1
    }
    dragonDamage += damage

    if(dragonDamage >= 10){
        winloseEl.innerHTML = "User wins!"
    }
}


var dragonDamage = 0
dragonEl.innerHTML = "Dragon Damage: 0"


document.body.querySelector(".fire").addEventListener("click",function(){
    attackFunction(3,"fire")
    dragonEl.innerHTML = "Dragon Damage: " + dragonDamage

})

document.body.querySelector(".ice").addEventListener("click",function(){
    attackFunction(1,"ice")
    dragonEl.innerHTML = "Dragon Damage: " + dragonDamage
})

document.body.querySelector(".poison").addEventListener("click",function(){
    attackFunction(4,"poison")
    dragonEl.innerHTML = "Dragon Damage: " + dragonDamage

})


