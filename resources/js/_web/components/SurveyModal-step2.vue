<template>

	<div class="feedback-modal">
		<button @click="ProductClose" class="close-btn"><img src="/images/close@2x.png"/></button>
		<h1>{{ $t('feedback') }}</h1>
		<div class="text-block">
			<textarea v-model="form.feedback" :placeholder="$t('write_review')" cols="6"></textarea>
		</div>
		<div class="col-md-12 col-lg-8 mx-auto mb-4 mt-5">
			<div class="text-center">
				<button class="btn outline mr-3" v-if="form.feedback == ''" @click="ThankYou">{{ $t('skip') }}</button>
				<button class="btn mr-3" v-if="form.feedback.length > 0" @click="ThankYou">{{ $t('submit') }}</button>
			</div>
		</div>
	</div>

</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
	import { mapGetters } from 'vuex'
	import { SurveyDAO } from '~/db/surveyDAO';
	import { Survey } from '~/db/models/survey';

export default {
	data(){
    return {
        form: {
			feedback: ''
		},
		errors: [],
		isDisabled: false,
		survey: new Survey()
	    }
	},
	computed: mapGetters({
		fullname: 'wizard/fullname',
		phone: 'wizard/phone',
		gender: 'wizard/gender',
		product: 'wizard/product',
		product_status: 'wizard/product_status',
		feedback: 'wizard/feedback',
		step: 'wizard/step'
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
		this.survey.product = this.product;
		this.survey.timestamp = Date.now();
		await SurveyDAO.getInstance().getBranch().then(result =>{
			_this.survey.branch = result[0].branch_id;
		});
		await SurveyDAO.getInstance().getProducts().then(result =>{
			_this.survey.survey = result[0].survey_id;
		});
		if(this.surveyID == null){
			SurveyDAO.getInstance().save(this.survey).catch(error => console.error(error));
			console.log(_this.survey.branch + ' saved');
		} else {
			SurveyDAO.getInstance().update(this.surveyID, this.survey).catch(error => console.error(error));
		}

		this.$router.push({ name: 'thanks' })
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