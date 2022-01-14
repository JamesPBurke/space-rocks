def on_up_pressed():
    the_angle = shipangle*Math.PI/4
    shipsprite.set_velocity(Math.cos(the_angle)*5, Math.sin(the_angle)*5)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global shipangle
    shipangle += -1
    shipangle = shipangle % 8
    if shipangle < 0:
        shipangle = 8 + shipangle
    shipsprite.set_image(ships[shipangle])
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def gtp(position: number, isx: bool):
    global coord
    if isx:
        coord = Math.cos(Math.PI / 4 * position) * 8 + 8
    else:
        coord = Math.sin(Math.PI / 4 * position) * 8 + 8
    return coord

def on_right_pressed():
    global shipangle
    shipangle += 1
    shipangle = shipangle % 8
    shipsprite.set_image(ships[shipangle])
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

coord = 0
shipsprite: Sprite = None
shipangle = 0
ships: List[Image] = []
oneship: Image = None
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
shipangle = 0
shipsprite = sprites.create(ships[shipangle], SpriteKind.player)