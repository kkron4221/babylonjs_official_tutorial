const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = createScene();

function createScene() {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, Math.PI/2, 3, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

  const outline = [
    new BABYLON.Vector3(-0.3, 0, -0.1),
    new BABYLON.Vector3(0.2, 0, -0.1),
  ]

  for (let i = 0; i < 20; i++) {
    outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));
  }

  outline.push(new BABYLON.Vector3(0, 0, 0.1));
  outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));

  const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shpe: outline, depth: 0.2});

  return scene;
}

function addObjects(scene) {
  const box = BABYLON.MeshBuilder.CreateBox("box", {width: 0.3, height: 0.3, depth: 0.3});
  box.position.x = 0.0;
  box.position.y = 1;
  const boxMaterial = new BABYLON.StandardMaterial("material");
  boxMaterial.diffuseColor = BABYLON.Color3.Random();
  box.material = boxMaterial;
}