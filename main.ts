controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    the_angle = shipangle * Math.PI / 4
    shipsprite.setVelocity(Math.cos(the_angle) * 10 + shipsprite.vx, Math.sin(the_angle) * 10 + shipsprite.vy)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    shipangle += -1
    shipangle = shipangle % 8
    if (shipangle < 0) {
        shipangle = 8 + shipangle
    }
    shipsprite.setImage(ships[shipangle])
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    shipangle += 1
    shipangle = shipangle % 8
    shipsprite.setImage(ships[shipangle])
})
function gtp (position: number, isx: boolean) {
    if (isx) {
        coord = Math.cos(Math.PI / 4 * position) * 8 + 8
    } else {
        coord = Math.sin(Math.PI / 4 * position) * 8 + 8
    }
    return coord
}
let coord = 0
let the_angle = 0
let shipsprite: Sprite = null
let shipangle = 0
let ships: Image[] = []
let oneship: Image = null
let vely = 0
let velx = 0
let coord2 = 0
tiles.setTilemap(tilemap`level1`)
for (let index = 0; index <= 7; index++) {
    oneship = img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    oneship.drawLine(gtp(index + 0, true), gtp(index + 0, false), gtp(index + 3, true), gtp(index + 3, false), 1)
    oneship.drawLine(gtp(index + 3, true), gtp(index + 3, false), 7, 7, 1)
    oneship.drawLine(7, 7, gtp(index + 5, true), gtp(index + 5, false), 1)
    oneship.drawLine(gtp(index + 5, true), gtp(index + 5, false), gtp(index + 0, true), gtp(index + 0, false), 1)
    ships.push(oneship)
}
shipangle = 0
shipsprite = sprites.create(ships[shipangle], SpriteKind.Player)
scene.cameraFollowSprite(shipsprite)


game.onUpdate(function () {
    for (let value of [shipsprite]) {
    	if (value.right > 235) {
            value.right = 0
        }
    }
})
forever(function () {
    console.log("shipsprite.vx = " + shipsprite.vx)
    pause(500)
})
