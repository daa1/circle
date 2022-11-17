// This isn't always required, but it's a good habit to get into
// and it never hurts.
#include "Particle.h"


const pin_t MY_BUTTON = D1;
const pin_t MY_MOTOR = D3;
const pin_t BUILTIN_LED = D7;
// const pin_t 

// int motor = D3;

SYSTEM_THREAD(ENABLED);
Servo servo;  /* create servo object to control a servo */


// Last time, we only needed to declare pins in the setup function.
// This time, we are also going to register our Particle function


int servoToggle(String command) {
    if (command.equals("rotate")) {
        servo.attach(MY_MOTOR);
        servo.write(180);
        delay(1000);
        servo.write(0);
        delay(1000);
        servo.detach();
        return 1;
    }
    else {
        // Unknown option
        return -1;
    }
}

void setup()
{

    // Here's the pin configuration, same as last time
    // pinMode(motor, OUTPUT);
    pinMode(MY_MOTOR, OUTPUT);
    pinMode(MY_BUTTON, INPUT_PULLUP); // sets pin as input
    pinMode(BUILTIN_LED, OUTPUT);
    //pinMode(led3, OUTPUT);


    Particle.function("servo", servoToggle);

    digitalWrite(BUILTIN_LED, HIGH);

    // We are also going to declare a Particle.function so that we can turn the LED on and off from the cloud.
    //Particle.function("led",ledToggle);
    // This is saying that when we ask the cloud for the function "led", it will employ the function ledToggle() from this app.

    // For good measure, let's also make sure both LEDs are off when we start:
    //digitalWrite(led1, HIGH);
    //digitalWrite(led2, HIGH);
    //digitalWrite(led3, HIGH);

}


// Last time, we wanted to continously blink the LED on and off
// Since we're waiting for input through the cloud this time,
// we don't actually need to put anything in the loop

void loop()
{
    // find out if the button is pushed
   // or not by reading from it.
   int buttonState = digitalRead(MY_BUTTON);
   
     // remember that we have wired the pushbutton to
  // ground and are using a pulldown resistor
  // that means, when the button is pushed,
  // we will get a LOW signal
  // when the button is not pushed we'll get a HIGH

  // let's use that to set our LED on or off

  if(buttonState == LOW)
  {
    // turn the LED On
    digitalWrite(BUILTIN_LED, HIGH);
    delay(5000);
    servoToggle("rotate");
  }else{
    // otherwise
    // turn the LED Off
    digitalWrite(BUILTIN_LED, LOW);

  }

}

// We're going to have a super cool function now that gets called when a matching API request is sent
// This is the ledToggle function we registered to the "led" Particle.function earlier.



