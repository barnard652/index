(function () {
    const bg_parallax = document.getElementsByClassName("bg_parallax"); Array.prototype.forEach.call(bg_parallax, function (el) {
      let bgPos = {
        x: 50,
        y: 50
      };
      const delta = -0.005;
      let reactToTweenUpdate = () => {
        let winW = window.innerWidth / 2;
        let winH = window.innerHeight / 2;
        el.style.backgroundPosition = `${50 - (bgPos.x - winW) * delta}% ${
          50 - (bgPos.y - winH) * delta
        }%`;;
      };
      let tween = new TweenMax(bgPos, 0.9, {
        onUpdate: () => reactToTweenUpdate(),
        ease: Power4.easeOut    
      });
      el.onmousemove = function (event) {
        tween.updateTo(
          {
            x: event.clientX,
            y: event.clientY
          },
          true
        );
      };
    });
  })();