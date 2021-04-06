//Hit od enemies
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.knock.play()
    info.changeLifeBy(-1)
    sprite.destroy()
})
