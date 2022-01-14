function gtp (position: number, isx: boolean) {
    if (isx) {
        coord = Math.cos(Math.PI / 4 * position) * 8 + 8
    } else {
        coord = Math.sin(Math.PI / 4 * position) * 8 + 8
    }
    return coord
}
let coord = 0
let ships: Image[] = []
let oneship: Image = null
let coord2 = 0
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
    oneship.drawRect(0, 0, 16, 16, 7)
    oneship.drawLine(gtp(index + 0, true), gtp(index + 0, false), gtp(index + 3, true), gtp(index + 3, false), 1)
    oneship.drawLine(gtp(index + 3, true), gtp(index + 3, false), 7, 7, 1)
    oneship.drawLine(7, 7, gtp(index + 5, true), gtp(index + 5, false), 1)
    oneship.drawLine(gtp(index + 5, true), gtp(index + 5, false), gtp(index + 0, true), gtp(index + 0, false), 1)
    ships.push(oneship)
}
let shipsprite = sprites.create(ships[2], SpriteKind.Player)
for (let index = 0; index <= 7; index++) {
    shipsprite.setImage(ships[index])
    pause(500)
}
