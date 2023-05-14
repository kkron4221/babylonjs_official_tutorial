const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = createScene();

function createScene() {
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.Black();
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, -0.5), scene);
  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI/2, Math.PI/2, 3, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);
  addObjects(scene);
  engine.runRenderLoop(() => {
    if (scene && scene.activeCamera) {
      scene.render();
    }
  });
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