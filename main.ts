let number = 5
whaleysans.showNumber(number)
input.onButtonPressed(Button.A, function () {
    if (number > 0) {
        number -= 1
    }
    whaleysans.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    if (number <10) {
        number += 1
    }
whaleysans.showNumber(number)
})