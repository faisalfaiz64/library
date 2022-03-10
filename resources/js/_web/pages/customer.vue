<template>
	<div>
		<header>
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-12 mx-auto">
						<!-- Welcome <div> -->
						<div class="text-center">
							<img  class="login-heading mt-4 mb-5" src="/images/logo.png"/>
						</div>
					</div>
				</div>
			</div>
				<button v-if="step == 2" v-hammer:tap="prevStep" class="btn back"><font-awesome-icon :icon="['fas', 'angle-left']" /> Back</button>
			<locale />
		</header>

		<section id="survey" v-if="step < 4">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-12 mx-auto mt-2">
						<transition name="fade" mode="out-in">
							<survey :bus="bus" ref="survey-child"></survey>
						</transition>
					</div>
				</div>
			</div>
		</section>

		<section class="thank_you" v-if="step == 4">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-12 mx-auto mt-2">
						<img src="/images/thank_you@2x.png"/>
						<div class="col-md-7 col-lg-5 mx-auto">
							<div class="text-center mb-5 mt-5">
								<h2>Thank you!</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Survey from '~/components/survey/customer/Survey'
import Locale from '~/components/Locale'
import Cookies from 'js-cookie'

export default {
  name: 'index',
  scrollToTop: true,
  layout: 'survey',
  components: {
    Survey,
    Locale
  },
  metaInfo () {
    return { title: this.$t('welcome') }
  },
  data: () => ({
	title: window.config.appName,
	bus: new Vue(),
	surveys: [],
	syncSuccess: false
  }),

  computed: {
    ...mapGetters({
		locale: 'lang/locale',
		locales: 'lang/locales',
		step: 'wizard/step'
    })
  },

  methods: {
	prevStep(){
		console.log(this.step);
		this.bus.$emit('prev');
	},
	getMessage: function (key) {
		return this.$t(key)
	},
  },
  async created() {
	let _this = this;
    var iOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent));

	if(iOSSafari){$('#home').css('height', '89vh');}

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

    if(Cookies.get('_cusubmit') == _this.$route.params.slug){
		_this.$store.dispatch('wizard/saveStep', {step: 4});
    }

  }
}
</script>

<style lang="scss">


</style>
