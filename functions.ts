function level_startup () {
    if(level == 0){
        game.showLongText("Lazarus-Rebirth -> příběh pojednává o muži, který vstal z mrtvých kvůli pomstě", DialogLayout.Center)
        game.showLongText("Vyber si postavu", DialogLayout.Bottom)
        tiles.setTilemap(tilemap`lvl0`)
    }
    else if (level == 1) {
        
        game.showLongText("Level 1 - Labyrint -> najdi cestu ven", DialogLayout.Center)
        tiles.setTilemap(tilemap`lvl1`)
    } else if (level == 2) {
        game.showLongText("Level 2 - Alternativní realita -> najdi cestu zpět", DialogLayout.Center)
        music.powerUp.play()
        tiles.setTilemap(tilemap`lvl2`)
    }
    else if (level == 3) {
        game.showLongText("Level 3 - Finale -> probojuj si cestu ven", DialogLayout.Center)
        music.powerUp.play()
        tiles.setTilemap(tilemap`lvl3`)
    }
    else if(level== 4)
    {
        game.showLongText("THE END - gratuluji dosáhli ste konce mé arcade videohry ---> Scénář - Matěj Andráško, Grafika - Matěj Andráško & MakeCode team, Hlavní a jediný programátor - Matěj Andráško", DialogLayout.Center)
        music.powerUp.play()
        game.over(true)
    }

    tiles.placeOnRandomTile(lazarus, assets.tile`start`)
    for (let value of tiles.getTilesByType(assets.tile`start`)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight4)
    }
    for (let value of sprites.allOfKind(SpriteKind.lava)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.money)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.food)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.hp_boost)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.people)) {
        value.destroy()
    }
    for (let x of tiles.getTilesByType(assets.tile`One`)) {
        one = sprites.create(assets.image`Women`, SpriteKind.people)
        tiles.placeOnTile(one, x)
        tiles.setTileAt(x, assets.tile`One`)
    }
    for (let x of tiles.getTilesByType(assets.tile`Two`)) {
        two = sprites.create(assets.image`2`, SpriteKind.people)
        tiles.placeOnTile(two, x)
        tiles.setTileAt(x, assets.tile`Two`)
    }
    for (let x of tiles.getTilesByType(assets.tile`Three`)) {
        three = sprites.create(assets.image`myCharacter_down`, SpriteKind.people)
        tiles.placeOnTile(three, x)
        tiles.setTileAt(x, assets.tile`Three`)
    }
    for (let x of tiles.getTilesByType(assets.tile`myTile0`)) {
        coin = sprites.create(assets.image`coin`, SpriteKind.money)
        tiles.placeOnTile(coin, x)
        tiles.setTileAt(x, sprites.dungeon.floorLight4)
    }
    for (let y of tiles.getTilesByType(assets.tile`jidlo`)) {
        jidlo = sprites.create(assets.image`food1`, SpriteKind.food)
        tiles.placeOnTile(jidlo, y)
        tiles.setTileAt(y, sprites.dungeon.floorLight4)
    }
    for (let e of tiles.getTilesByType(assets.tile`kava_spawn`)) {
        boost = sprites.create(assets.image`kava`, SpriteKind.hp_boost)
        tiles.placeOnTile(boost, e)
        tiles.setTileAt(e, sprites.dungeon.floorLight4)
    }
    for (let z of tiles.getTilesByType(assets.tile`boss_spawn`)) {
        Boss = sprites.create(assets.image`bat`, SpriteKind.enemy_with)
        animation.runImageAnimation(
        Boss,
        assets.animation`bat_ani`,
        100,
        true
        )
        tiles.placeOnTile(Boss, z)
        tiles.setTileAt(z, sprites.dungeon.floorLight4)
        Boss.follow(lazarus, 25)
        let statusbar1 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar1.attachToSprite(Boss)
    }
    for (let f of tiles.getTilesByType(sprites.dungeon.hazardLava1)) {
        fire = sprites.create(assets.image`fire`, SpriteKind.lava)
        animation.runImageAnimation(
        fire,
        assets.animation`fire_animate`,
        100,
        true
        )
        tiles.placeOnTile(fire, f)
        tiles.setTileAt(f, sprites.dungeon.hazardLava1)
    }
    for (let x of tiles.getTilesByType(assets.tile`masterboss`)) {
        Master_boss = sprites.create(assets.image`boss`, SpriteKind.boss)
        tiles.placeOnTile(Master_boss, x)
        tiles.setTileAt(x, sprites.dungeon.floorLight1)
        let statusbar2 = statusbars.create(50, 8, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(Master_boss)
    }
}
function spawn_enemy (){
    Killer = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
    animation.runImageAnimation(
    Killer,
    assets.animation`ghost_ani`,
    100,
    true
    )
    Killer.setPosition(lazarus.x + randint(25, 75), lazarus.y + randint(25, 75))
    Killer.follow(lazarus, 50)
}