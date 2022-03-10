<template>
<div class="w-100">
	<loading-form :visible="isLoading"></loading-form>

	<form @submit.prevent>
		<div class="steps clearfix" v-if="step < 6">
		    <ul role="tablist">
				<li role="tab" :class="{ 'current': step < 3, 'done': step >= 3 }">
				    <span class="number">{{ $t('step_1') }}</span>
				    <svg viewBox="0 0 76 76" class="success-message__icon icon-checkmark" v-if="step >= 3">
					    <circle cx="38" cy="38" r="36"></circle>
					    <path fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.7,40.9l10.9,10.9l28.7-28.7" style="stroke-dashoffset: 0; stroke-dasharray: 56.0029;"></path>
					</svg>
				</li>
				<li role="tab" :class="{ 'current': step == 3 || step == 4, 'disabled': step < 4, 'done': step > 4 }">
				    <span class="number">{{ $t('step_2') }}</span>
				    <svg viewBox="0 0 76 76" class="success-message__icon icon-checkmark" v-if="step > 4">
					    <circle cx="38" cy="38" r="36"></circle>
					    <path fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M17.7,40.9l10.9,10.9l28.7-28.7" style="stroke-dashoffset: 0; stroke-dasharray: 56.0029;"></path>
					</svg>
				</li>
		    </ul>
		</div>

		<transition name="page" mode="out-in">
		    <component :is="stepComponent"/>
	    </transition>
	</form>


</div>
</template>

<script>
import LoadingForm from './LoadingForm'

export default {
  props: ["steps"],
  components: {
	LoadingForm
  },
  data: () => ({
	   step: 1,
	   totalsteps: 3,
	   isLoading: true,
	   n: null
   }),
  computed: {
    stepComponent() {
		this.step;
		return () => import(`./Wizard-step${this.step}.vue`);
    }
  },
  methods: {
	next(n) {
		if(this.step < this.totalsteps){
	      this.step = n;
	      this.$scrollTo("#participate");
		}
    }
  }
};
</script>

<style scoped>
.steps {
	position: relative;
    display: block;
    width: 100%;
    border-bottom: 1px #e8e7e7 solid;
    margin: 20px 0 0px;
    padding-bottom: 10px;
}
.steps .icon-checkmark{
	position: absolute;
    width: 28px;
    top: 0;
    margin: 0;
    padding: 0;
    right: 20px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
}

.steps .icon-checkmark circle {
    fill: #ffed00;
}

.steps .icon-checkmark path {
    stroke: #4baf50;
}

.steps ul {
    list-style: none !important;
    padding: 0;
    margin: 0;
    display: flex;
}
.steps > ul > li {
    float: left;
    position: relative;
}
.steps > ul > li {
    width: 100%;
}

.steps .disabled span, .steps .disabled span:hover, .steps .disabled span:active {
    background: #eee;
    color: #aaa;
    cursor: default;
}

.steps span{
	display: block;
    width: auto;
    margin: 0 0.5em 0.5em;
    padding: 1em 1em;
    text-decoration: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

.steps .current span {
    background: #028d34;
    color: #ffffff;
}

.done span, .steps .done span:hover, .steps .done span:active {
    background: #4CAF50;
    color: #fff;
}

/* ol is flex-container */
.tunnel {
  counter-reset: progress;
  padding-left: 0;
  display: flex;
  margin-bottom: 10%;
}

/* li is flex-item and flex-container */
.tunnel li {
  display: flex;
  align-items: center;
  list-style-type: none;
  counter-increment: progress;
  font-size: 2em;
  position: relative;
}

/* everyone flexible except first */
.tunnel li+li {
  flex: 1 0 auto;
}

/* hide further steps */
.tunnel .is-current ~ li {
  opacity: .3;
}

.tunnel li span{
	position: relative;
}

.tunnel .is-current span::before{
    content: 'CURRENT STEP';
    position: absolute;
    bottom: -85px;
    display: block;
    left: -25px;
    right: 0;
    margin: 0 auto;
    white-space: nowrap;
    text-align: center;
    font-family: 'Ara Hamah 1964 B';
    text-shadow: 1px 1px 0 #e80929, -1px -1px 0 #e80929, 1px -1px 0 #e80929, -1px 1px 0 #e80929, 1px 1px 0 #e80929;
}

/* show counter numbers */
.tunnel li::after {
  content: counter(progress);
  display: inline-block;
  box-sizing: border-box;
  width: 2em;
  height: 2em;
  line-height: 2em;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  color: #eb0b29;
}


/* show progress bars except for first */
.tunnel li+li::before {
  content: "";
  flex: 1;
  display: block; /* IE10 fix */
  border-bottom: 2px solid #fff;
}
.tunnel .is-current ~ li::before {
  border-bottom-style: dotted;
}
</style>