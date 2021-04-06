controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shooting == true){
        if (controller.right.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet_right_left`, lazarus, 200, 0)
            music.pewPew.play()
        } else if (controller.left.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet_right_left`, lazarus, -200, 0)
            music.pewPew.play()
        } else if (controller.up.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet_up_down`, lazarus, 0, -200)
            music.pewPew.play()
        } else if (controller.down.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`bullet_up_down`, lazarus, 0, 200)
            music.pewPew.play()
        }
    }

})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shooting == true){
        if (controller.right.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`fire_weapon`, lazarus, 50, 0)
            music.bigCrash.play()
        } else if (controller.left.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`fire_weapon`, lazarus, -50, 0)
            music.bigCrash.play()
        } else if (controller.up.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`fire_weapon`, lazarus, 0, -50)
            music.bigCrash.play()
        } else if (controller.down.isPressed()) {
            projectile = sprites.createProjectileFromSprite(assets.image`fire_weapon`, lazarus, 0, 50)
            music.bigCrash.play()
        }
    }

})