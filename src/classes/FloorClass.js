import * as THREE from 'three';
import { GLBufferAttribute } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class FloorClass {
  constructor() {
    this.bind();
    this.modelLoader = new GLTFLoader();
  }

  init(scene) {
    this.scene = scene;

    this.modelLoader.load('./assets/models/floor.glb', (model) => {
      //   model.scene.traverse((child) => {
      //     if (child instanceof THREE.Mesh) {
      //       child.material = new THREE.MeshNormalMaterial();
      //     }
      //   });

      this.scene.add(model.scene);
    });
  }

  update() {}

  bind() {}
}

const _instance = new FloorClass();
export default _instance;
