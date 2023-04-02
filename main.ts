let randon = 0
input.onGesture(Gesture.Shake, function () {
    randon = randint(1, 6)
    basic.showNumber(randon)
})
basic.forever(function () {
	
})
