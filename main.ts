let x = 0
let y = 0
basic.forever(function () {
    x = 2
    y = 0
    if (led.point(x, y)) {
        for (let index = 0; index < 1000000; index++) {
            basic.showString("Game over")
        }
    }
    for (let index = 0; index < 4; index++) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        if (input.buttonIsPressed(Button.B)) {
            x += 1
        }
        if (input.buttonIsPressed(Button.A)) {
            x += -1
        }
        if (led.point(x, y + 1)) {
            break;
        }
        y += 1
    }
    led.plot(x, y)
})
