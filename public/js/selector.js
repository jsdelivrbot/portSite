delete AFRAME.components['selector'];

AFRAME.registerComponent('selector', {
	schema: {default: ''},

  update: function () {
      console.log(this.el)
      var SwitchPic = document.querySelector(this.el);
      screenUp.addEventListener('collide', function (e) {
        console.log('Computer has collided with body #' + e.detail.body.id) ;
      })
       }}
