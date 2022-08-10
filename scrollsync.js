$(document).ready(function(){
  $('body').append($(`<style id="scrollsync">
    :root * {
      ${/* Pause the animation */}
      animation-play-state: paused;
      ${/* Bind the animation to scroll */}
      animation-delay: calc(var(--scroll) * -1s);
      ${/* These last 2 properites clean up overshoot weirdness */}
      animation-iteration-count: 1;
      animation-fill-mode: both;
    }`)
  );
});

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
