// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the 3D model file
const loader = new THREE.GLTFLoader();
loader.load('globe.gltf', (gltf) => {
	const globe = gltf.scene;
	scene.add(globe);

	// Animate the globe
	function animate() {
		requestAnimationFrame(animate);

		// Rotate the globe
		globe.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	animate();
});