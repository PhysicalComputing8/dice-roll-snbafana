input.onButtonPressed(Button.A, function () {
    // I like this animation effect. Great use of a loop to generate it!
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
    Roll()
    basic.showNumber(roll)
    radio.sendNumber(roll)
})
function Roll () {
    // uh oh! Unless your die has ten sides (plus some other dimensional side for a zero) I don't think this number range is correct. :-)
    roll = randint(1, 6)
    // Good use of if/then/else to display the appropriate image.
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
}
let roll = 0
radio.setGroup(1)
radio.sendNumber(0)
