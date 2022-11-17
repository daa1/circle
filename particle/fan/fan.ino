#include "Particle.h"


const pin_t FAN = D7;


SYSTEM_THREAD(ENABLED);

static bool FAN_ON = false;

int fanToggle(String value) {
	if (FAN_ON) {
	    FAN_ON = false;
	    digitalWrite(FAN, LOW);
	    return 0;
    }
    else {
        FAN_ON = true;
		digitalWrite(FAN, HIGH);
        return 1;
    }  
}

void setup() {
	pinMode(FAN, OUTPUT);
	Particle.function("fan", fanToggle);
}

void loop() {
}
