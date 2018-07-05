/* global AFRAME */

/**
 * Draw dynamic colorful rectangles.
 */



AFRAME.registerComponent('draw-canvas-rectangles', {
    schema: {type: 'selector'},

    
  
    init: function () {
      var canvas = this.canvas = this.data;
      this.step = -4;
      var ctx = this.ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    },
  
    tick: function (t) {
      var canvas = this.canvas;
      var ctx = this.ctx;
      var x;
      var y;
      var hue = t / 10;
  
      // Bottom layer rectangle.
      ctx.fillStyle = 'rgb(0, 0, 0)';

      this.ctx.fillRect(0, 0, canvas.width, canvas.height);
      this.plotSine(ctx, this.step, 50);
      this.step += 1;

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

    plotSine(ctx, xOffset, yOffset) {
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
        var amplitude = 40;
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