// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------


// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
//var controls = new THREE.OrbitControls( camera );
//camera.position.set( -50, 100, -800 );
//controls.update();
//function animate() {
    //requestAnimationFrame( animate );

     //required if controls.enableDamping or controls.autoRotate are set to true
    //controls.update();
    //renderer.render( scene, camera );
//}


// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.SphereGeometry(25, 25, 25);


var texture1 = new THREE.TextureLoader().load("textures/1.jpg");

var material8 = new THREE.MeshBasicMaterial({ map: texture1});

var texture2 = new THREE.TextureLoader().load("textures/2.jpg");

var material9 = new THREE.MeshBasicMaterial({ map: texture2});

var texture3 = new THREE.TextureLoader().load("textures/3.jpg");

var material10 = new THREE.MeshBasicMaterial({ map: texture3});

var texture4 = new THREE.TextureLoader().load("textures/4.jpg");

var material11 = new THREE.MeshBasicMaterial({ map: texture4});

var texture5 = new THREE.TextureLoader().load("textures/5.jpg");

var material12 = new THREE.MeshBasicMaterial({ map: texture5});

var texture6 = new THREE.TextureLoader().load("textures/6.jpg");

var material13 = new THREE.MeshBasicMaterial({ map: texture6});

var texture7 = new THREE.TextureLoader().load("textures/7.jpg");

var material14 = new THREE.MeshBasicMaterial({ map: texture7});



var mesh1 = new THREE.Mesh( geometry, material11 );
mesh1.position.z = 0;
mesh1.position.x = -50;
mesh1.position.y = 0;
//mesh1.setSize.z = 20;
//mesh1.setSize.x = 20;
//mesh1.setSize.y = 20;

var mesh2 = new THREE.Mesh( geometry, material8 );
mesh2.position.z = 0;
mesh2.position.x = 50;
mesh2.position.y = 0;

var mesh3 = new THREE.Mesh( geometry, material9 );
mesh3.position.z = 0;
mesh3.position.x = 125;
mesh3.position.y = 0;



var mesh4 = new THREE.Mesh( geometry, material10 );
mesh4.position.z = 0;
mesh4.position.x = 175;
mesh4.position.y = 0;

var mesh5 = new THREE.Mesh( geometry, material12 );
mesh5.position.z = 0;
mesh5.position.x = -150;
mesh5.position.y = 0;

var mesh6 = new THREE.Mesh( geometry, material13 );
mesh6.position.z = 0;
mesh6.position.x = -300;
mesh6.position.y = 0;

var geometry1 = new THREE.TorusGeometry( 70, 2, 160, 500 );
var material1 = new THREE.MeshBasicMaterial( { color: "#FFFFFF" } );
var torus = new THREE.Mesh( geometry1, material1 );
torus.position.z = 0;
torus.position.x = -300;
torus.position.y = 0;

var mesh7 = new THREE.Mesh( geometry, material14 );
mesh7.position.z = 0;
mesh7.position.x = -450;
mesh7.position.y = 0;


//scene.add(mesh1);
//scene.add(mesh2);

var newgroup = new THREE.Group();
newgroup.position.z = -1000;
newgroup.position.x = -50;
newgroup.position.y = 0;

newgroup.add(mesh1);
newgroup.add(mesh2);
newgroup.add(mesh3);
newgroup.add(mesh4);
newgroup.add(mesh5);
newgroup.add(mesh6);
newgroup.add(mesh7);
newgroup.add(torus);
scene.add(newgroup);



var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

 rot += 0.01;
  mesh1.rotation.x = rot;
  mesh1.rotation.y = rot;
  mesh2.rotation.x = rot+2;
  mesh2.rotation.y = rot+2;
  mesh3.rotation.x = rot;
  mesh3.rotation.y = rot;
  mesh4.rotation.x = rot+2;
  mesh4.rotation.y = rot+2;
  mesh5.rotation.x = rot;
  mesh5.rotation.y = rot;
  mesh6.rotation.x = rot+2;
  mesh6.rotation.y = rot+2;
  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;
  torus.rotation.x += 0.02;
  //torus.rotation.y += 0.03;
  torus.rotation.z += 0.02;

  //newgroup.rotation.x = rot; //Continuously rotate the mesh
  newgroup.rotation.y = rot;
  //newgroup.rotation.z = rot;



  // Render the scene
  renderer.render(scene, camera);
};

color = Math.random() * 0xffffff;

//GUI - Setup the GUI controller
  var controller1 = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;


  }();

  var gui1 = new dat.GUI();
  var f1 = gui1.addFolder('Scale');
  f1.add(controller1, 'scaleX', 0.1, 3).onChange( function() {
    mesh7.scale.x = (controller1.scaleX);
  });
  f1.add(controller1, 'scaleY', 0.1, 3).onChange( function() {
    mesh7.scale.y = (controller1.scaleY);
  });
  f1.add(controller1, 'scaleZ', 0.1, 3).onChange( function() {
    mesh7.scale.z = (controller1.scaleZ);
  });


  var gui2 = new dat.GUI();
  var f2 = gui2.addFolder('Scale');
  f2.add(controller1, 'scaleX', 0.1, 2.5).onChange( function() {
    mesh6.scale.x = (controller1.scaleX);
  });
  f2.add(controller1, 'scaleY', 0.1, 2.5).onChange( function() {
    mesh6.scale.y = (controller1.scaleY);
  });
  f2.add(controller1, 'scaleZ', 0.1, 2.5).onChange( function() {
    mesh6.scale.z = (controller1.scaleZ);
  });

  var gui2 = new dat.GUI();
  var f2 = gui2.addFolder('Scale');
  f2.add(controller1, 'scaleX', 0.1, 1.5).onChange( function() {
    mesh5.scale.x = (controller1.scaleX);
  });
  f2.add(controller1, 'scaleY', 0.1, 1.5).onChange( function() {
    mesh5.scale.y = (controller1.scaleY);
  });
  f2.add(controller1, 'scaleZ', 0.1, 1.5).onChange( function() {
    mesh5.scale.z = (controller1.scaleZ);
  });

  var gui2 = new dat.GUI();
  var f2 = gui2.addFolder('Scale');
  f2.add(controller1, 'scaleX', 0.1, 0.9).onChange( function() {
    mesh2.scale.x = (controller1.scaleX);
  });
  f2.add(controller1, 'scaleY', 0.1, 0.9).onChange( function() {
    mesh2.scale.y = (controller1.scaleY);
  });
  f2.add(controller1, 'scaleZ', 0.1, 0.9).onChange( function() {
    mesh2.scale.z = (controller1.scaleZ);
  });



  //gui.add( controller, 'castShadow', false ).onChange( function() {
    //mesh.castShadow = controller.castShadow;
  //});

//init();
render(); //Run the function render