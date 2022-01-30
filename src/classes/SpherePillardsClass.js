import * as THREE from 'three';
import { GLBufferAttribute } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class SpherePilardsClass {
  constructor() {
    this.bind();
    this.modelLoader = new GLTFLoader();
    this.textureLoader = new THREE.TextureLoader();
  }

  init(scene) {
    this.scene = scene;

    const textureGreyMetal = this.textureLoader.load(
      './assets/textures/greyMetal.png'
    );
    const textureBlackMetal = this.textureLoader.load(
      './assets/textures/blackMetal.png'
    );

    this.gMatCap = new THREE.MeshMatcapMaterial({
      matcap: textureGreyMetal,
    });
    this.bMatCap = new THREE.MeshMatcapMaterial({
      matcap: textureBlackMetal,
    });

    this.modelLoader.load('./assets/models/pillard.glb', (model) => {
      // const modelGeometry = model.scenes[0].children[0].children[0].geometry;
      // const modelMaterial = new THREE.MeshNormalMaterial();
      // const modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
      // this.scene.add(modelMesh);

      // model.scene.traverse((child) => {
      //   if (child instanceof THREE.Mesh) {
      //     child.material = new THREE.MeshNormalMaterial();
      //   }
      // });

      model.scene.traverse((child) => {
        // if (child instanceof THREE.Mesh) {
        //   child.material = new THREE.MeshNormalMaterial();
        //   console.log(child);
        // }

        if (child.name == 'base') {
          child.material = this.bMatCap;
        } else if (child.name == 'Cylinder') {
          child.material = this.gMatCap;
        }
      });

      this.scene.add(model.scene);
    });
  }

  update() {}

  bind() {}
}

const _instance = new SpherePilardsClass();
export default _instance;
