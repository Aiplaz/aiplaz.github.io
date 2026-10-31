/* Gameplay reels on the game pages: one play/pause button on each muted, looping .reel video. With reduced motion
   the small inline script after the video has already removed autoplay, so the poster waits for a tap. Off screen
   the video pauses; back on screen it plays again, unless the visitor paused it. */
(function () {
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function play(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }
  document.querySelectorAll('.reel').forEach(function (reel) {
    var v = reel.querySelector('video');
    var b = reel.querySelector('.reel-toggle');
    if (!v || !b) return;
    var held = reduce;
    function sync() {
      reel.classList.toggle('is-paused', v.paused);
    }
    v.addEventListener('play', sync);
    v.addEventListener('pause', sync);
    b.addEventListener('click', function () {
      if (v.paused) {
        held = false;
        play(v);
      } else {
        held = true;
        v.pause();
      }
    });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            if (!held && v.paused) play(v);
          } else if (!v.paused) {
            v.pause();
          }
        });
      }, { threshold: 0.25 }).observe(v);
    }
    b.hidden = false;
    sync();
  });
})();
