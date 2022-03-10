<template>
<div>
	<!-- <a href="#" class="btn btn-lg btn-primary" @click.prevent="logoutUser" style="position: fixed;
    bottom: 1em;
    left: 1em;
    width: 100px;
    font-size: 1em;
    background-color: #6f6f6f!important;">Logout</a> -->
	<header>
		<div class="container">
		    <div class="row">
		        <div class="col-md-12 col-lg-12 mx-auto">
		            <div class="text-center">
		                <img  class="login-heading mt-4 mb-5" src="images/logo.png"/>
		            </div>
		        </div>
		    </div>
		</div>
		<locale />
	</header>


<section class="thank_you">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-12 mx-auto mt-2">
				<img src="images/thank_you@2x.png"/>
				<div class="col-md-7 col-lg-5 mx-auto">
					<div class="text-center mb-5 mt-5">
						<h2>{{ $t('thank_you') }}</h2>
					</div>
				</div>
<!-- 				<button class="btn mr-3 mt-5" @click="Restart()">Restart</button> -->
			</div>
		</div>
	</div>
</section>


</div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Locale from '~/components/Locale'

export default {
  name: 'thanks',
  scrollToTop: true,
  layout: 'survey',
  middleware: 'check-auth',
  components: {
    Locale
  },
  metaInfo () {
    return { title: this.$t('welcome') }
  },
  data: () => ({
	title: window.config.appName
  }),

  computed: {
    ...mapGetters({
	    authenticated: 'auth/check',
	    user: 'auth/user',
	    locale: 'lang/locale',
		locales: 'lang/locales',
		fullname: 'wizard/fullname',
		phone: 'wizard/phone',
		gender: 'wizard/gender',
		product: 'wizard/product',
		product_status: 'wizard/product_status',
		feedback: 'wizard/feedback'
	})
  },
  methods: {
	Restart(){
		this.$router.push({ name: 'index' });
	}
  },
  mounted() {
	console.log(this.surveyID);
	this.$store.dispatch('wizard/saveProductStatus', {product_status: false});
	this.$store.dispatch('wizard/saveProduct', {product: null});
	this.$store.dispatch('wizard/saveFullname', {fullname: null});
	this.$store.dispatch('wizard/savePhone', {phone: null});
	this.$store.dispatch('wizard/saveGender', {gender: null});
	this.$store.dispatch('wizard/saveFeedback', {feedback: null});
  },
  async created() {
	let _this = this;
    var iOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent));

	if(iOSSafari){$('#home').css('height', '89vh');}

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	setTimeout(function () {
		_this.Restart();
	}, 5000)
  }
}
</script>