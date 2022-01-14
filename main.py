def gtp(position: number, isx: bool):
    global coord
    if isx:
        coord = Math.cos(Math.PI / 4 * position) * 8 + 8
    else:
        coord = Math.sin(Math.PI / 4 * position) * 8 + 8
    return coord
coord = 0
oneship: Image = None
ships = []
coord2 = 0
for index in range(8):
    oneship = img("""
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
    """)
    oneship.draw_rect(0, 0, 16, 16, 7)
    oneship.draw_line(gtp(index + 0, True),
        gtp(index + 0, False),
        gtp(index + 3, True),
        gtp(index + 3, False),
        1)
    oneship.draw_line(gtp(index + 3, True), gtp(index + 3, False), 7, 7, 1)
    oneship.draw_line(7, 7, gtp(index + 5, True), gtp(index + 5, False), 1)
    oneship.draw_line(gtp(index + 5, True),
        gtp(index + 5, False),
        gtp(index + 0, True),
        gtp(index + 0, False),
        1)
    ships.append(oneship)
shipsprite = sprites.create(ships[2], SpriteKind.player)