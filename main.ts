basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("verysussyofyou")
        music.playMelody("C5 C5 F F - C5 C5 A ", 415)
        music.playMelody("F F D E D E C5 C5 ", 500)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("fyou")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("sus")
    } else {
    	
    }
})
