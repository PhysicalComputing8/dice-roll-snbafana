def on_button_pressed_a():
    # I like this animation effect. Great use of a loop to generate it!
    for index in range(6):
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.show_icon(IconNames.SMALL_SQUARE)
        basic.show_icon(IconNames.SQUARE)
    Roll()
    basic.show_number(roll)
    radio.send_number(roll)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Roll():
    global roll
    # uh oh! Unless your die has ten sides (plus some other dimensional side for a zero) I don't think this number range is correct. :-)
    roll = randint(1, 6)
    # Good use of if/then/else to display the appropriate image.
    if roll == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    elif roll == 2:
        basic.show_leds("""
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            """)
    elif roll == 3:
        basic.show_leds("""
            . . . . .
            . # . . .
            . . . # .
            . # . . .
            . . . . .
            """)
    elif roll == 4:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
    elif roll == 5:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """)
    else:
        basic.show_leds("""
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            """)
roll = 0
radio.set_group(1)
radio.send_number(0)