import * as THREE from 'three'
import { Object3D } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


//SCENE
const scene = new THREE.Scene()
// scene.background = new THREE.Color(0x87ceeb);



//CAMERA
const camera1 = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000)


camera1.position.set(3, 5, 3);
camera1.lookAt(0, 0, 0)



//RENDER


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)



//3D Controls
new OrbitControls(camera1, renderer.domElement)


//OBJECT PROPERTIES
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
})


//OBJECT INITS
const cube1 = new THREE.Mesh(geometry, material)

const box = new THREE.Box3();

const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(),
    new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    })
);


//GROUND PLANE
const plane1 = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshBasicMaterial({
        color: "white"
    })

);
plane1.position.set(0, -0.5, 0);
plane1.rotateX(-Math.PI / 2);



//SCENE BUILDING
scene.add(mesh, plane1)




// scene.add(cube)


//ANIMATIONS

function animate() {

    requestAnimationFrame(animate)

    cube1.rotation.x += 0.01
    cube1.rotation.y += 0.01

    render()
}


//RENDERS


function render() {
    renderer.render(scene, camera1)

}

animate()
