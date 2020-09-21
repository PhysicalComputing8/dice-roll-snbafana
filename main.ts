input.onGesture(Gesture.Shake, function () {
    roll = randint(0, 10)
    basic.showNumber(roll)
})
let roll = 0
basic.showString("Shake to roll the dice")
