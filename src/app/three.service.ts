import { Injectable } from '@angular/core';

@Injectable()
export class ThreeService {
  public renderer = new THREE.WebGLRenderer({ antialias: true });
  

  constructor() { }

  getRenderer() {
    return this.renderer;
  }

  createModel(type) {
    let model: any;
    if (type === 'sphere') {
      model = this.createSphere();
    } else if (type === 'torus') {
      model = this.createTorus();
    } else if (type === 'cube') {
      model = this.createBox();
    }
    return model;
  }

  clicked() {
    //Animate...
  }

  createSphere() {
    let sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 8, 8),
      new THREE.MeshNormalMaterial()
    );
    sphere.material.shading = THREE.FlatShading;
    sphere.position.z = 0.5;

    return sphere;
  }

  createBox() {
    var texture = new THREE.TextureLoader().load( '../../assets/textures/crate.gif' )
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    let box = new THREE.Mesh(
      geometry,
      material
    );
    box.material.shading = THREE.FlatShading;
    box.position.z = 0.5;
    return box;
  }

  createTorus() {
    var torus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.2, 8, 8),
      new THREE.MeshNormalMaterial()
    );
    torus.material.shading = THREE.FlatShading;
    torus.position.z = 0.5;
    torus.rotation.x = Math.PI / 2;

    return torus;
  }

}
