<template>
	<div class="d-flex justify-content-center align-items-center w-100" style="flex-direction: column;">
			<input type="text" style="display: none;" />
			<div class="row">
				<div class="col-12 p-0">
					<h5>{{ $t('Login to check your gift') }}</h5>
					<div class="field" :class="{ 'is-invalid': errors.mobile }" >
					    <label for="username"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phone"></use></svg></label>
					    <input type="text" :placeholder="$t('form_mobile')" ref="verifymobile" name="verifymobile" v-model="form.verifymobile" v-on:keydown.enter.prevent>
						<div v-if="errors.mobile" class="invalid-feedback">{{ errors.mobile[0] }}</div>
				  </div>
				</div>
				<button v-hammer:tap="nextStep" class="btn button mt-5" :disabled="isDisabled">{{ $t('next') }}</button>
			</div>
	</div>
</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
	import swal from 'sweetalert2'
	import notyf from 'notyf'

export default {

	data(){
    return {
        form: {
	      verifymobile: null
	    },
	    notyf: new Notyf({delay:2000}),
	    errors: [],
	    isDisabled: false
	    }
    },
    methods: {
        nextStep() {
	        var self = this;
	        this.isDisabled = true;
	        this.$parent.isLoading = true;
            axios.post('api/verify/number', {mobile: this.form.verifymobile, locale: this.$i18n.locale}).then(response => {
				this.$store.dispatch('wizard/saveMobile', {mobile: this.form.verifymobile});
	            this.$ga.event('Registration', 'Next', 'Step 1', 1);
		        this.$parent.next(2);
				this.$toast.success(this.$t('verification_sms'));
            })
            .catch(error => {
	            this.isDisabled = false;
		        this.$parent.isLoading = false;
				this.$toast.error(this.$t(error.response.data.errors.mobile));
                this.errors = error.response.data.errors;
                this.$scrollTo("#participate");
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