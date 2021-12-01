// import * as THREE from 'https://unpkg.com/three@0.135.0/build/three.module.js';
import { FontLoader } from "./resources/threejs-src/r135/jsm/loaders/FontLoader.js";

(function(exports) {

    // Converts a path in 3D space to a three.js mesh
    const textToMesh = (text, size, callback) => {

        const THREE = window.THREE;

        const loader = new FontLoader();

        loader.load( './resources/helvetiker_regular.typeface.json', function (font) {

            const geometry = new TextGeometry( text, {
                font: font,
                size: size || 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5
            } );

            const material = new THREE.MeshBasicMaterial({
                color: '#ffffff',
                opacity: 0.9,
                transparent: true
            });

            let textMesh = new THREE.Mesh(geometry, material);

            callback(textMesh);

        }, function(progress) {
            console.log('font progress', progress);
        }, function(error) {
            console.log('font error', error);
        });

    }

    exports.textToMesh = textToMesh;
})(window);
