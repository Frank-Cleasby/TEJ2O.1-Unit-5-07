/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program moves a motor
*/

// variables
const servoNumberOne = robotbit.Servos.S1

// start
basic.clearScreen()
basic.showIcon(IconNames.Giraffe)

// move 0 degrees
input.onButtonPressed(Button.A, function() {
    robotbit.Servo(servoNumberOne, 225)
})

// move 180 degrees
input.onButtonPressed(Button.B, function() {
    robotbit.Servo(servoNumberOne, 180)
})
