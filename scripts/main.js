
let scene, camera, renderer, controls, model;
let isRotating = false;
let activeModel = null;

function init() {
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000); 
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    
    const container = document.getElementById('canvas-container');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xf8f9fa);
    container.appendChild(renderer.domElement);

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(hemisphereLight);

    
    camera.position.set(0, 0.5, 2); 
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
}

function normalizeModel(model) {
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    
    
    const targetHeight = 1.5; 
    const scale = targetHeight / size.y;
    
    model.scale.set(scale, scale, scale);
    
    
    const center = box.getCenter(new THREE.Vector3());
    model.position.y = -center.y * scale;
}

function loadModel(modelName) {
    if (activeModel) scene.remove(activeModel);
    
    new THREE.GLTFLoader().load(`models/${modelName}.glb`, (gltf) => {
        activeModel = gltf.scene;
        
        activeModel.traverse(child => {
            if (child.isMesh) {
                child.material.envMapIntensity = 2.5;
                child.material.needsUpdate = true;
            }
        });

        normalizeModel(activeModel);
        scene.add(activeModel);
        updateModelButtons(modelName);
        
        
        const box = new THREE.Box3().setFromObject(activeModel);
        const size = box.getSize(new THREE.Vector3());
        camera.position.z = size.length() * 1.5;
        controls.update();
    });
}

function updateModelButtons(activeModel) {
    document.querySelectorAll('.model-btn').forEach(btn => 
        btn.classList.toggle('active', btn.dataset.model === activeModel)
    );
}

function toggleWireframe() {
    if (!activeModel) return;
    
    activeModel.traverse(child => {
        if (child.isMesh) {
            child.material.wireframe = !child.material.wireframe;
            child.material.wireframeColor = 0x333333;
            child.material.needsUpdate = true;
        }
    });
}

function toggleRotation() {
    isRotating = !isRotating;
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    
    if (isRotating && activeModel) {
        activeModel.rotation.y += 0.005;
    }
    
    renderer.render(scene, camera);
}


document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => loadModel(btn.dataset.model));
});

window.addEventListener('resize', () => {
    const container = document.getElementById('canvas-container');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});


init();
animate();
loadModel('model1'); 