namespace SpriteKind {
    export const money = SpriteKind.create()
    export const food = SpriteKind.create()
    export const enemy_with = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const hp_boost = SpriteKind.create()
    export const people = SpriteKind.create()
}
//Po sebání peněz začne útok od ducha
sprites.onOverlap(SpriteKind.Player, SpriteKind.money, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
    Killer = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Killer,
    assets.animation`ghost_ani`,
    100,
    true
    )
    Killer.setPosition(lazarus.x + randint(75, 100), lazarus.y + randint(75, 100))
    Killer.follow(lazarus, 50)
})


//HP UP
sprites.onOverlap(SpriteKind.Player, SpriteKind.food, function(sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    music.beamUp.play()
})
//Hp DOWN


//Postup do dalších levelů
scene.onOverlapTile(SpriteKind.Player, assets.tile`win_portal`, function (sprite, location) {
    if (info.score() >= 5 && level == 1) {
        level += 1
        level_startup()
    } else if(level == 1) {
        game.showLongText("Vrať se až budeš mít sebráno 5 mincí", DialogLayout.Bottom)
    }
    else if (info.score() >= 10 && level == 2){
        level += 1
        level_startup()
    }
    else if(level == 2){
        game.showLongText("Vraťit se z alternativní reality budeš moct po dosažení score 10", DialogLayout.Bottom)
    }
    else if (boss_killed == true && level == 3){
        level += 1
        level_startup()
    }
    else if(level == 3){
        game.showLongText("Vrať se až bude boss zabitý.", DialogLayout.Bottom)
    }

})
//Prohra
info.onLifeZero(function () {
    game.over(false, effects.melt)
})

//Proměnné
let shooting = false
let change = 0;
let one: Sprite= null
let two: Sprite= null
let three: Sprite= null
let fire: Sprite = null
let coin: Sprite = null
let jidlo: Sprite = null
let boost:Sprite = null
let Killer: Sprite = null
let Boss: Sprite = null
let Master_boss : Sprite = null
let boss_killed = false
let lazarus: Sprite = null
let level = 0
let hit = false 
let projectile = null
 
//Vytvoření hlavního hrdiny + movement + shooting
lazarus = sprites.create(assets.image`myCharacter_right`, SpriteKind.Player)
info.setLife(3)
level_startup()
controller.moveSprite(lazarus, 100, 100)
scene.cameraFollowSprite(lazarus)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    hit = true
    Master_boss.follow(lazarus, 65)
    
})

//Enemies a ubírání z EnemyHealthbaru
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy_with, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -5
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    if (status.spriteAttachedTo() == Master_boss){
        boss_killed = true
    }
    status.spriteAttachedTo().destroy()
})

//Zabití spadnutím do díry
scene.onOverlapTile(SpriteKind.Player, assets.tile`death_zone`, function (sprite, location) {
    game.showLongText("Jak tě vůbec může napadnout jít se kouknout do černočerné díry uprostřed ničeho. No nic na zvědavost se doplácí", DialogLayout.Bottom)
    game.over(false)
    game.reset()
})

//boost pohybu
sprites.onOverlap(SpriteKind.Player, SpriteKind.hp_boost, function(sprite, otherSprite) {
    info.changeLifeBy(3)
    otherSprite.destroy()
    music.beamUp.play()
})

//Hit od Master_boss
sprites.onOverlap(SpriteKind.boss, SpriteKind.Player, function (sprite, otherSprite) {
    music.knock.play()
    info.changeLifeBy(-3)
})

//Hit od Bat
sprites.onOverlap(SpriteKind.enemy_with, SpriteKind.Player, function (sprite, otherSprite) {
    music.knock.play()
    info.changeLifeBy(-1)
})

//Výběr postavy
scene.onOverlapTile(SpriteKind.Player, assets.tile`One`, function (sprite, location) {
    change+=1
    level+=1
    shooting = true
    level_startup()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Two`, function (sprite, location) {
    change+=2
    level+=1
    shooting = true
    level_startup()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Three`, function (sprite, location) {
    change+=3
    level+=1
    shooting = true 
    level_startup()
}) 