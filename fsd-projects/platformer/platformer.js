$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 295, 20, 150, "black")
createPlatform(0, 650, 250, 20, "red")
createPlatform(455, 600, 100, 20, "red")
createPlatform(755, 525, 100, 20, "red")
createPlatform(700, 238, 20, 150, "black")
createPlatform(1000, 575, 100, 20, "red")
createPlatform(980, 180, 20, 250, "black")
createPlatform(1150, 550, 100, 20, "red")
createPlatform(1250, 300, 20, 700, "black")
createPlatform(1000, 420, 100, 20, "red")
createPlatform(1150, 300, 100, 20, "red")
createPlatform(1250, 300, 150, 20, "red")
createPlatform(980, 100, 20, 150, "black")
createPlatform(1100, 675, 151, 20, "red")
    // TODO 3 - Create Collectables
createCollectable("database", 490, 565);
createCollectable("database", 1025, 540);
createCollectable("database", 1185, 640);
createCollectable("database", 1325,255);


    
    // TODO 4 - Create Cannons
createCannon("left", 675, 0)
createCannon("top", 200, 700)
createCannon("top", 675, 1000)
createCannon("top", 1180, 2000)
createCannon("left", 300, 2550)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
