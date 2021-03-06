# DAT505-CODE
This code creates the basic scene camera and two different light sources, plus an OrbitControl that can observe how objects appear at different angles.
```javascript
var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(25, 25, 50);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var light = new THREE.AmbientLight(0x404040);
  scene.add(light);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x000000);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls =new THREE.OrbitControls(camera,renderer.domElement);
```
This code first creates an array, then USES the IF code to select regions to change the color of different regions, and finally adds a rotation speed to the whole object.
```javascript
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x < 10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
    for (var y = -10; y < 10; y += 5) {
      for (var z = -10; z < 10; z += 5) {

      console.log("X: " +x+ ", Y:"+y+",Z: " +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});

      if(x >= 0 &&  y>=0 && z>=0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
    } else if ( x <= 0 && y>= 0 && z>= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
    }else{
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xF0F0F0});
    }
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.y = y;
      mesh.position.z = z;
      scene.add(mesh);
      cubes.push(mesh);
    }
   }
 }

  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);

rot +=0.01;

cubes.forEach(function(c,i){
  c.rotation.x = rot;
});

  renderer.render(scene, camera);
}

init();
drawFrame();
```
