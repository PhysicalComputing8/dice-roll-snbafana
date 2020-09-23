// Great job. You moved your commands inside of the onShake event trigger. Now they will execute when the micro:ibit is shaken.
input.onGesture(Gesture.Shake, function () {
    // uh oh! Unless your die has ten sides (plus some other dimensional side for a zero) I don't think this number range is correct. :-)
    roll = randint(1, 6)
    basic.showNumber(roll)
})
let roll = 0
basic.showString("Shake to roll the dice")
