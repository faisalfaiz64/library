<template>
<div>
<!--

	<a href="#" class="btn btn-lg btn-primary" @click.prevent="logoutUser" style="position: fixed;bottom: 1em;z-index: 99;left: 2em;width: 100px;padding: 2px;font-size: 1em;background-color: rgb(111, 111, 111) !important;">Log out</a>
-->
<!--
	<a href="#" class="btn btn-lg btn-primary" style="position: fixed;
    bottom: 1em;
    left: 1em;
    width: 100px;
    font-size: 1em;
    background-color: #6f6f6f!important;z-index:1000"
	v-hammer:tap="Sync">SYNC</a>
-->
	<header>
		<div class="container">
		    <div class="row" v-if="step > 1">
		        <div class="col-md-12 col-lg-12 mx-auto">
		            <div class="text-center">
		                <img  class="login-heading mt-4 mb-5" src="/images/logo.png"/>
		            </div>
		        </div>
		    </div>
		</div>
		  <button v-if="step == 3" v-hammer:tap="prevStep" class="btn back"><font-awesome-icon :icon="['fas', 'angle-left']" /> {{ $t('back') }} </button>
		<locale />
	</header>

	<section id="survey">
		<div class="container-fluid">
		    <div class="row">
				<transition name="fade" mode="out-in">
					<survey :bus="bus" ref="survey-child"></survey>
				</transition>
		    </div>
		</div>
	</section>
</div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
import Survey from '~/components/Survey'
import Locale from '~/components/Locale'
import { SurveyDAO } from '~/db/surveyDAO'

export default {
  name: 'index',
  scrollToTop: true,
  layout: 'survey',
  middleware: 'check-auth',
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
	    authenticated: 'auth/check',
	    user: 'auth/user',
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
	async logoutUser () {
      // Log out the user.
      await this.$store.dispatch('auth/logoutUser')
      // Redirect to login.
      this.$router.push({ name: 'login' })
    },

  },
  async created() {
    var iOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent));

	if(iOSSafari){$('#home').css('height', '89vh');}

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>

<style lang="scss">


</style>
