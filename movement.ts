game.onUpdate(function () {
    if (change == 3){
        lazarus.setImage(assets.image`myCharacter_down`)
        if (lazarus.vx < 0) {
            lazarus.setImage(assets.image`myCharacter_left`)
        } else if (lazarus.vy < 0) {
            lazarus.setImage(assets.image`myCharacter_up`)
        } else if (lazarus.vy > 0) {
            lazarus.setImage(assets.image`myCharacter_down`)
        } else if (lazarus.vx > 0) {
            lazarus.setImage(assets.image`myCharacter_right`)
        }
    }
    else if (change == 2){
        lazarus.setImage(assets.image`2`)
        if (lazarus.vx < 0) {
            lazarus.setImage(assets.image`2_left`)
        } else if (lazarus.vy < 0) {
            lazarus.setImage(assets.image`2_up`)
        } else if (lazarus.vy > 0) {
            lazarus.setImage(assets.image`2`)
        } else if (lazarus.vx > 0) {
            lazarus.setImage(assets.image`2_right`)
        }
    }
    else if (change == 1){
        lazarus.setImage(assets.image`Women`)
        if (lazarus.vx < 0) {
            lazarus.setImage(assets.image`Women_left`)
        } else if (lazarus.vy < 0) {
            lazarus.setImage(assets.image`Women_up`)
        } else if (lazarus.vy > 0) {
            lazarus.setImage(assets.image`Women`)
        } else if (lazarus.vx > 0) {
            lazarus.setImage(assets.image`Women_right`)
        }
    }
    else {
        lazarus.setImage(assets.image`default`)
    }
})




game.onUpdate(function () {
    if (hit == true){
            Master_boss.setImage(assets.image`boss_active`)
        if (Master_boss.vx < 0) {
            Master_boss.setImage(assets.image`boss_left`)
        } else if (Master_boss.vy < 0) {
            Master_boss.setImage(assets.image`boss_up`)
        } else if (Master_boss.vy > 0) {
            Master_boss.setImage(assets.image`boss_active`)
        } else if (Master_boss.vx > 0) {
            Master_boss.setImage(assets.image`boss_right`)
        }
    }
})
