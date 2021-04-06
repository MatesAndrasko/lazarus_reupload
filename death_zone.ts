namespace SpriteKind {
    export const lava = SpriteKind.create()
 }
//Zabití lávou
sprites.onOverlap(SpriteKind.Player, SpriteKind.lava, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.knock.play()
})
