// import { PerspectiveCamera } from '@react-three/drei'
import { PerspectiveCamera } from 'three';
import React, { useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

export const SplitScreen = () => {

    const { gl, scene, size } = useThree();

    useEffect(() => {
        // Set up cameras
        const aspect = size.width / 2 / size.height;
        const near = 0.1;
        const far = 1000;
        const camera1 = new PerspectiveCamera(75, aspect, near, far);
        const camera2 = new PerspectiveCamera(75, aspect, near, far);

        // Set initial camera positions
        camera1.position.set(0, 0, 5);
        camera2.position.set(0, 0, 5);

        // Add camera controls (optional)
        // const controls1 = new OrbitControls(camera1, gl.domElement);
        // const controls2 = new OrbitControls(camera2, gl.domElement);
        // controls1.enablePan = false;
        // controls2.enablePan = false;

        // Update the scene with the new cameras
        scene.add(camera1);
        scene.add(camera2);

        return () => {
            // Clean up
            scene.remove(camera1);
            scene.remove(camera2);
            // controls1.dispose();
            // controls2.dispose();
        };
    }, [gl, scene, size]);

    useFrame(() => {
        // Render the scene with each camera
        gl.autoClear = false;
        gl.clear();

        // Player 1
        gl.setViewport(0, 0, size.width / 2, size.height);
        // gl.render(scene, scene.children[1].camera); 

        // Player 2
        // gl.setViewport(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        // gl.render(scene, scene.children[2].camera);
    });

    // return null;
};
