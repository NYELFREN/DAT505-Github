# DAT505-CODE
This code creates the necessary building blocks, then drops the squares indefinitely through a sequence and specifies a maximum of 10 screens.
```javascript
//Setup the global variables
var camera, scene, renderer, geometry, material, mesh;
var texture;
var cubesNum = 10;

var cubes = [];
var speed = [];

function init() {
	// Create a scene
	scene = new THREE.Scene();

	// Create a geometry
	// 	Create a box (cube) of 10 width, length, and height
	geometry = new THREE.BoxGeometry( 10, 10, 10 );

	for (var i=0; i<cubesNum; i++){
		var randomValue = Math.random() * 0.5;
		speed.push(randomValue);

	var randomSelection = Math.round(Math.random()*4) + 1;
```
This code determines the fall in the cube texture, using the random code, needs in the Textures folder into the material, let drop small random is square, and at the end are randomly changed the proportion of the dimensions of the small square, let they all look different.
```javascript
  // Load a texture
	texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg" );

	// Create a MeshBasicMaterial with a loaded texture
	material = new THREE.MeshBasicMaterial( { map: texture} );

	// Combine the geometry and material into a mesh
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.y = 30;


  // Add the mesh to the scene
	scene.add( mesh );
	cubes.push( mesh );
}
	// Create a camera

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 2, 1000 );
	// Move the camera 'out' by 30
	camera.position.z = 30;

	// Create a WebGL Rendered
	renderer = new THREE.WebGLRenderer();
	// Set the size of the rendered to the inner width and inner height of the window
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Add in the created DOM element to the body of the document
	document.body.appendChild( renderer.domElement );
}


function animate() {
	// Call the requestAnimationFrame function on the animate function
	// 	(thus creating an infinite loop)
	requestAnimationFrame( animate );

	for(var i=0; i<cubesNum; i++){

			// Rotate the x position of the mesh by 0.03
			cubes[i].rotation.x += speed[i] / 100;
			// Rotate the y position of the mesh by 0.02
			cubes[i].rotation.y += speed[i] / 80;



			//Move the mesh towards the bottom of the screen
			cubes[i].position.y -= speed[i];

			//If the mesh passes the bottom of the screen,
			//make it appear on the top. Also x position is randomized
			if (cubes[i].position.y <- 30){
				cubes[i].position.y = 35;
				cubes[i].position.x = (Math.random()*-20) +10;
				cubes[i].scale.x = Math.random();
				cubes[i].scale.y = Math.random();
				cubes[i].scale.z = Math.random();
	}
}


	// Render everything using the created renderer, scene, and camera
	renderer.render( scene, camera );
}

init();
animate();
```
