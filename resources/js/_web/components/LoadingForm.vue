<template>
	<transition name="fade">
		<div class="pax-loading-modal" v-if="visible">
			<div class="pax-loading-modal__spinner"></div>
	 	</div>
	</transition>
</template>

<script>
export default {
	props: {
		visible: {
			type: Boolean,
			default: false
		}
	},
  data: () => ({
    isLoading: true
  }),
}
</script>

<style scoped>
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.pax-loading-modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 200;
}
.pax-loading-modal__spinner {
  position: relative;
  width: 80px;
  height: 80px;
  background-color: #fa780d;
  border-radius: 5px;
  transition: all .3s ease;
}
.pax-loading-modal__spinner:after {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  border: 3px solid #ffffff;
  content: "";
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  -webkit-animation: spin 0.4s linear infinite;
          animation: spin 0.4s linear infinite;
}
.fade-enter .pax-loading-modal__spinner, .fade-leave-to .pax-loading-modal__spinner {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
