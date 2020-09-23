let roll = 0
// Great job. You moved your commands inside of the onShake event trigger. Now they will execute when the micro:ibit is shaken.
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Square)
    }
    // uh oh! Unless your die has ten sides (plus some other dimensional side for a zero) I don't think this number range is correct. :-)
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (roll == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (roll == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . # .
            . # . . .
            . . . . .
            `)
    } else if (roll == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (roll == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            `)
    }
})
