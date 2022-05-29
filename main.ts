radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        basic.pause(2000)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
        basic.pause(10000)
        radio.sendNumber(1)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
