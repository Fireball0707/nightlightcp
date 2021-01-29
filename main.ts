input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    if (input.lightLevel() > 225) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            # # # # #
            # # # # #
            `)
    }
})
