/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value":100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#FFFBFF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "/Untitled-1.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .8,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 60,
          "opacity_min": 27.61,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 190,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 100,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
//** ▶▶▶ START FULLPAGE SCROLL MIN JS

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  navigation: true,
  // navigationPosition: 'left',
  onLeave: (origin, destination, direction) =>{
      const section = destination.item;
      const title = section.querySelector("h1,h2,h3,h4,h5,h6,svg");
      const tl = new TimelineMax({delay:0.5});
      tl.fromTo(title,0.5, {y: '50', opacity:0}, {y:0, opacity:1});
  }
});
//** END FULLPAGE SCROOL MIN JS ◀◀◀