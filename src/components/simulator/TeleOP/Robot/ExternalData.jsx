
class ExternalData {

    static low = 4;
    static med = 9;
    static high = 14;

    //1:LOW 2:MEDIU 3:HIGH
    static puntaj = [0, 0, 0];

    //PENTRU MAI TARZIU NOTA

    static junctionCount = 0;
    static junctions = [];
    static junctionsHeight = [];

    static conesInJunction = [];

    // CA SA NU UIT
    // KEY = NUMARUL PLAYERULUI
    // VALUE = NUMARUL INDEXULUI CONTROLLERULUI
    static gamepadAssignment = {
        1: 0,
        2: 1
    }

    static gamepadControlled = false

    static robotStates = {
        0: {
            startPose: 0,

            bratBody: 0,
            robotBody: 0,

            bratApi: 0,
            robotApi: 0,

            controls: 0
        },

    }

}

export default ExternalData