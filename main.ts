scene.setBackgroundImage(assets.image`compyudar`)
let thescreen = sprites.create(assets.image`screen`, SpriteKind.Player)
thescreen.x += -6
thescreen.y += -1
game.setDialogFrame(assets.image`frame`)
game.setDialogCursor(assets.image`button`)
game.showLongText("[booting up]", DialogLayout.Bottom)
game.showLongText("INITIALIZING...", DialogLayout.Bottom)
game.showLongText("this may take a few moments", DialogLayout.Bottom)
animation.runImageAnimation(
thescreen,
assets.animation`boot up`,
500,
true
)
pause(5000)
animation.runImageAnimation(
thescreen,
assets.animation`clear screen`,
500,
false
)
