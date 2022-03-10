<style lang="scss" scoped>
	.pageload-overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #1B1B1B;
		z-index: 100000;
		.logo--load{
			text-align: center;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    min-height: 100vh;
		    width: 100%;
		    flex-wrap: wrap;
		    p{
			    font-size: 3em;
			    width: 100%;
		    }
		}
	}

	.pageload-overlay.show {
		visibility: visible;
	}

	.pageload-overlay svg {
		position: absolute;
		top: 0;
		left: 0;
	}

	.pageload-overlay svg path {
		fill: #fff;
	}


	.overlay {
	  position: fixed;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  transform: translateX(-100%);
	  z-index: 1000000;
	  //transition: all 0.5s cubic-bezier(.1,.86,.45,1.01);
	  .revealer {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 10;
	  }
	}

	.overlay .revealer {
	  &:nth-child(1) {
	    background: #E6BF00;
	    z-index: 15;
	  }
	  &:nth-child(2) {
	    background: #FFE680;
	    z-index: 20;
	  }
	  &:nth-child(3) {
	    background: #AC8A00;
	    z-index: 25;
	  }
	}

	.slideIn-1 {
	  -webkit-animation: slideIn-1 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
		animation: slideIn-1 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
	}

	.slideIn-2 {
	  -webkit-animation: slideIn-2 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
		animation: slideIn-2 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
	}

	.slideIn-3 {
	  -webkit-animation: slideIn-3 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
		animation: slideIn-3 1.5s cubic-bezier(0.7, 0, 0.3, 1) forwards;
	}

	.extend {
	  transform: translateX(0);
	}

	.extend-more {
	  transform: translateX(100%);
	}

	.fadeOut {
	  animation: fadeOut 1s cubic-bezier(.1,.86,.45,1.01);
	  animation-fill-mode: forwards;
	  animation-direction: reverse;
	}

	@keyframes fadeOut {
	  from {
	    opacity: 1;
	  }
	  to {
	    opacity: 0;
	  }
	}

	.slideIn {
	  animation: slideIn 1s cubic-bezier(.1,.86,.45,1.01);
	  animation-fill-mode: forwards;
	}

	@keyframes slideIn {
	  from {
	    transform: translateX(-100%);
	  }
	  to {
	    transform: translateX(0%);
	  }
	}

	.anim--effect-2 .revealer--animate .revealer__layer {

	}

	.anim--effect-2 .revealer--animate .revealer__layer:nth-child(2) {

	}

	@keyframes slideIn-1 {
	  0% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		30%,
		70% {
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
			animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		}
		100% {
			-webkit-transform: translate3d(200%, 0, 0);
			transform: translate3d(200%, 0, 0);
		}
	}

	@keyframes slideIn-2 {
		0%,
		14.5% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		37.5%,
		63.5% {
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
			animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		}
		87.5%,
		100% {
			-webkit-transform: translate3d(200%, 0, 0);
			transform: translate3d(200%, 0, 0);
		}
	}

	@keyframes slideIn-3 {
		0%,
		22.5% {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		45.5%,
		65.5% {
			-webkit-transform: translate3d(100%, 0, 0);
			transform: translate3d(100%, 0, 0);
			-webkit-animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
			animation-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
		}
		90.5%,
		100% {
			-webkit-transform: translate3d(200%, 0, 0);
			transform: translate3d(200%, 0, 0);
		}
	}
</style>

<template>
<div>
	<div id="loader" class="pageload-overlay">
		<div class="logo--load">
		<img src="/images/logo.png" class="center-block" style=" width: 250px;">
		<!-- <p>{{ $t('loading_text') }}</p> -->
		</div>
	</div>
	<div class="overlay">
		<div class="revealer"></div>
		<div class="revealer"></div>
	</div>
</div>
</template>

<script>
import waitForImages from 'jquery.waitforimages'
export default {
  methods: {
    loadingScreen (event) {
		var fakeLoad, gray, green, incLoad, orange, percentage;
		percentage = 0;

		gray = $('.loading');
		orange = $('span');
		green = $('.loaded');

		$('body').waitForImages().done(function() {

		 function whichAnimationEvent(){
		    var t,
		        el = document.createElement("fakeelement");

		    var animations = {
		      "animation"      : "animationend",
		      "OAnimation"     : "oAnimationEnd",
		      "MozAnimation"   : "animationend",
		      "WebkitAnimation": "webkitAnimationEnd"
		    }

		    for (t in animations){
		      if (el.style[t] !== undefined){
		        return animations[t];
		      }
		    }
		  }

		  var animationEvent = whichAnimationEvent();
		      // After animation ends
		      $( '.overlay .revealer:nth-child(1)' ).addClass('slideIn-1');
		      $( '.overlay .revealer:nth-child(2)' ).addClass('slideIn-2');

		      // After animation ends
		      $('.overlay .revealer:nth-child(1)').one(animationEvent,
		              function(event) {
		        $( '.overlay .revealer:nth-child(1)' ).removeClass('slideIn-1');
		        $( '.overlay .revealer:nth-child(2)' ).removeClass('slideIn-2');
		      });
			setTimeout(function(){
				$('.pageload-overlay').css('display','none');
			}, 900);
		});
    }
  },
  created () {
    window.addEventListener('load', this.loadingScreen);
  },
  destroyed () {
    window.removeEventListener('load', this.loadingScreen);
  }
}
</script>