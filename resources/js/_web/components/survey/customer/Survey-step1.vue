<template>
	<div class="row mt-2">
        <div class="col-md-6 col-lg-6 mx-auto">
			<div class="text-center mb-4">
				<h2>Personal Detail</h2>
			</div>
			<div class="form-label-group">
	            <label for="inputFullname">Full Name</label>
	            <input type="text" id="inputFullname" class="form-control" v-model="survey.fullname" required autofocus>
	        </div>
	        <!-- Password Form-->
	        <div class="form-label-group">
	            <label for="inputPhone">Phone Number</label>
	            <input type="tel" pattern="[0-9]*" id="inputPhone" class="form-control" v-model="survey.phone" novalidate>
	        </div>
	         <div class="form-label-group">
	            <label for="inputPassword">Your Gender</label>
		         <div class="d-flex">
				    <input class="hidden radio-label" type="radio" name="accept-offers" id="yes-button" value="male" v-model="survey.gender"/>
				    <label class="button-label mr-5" for="yes-button">
				      <h1><svg xmlns="http://www.w3.org/2000/svg" width="39.94" height="39.94" viewBox="0 0 39.94 39.94">
				  <path id="male" d="M39.919,1.45a1.648,1.648,0,0,0-.1-.411.051.051,0,0,1,0-.012l0,0a1.694,1.694,0,0,0-.225-.375c-.022-.027-.043-.054-.067-.08A1.7,1.7,0,0,0,39.2.282L39.191.276A1.639,1.639,0,0,0,38.813.1c-.033-.012-.066-.022-.1-.031A1.659,1.659,0,0,0,38.276,0H26.627a1.664,1.664,0,0,0,0,3.328h7.631l-9.933,9.933a14.987,14.987,0,1,0,2.353,2.354l9.933-9.933v7.632a1.664,1.664,0,1,0,3.328,0V1.664c0-.035-.008-.068-.01-.1s-.007-.075-.011-.112ZM14.978,36.612A11.656,11.656,0,1,1,26.627,24.963,11.662,11.662,0,0,1,14.978,36.612Zm0,0" transform="translate(0)" />
				</svg> Male</h1>
				    </label>
				    <input class="hidden radio-label" type="radio" name="accept-offers" id="no-button" value="female" v-model="survey.gender"/>
				    <label class="button-label" for="no-button">
				      <h1><svg height="40.295" viewBox="0 0 26.759 40.295" width="26.759" xmlns="http://www.w3.org/2000/svg"><path d="m108.844 22.837a13.4 13.4 0 1 0 -11.044 3.82v4.48h-3.146a1.574 1.574 0 1 0 0 3.149h3.146v4.434a1.575 1.575 0 0 0 3.15 0v-4.434h3.15a1.574 1.574 0 1 0 0-3.149h-3.15v-4.48a13.322 13.322 0 0 0 7.894-3.82zm-16.7-2.226a10.234 10.234 0 1 1 14.476 0 10.242 10.242 0 0 1 -14.479-.001z" transform="translate(-85.999)"/></svg> Female</h1>
				    </label>
		         </div>
			</div>
			<div class="text-center mt-5">
				<button v-hammer:tap="nextStep" class="btn button" :disabled="isDisabled"><font-awesome-icon v-if="this.$i18n.locale === 'ar'" :icon="['fas', 'angle-left']" /> {{ $t('next') }} <font-awesome-icon v-if="this.$i18n.locale === 'en'" :icon="['fas', 'angle-right']" /></button>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
	import { mapGetters } from 'vuex'

export default {
	data(){
    return {
	    errors: [],
		isDisabled: false,
		survey: []
	    }
	},
	computed: mapGetters({
		fullname: 'wizard/fullname',
		phone: 'wizard/phone',
		gender: 'wizard/gender'
	}),
    methods: {
		getFormState() {
          this.survey.fullname = this.fullname;
          this.survey.phone = this.phone;
          this.survey.gender = this.gender;
		},
        nextStep() {
	        var self = this;
	        // this.isDisabled = true;
			// this.$parent.isLoading = true;

			switch(false) {
			case !!this.survey.fullname:
				this.$toast.error('Full Name is Required');
				// this.$parent.isLoading = false;
				break;
			case !!this.survey.phone:
				this.$toast.error('Phone Number is Required');
				// this.$parent.isLoading = false;
				break;
			case !!this.survey.gender:
				this.$toast.error('Gender is Required');
				// this.$parent.isLoading = false;
				break;
			default:
				this.SaveSurvey();
			}
		},
		SaveSurvey(){
			this.$store.dispatch('wizard/saveFullname', {fullname: this.survey.fullname});
			this.$store.dispatch('wizard/savePhone', {phone: this.survey.phone});
			this.$store.dispatch('wizard/saveGender', {gender: this.survey.gender});
			this.$parent.next(2);
		}
	},
    created() {
		this.getFormState();
	    var _this = this;
		_this.$parent.isLoading = false;
	    setTimeout(function () {
		    // _this.$parent.isLoading = false;
		}, 500)
    }
}
</script>