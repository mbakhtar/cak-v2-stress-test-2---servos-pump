input.onButtonPressed(Button.A, function () {
	
})
modules.servo1.setEnabled(true)
myModules.servo2.setEnabled(true)
myModules.servo3.setEnabled(true)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    modules.relay1.setActive(true)
    modules.servo1.setAngle(90)
    myModules.servo2.setAngle(90)
    myModules.servo3.setAngle(90)
    basic.pause(500)
    modules.servo1.setAngle(-90)
    myModules.servo2.setAngle(-90)
    myModules.servo3.setAngle(-90)
    basic.showIcon(IconNames.No)
})
