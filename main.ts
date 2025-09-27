input.onButtonPressed(Button.A, function () {
    Acender += 1
})
input.onButtonPressed(Button.B, function () {
    Acender = 0
})
let Acender = 0
Acender = 0
basic.forever(function () {
    if (Acender) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
})
