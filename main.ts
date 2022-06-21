radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == a) {
        radio.sendString("ok")
        radio.sendNumber(cnt)
    } else if (receivedNumber < a) {
        radio.sendString("up")
        cnt += 1
    } else if (receivedNumber > a) {
        radio.sendString("down")
        cnt += 1
    } else {
    	
    }
})
let cnt = 0
let a = 0
a = randint(1, 9)
radio.setGroup(158)
cnt = 0
basic.showNumber(a)
