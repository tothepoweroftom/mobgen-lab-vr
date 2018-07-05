AFRAME.registerComponent('proximity', {
    schema: {
      target: {type: 'selector'},
      threshold: {type: 'number'}
    },
  
    init: function () {
      this.directionVec3 = new THREE.Vector3();
    },
  
    tick: function (time, timeDelta) {
      var directionVec3 = this.directionVec3;
  
      // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
      var targetPosition = this.data.target.object3D.position;
      var currentPosition = this.el.object3D.position;
  
      // Subtract the vectors to get the direction the entity should head in.
      directionVec3.copy(targetPosition).sub(currentPosition);
  
      // Calculate the distance.
      var distance = directionVec3.length();
      console.log("DISTANCE", distance);
      // Don't go any closer if a close proximity has been reached.
      if (distance < 1) { return; }
  

    }
  });