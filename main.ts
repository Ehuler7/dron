// Código base Receptor / Dron (Air:bit)
radio.setGroup(7)
radio.setGroup(7)
AirBit.initAirbit()

radio.onReceivedValue(function (name, value) {
    if (name == "P") {
        AirBit.setPitch(value)
    } else if (name == "R") {
        AirBit.setRoll(value)
    } else if (name == "Y") {
        AirBit.setYaw(value)
    } else if (name == "A") {
        AirBit.setArm(value)
    } else if (name == "T") {
        AirBit.setThrottle(value)
    }
})

basic.forever(function () {
    AirBit.flightController()
})