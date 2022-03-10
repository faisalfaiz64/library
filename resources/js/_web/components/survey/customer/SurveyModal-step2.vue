<template>

	<div class="feedback-modal">
		<button @click="ProductClose" class="close-btn"><img src="/images/close@2x.png"/></button>
		<h1>Your Feedback</h1>
		<div class="text-block">
			<textarea v-model="form.feedback" placeholder="Write your review..." cols="6"></textarea>
		</div>
		<div class="col-md-12 col-lg-8 mx-auto mb-4 mt-5">
			<div class="text-center">
				<button class="btn outline mr-3" v-if="form.feedback == ''" @click="ThankYou">Skip</button>
				<button class="btn mr-3" v-if="form.feedback.length > 0" @click="ThankYou">Submit</button>
			</div>
		</div>
	</div>

</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
	import { mapGetters } from 'vuex'
	import Cookies from 'js-cookie'

export default {
	data(){
    return {
        form: {
			feedback: ''
		},
		errors: [],
		isDisabled: false,
		surveys: [],
		survey: {}
	    }
	},
	computed: mapGetters({
		fullname: 'wizard/fullname',
		phone: 'wizard/phone',
		gender: 'wizard/gender',
		product: 'wizard/product',
		product_status: 'wizard/product_status',
		feedback: 'wizard/feedback',
		step: 'wizard/step',
		surveyID: 'wizard/surveyID'
	}),
    methods: {
	ProductClose(){
		this.$store.dispatch('wizard/saveProductStatus', {product_status: false});
	},
	async ThankYou(){
		var _this = this;
		var aestTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Riyadh"});
		console.log('KSA time: '+ (new Date(aestTime)).toISOString())

		this.$store.dispatch('wizard/saveStep', {step: 1});
		this.$store.dispatch('wizard/saveFeedback', {feedback: this.survey.feedback});
		this.survey.fullname = this.fullname;
		this.survey.phone = this.phone;
		this.survey.gender = this.gender;
		this.survey.feedback = this.form.feedback;
		this.survey.product = this.product.id;
		this.survey.timestamp = Date.now();
		this.survey.branch = "NULL";
		this.survey.survey = this.surveyID;

		this.surveys.push(this.survey);


		await axios.post('/api/v1/survey/customer', {customer_survey: _this.surveys})
		.then(response => {
			console.log("Your survey was submitted, Don't worry ;-)");
			_this.$store.dispatch('wizard/saveProductStatus', {product_status: false});
			_this.$store.dispatch('wizard/saveProduct', {product: null});
			_this.$store.dispatch('wizard/saveFullname', {fullname: null});
			_this.$store.dispatch('wizard/savePhone', {phone: null});
			_this.$store.dispatch('wizard/saveGender', {gender: null});
			_this.$store.dispatch('wizard/saveFeedback', {feedback: null});
			_this.$store.dispatch('wizard/saveStep', {step: 4});
		    Cookies.set('_cusubmit', _this.$route.params.slug, { expires: 365 })
		})
		.catch(error => {
			console.log(error);
			this.$toast.error('Something went wrong, Please contact us on our social media');
		});
	}
    },
    created() {
		var _this = this;
		setTimeout(function () {
			_this.$parent.isLoading = false;
		}, 500)
    }
}
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}
</style>