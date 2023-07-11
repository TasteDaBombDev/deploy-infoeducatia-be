import React from 'react'
import { Matrix4, Quaternion, Vector3 } from 'three';

// NU INCERCA SA INTELEGI CE SE INTAMPLA AICI FIINDCA ESTE 
// A 4A INCERCARE SI ESTE TOTAL INUMAN LUCRURILE pe CARE AM
// FOST FORTAT SA LE FAC DE CATRE THREE SI CANNON

// DE FIECARE DATA CAND TREBUIE SA MAI ADAUG O VARIABILA
// IN CLASA ASTA INUMANA MA SIMT INVINS CA SI FIINTA SI PROGRAMATOR
// NU AR TREBUI SA FIE NEVOIE SA EXISTE ASA CEVA

// IARA TREBUIE SA FAC MODIFICARI AICI

// SIMT CA NU MAI REZIST NICI EU SI NICI SOCKETURILE PE CARE LE FAC

class DoamneIartaCeUrmeaza {
    static mor = {
        dir : new Vector3(0, 0, 0),
        pose: new Vector3(0, 0, 0),
        quat: new Quaternion(0, 0, 0, 1)
    }

    static low = 4;
    static med = 9;
    static high = 14;

    //1:LOW 2:MEDIU 3:HIGH
    static puntaj = [0, 0, 0];

    //PENTRU MAI TARZIU NOTA
    //NU MAI STIU CE FACEA FIECARE VARIABILA DE MAI JOS

    static junctionCount = 0;
    static junctions = [];
    static junctionsHeight = [];

    static conesInJunction = [];

    // NU AR TREBUI SA FOLOSESC CHESTIA ASTA PENTRU
    // A FACE CONTROL LA CONTROLLERE
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

export default DoamneIartaCeUrmeaza