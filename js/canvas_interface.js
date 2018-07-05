/* global AFRAME */

/**
 * Draw dynamic colorful rectangles.
 */



AFRAME.registerComponent('draw-canvas-rectangles', {
    schema: {
      canvas: {type: 'selector'},
      target: {type: 'selector'},
      threshold: {type: 'number'}
    },
    
  
    init: function () {
      var canvas = this.canvas = this.data.canvas;
      this.step = -4;
      var ctx = this.ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.directionVec3 = new THREE.Vector3();

    },
  
    tick: function (t) {
      var canvas = this.canvas;
      var ctx = this.ctx;
      var x;
      var y;
      var hue = t / 10;

      var directionVec3 = this.directionVec3;
  
      // Grab position vectors (THREE.Vector3) from the entities' three.js objects.
      var targetPosition = this.data.target.object3D.position;
      var currentPosition = this.el.object3D.position;
  
      // Subtract the vectors to get the direction the entity should head in.
      directionVec3.copy(targetPosition).sub(currentPosition);
  
      // Calculate the distance.
  
      // Bottom layer rectangle.
      ctx.fillStyle = 'rgb(0, 0, 0)';

      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.plotSine(ctx, this.step,50,25-directionVec3.length()*2);
      this.step += 2;


      if (this.step > canvas.width*10) {
     
        this.step = 0;

      }

    }, 
     drawPoint(ctx, y) {            
        var radius = 3;
        ctx.beginPath();
        // Hold x constant at 4 so the point only moves up and down.
        ctx.arc(4, y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.stroke();
    },

    plotSine(ctx, xOffset, yOffset, amplitude) {
        var width = ctx.canvas.width;
        var height = ctx.canvas.height;
        var scale = 20;
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255,255,255)";
        console.log("Drawing point...");
        // drawPoint(ctx, yOffset+step);
        
        var x = 4;
        var y = 0;
        var frequency = 20;
        //ctx.moveTo(x, y);
        ctx.moveTo(x, 50);
        while (x < width) {
            y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
            ctx.lineTo(x, y);
            x++;
            // console.log("x="+x+" y="+y);
        }
        ctx.stroke();

    }
  });