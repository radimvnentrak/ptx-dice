let number = 0
basic.showNumber(number)
input.onButtonPressed(Button.A, function () {
if (number > 0)
{
    number -= 1
}
basic.showNumber (number)
})