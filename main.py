def on_received_number(receivedNumber):
    global cnt
    if receivedNumber == a:
        radio.send_string("ok")
        radio.send_number(cnt)
    elif receivedNumber < a:
        radio.send_string("up")
        cnt += 1
    elif receivedNumber > a:
        radio.send_string("down")
        cnt += 1
    else:
        pass
radio.on_received_number(on_received_number)

cnt = 0
a = 0
a = randint(1, 9)
radio.set_group(158)
cnt = 0
basic.show_number(a)