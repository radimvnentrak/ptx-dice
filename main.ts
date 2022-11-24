let number = 5

basic.forever(function () {

    whaleysans.showNumber(number)
    if (input.buttonIsPressed(Button.A)) {
        if (number > 0) {
            number -= 1
        }
    }
})

// input.buttonIsPressed(Button.B, function () {
//     if (number < 10) {
//         number += 1
//     }
//     whaleysans.showNumber(number)
// })