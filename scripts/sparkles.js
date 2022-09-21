export const star = [];

window.addEventListener('mousemove', function (e) {

    // falling trail
    [1, .9, .8, .5, .25, .6,  .3, .2].forEach(function (i) {
      var j = (1 - i) * 50;
      var elem = document.createElement('div');
      var size = Math.ceil(Math.random() * 10 * i) + 'px';
      elem.style.position = 'fixed';
      elem.style.zIndex = 6;
      elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
      elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
      elem.style.width = size;
      elem.style.opacity = "0.5";
      elem.style.height = size;
      elem.style.animation = "fallingsparkles 2s";
      elem.style.background = 'hsla(' +
        Math.round(Math.random() * 160) + ', ' +
        '60%, ' +
        '90%, ' +
        i + ')';
      elem.style.borderRadius = size;
      elem.style.pointerEvents = 'none';
      document.body.appendChild(elem);
      
      window.setTimeout(function () {
        document.body.removeChild(elem);
      }, Math.round(Math.random() * i * 1000));

    });
  }, false);