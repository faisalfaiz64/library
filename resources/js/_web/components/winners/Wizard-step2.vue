<template>
	<div class="d-flex justify-content-center align-items-center w-100" style="flex-direction: column;">
			<input type="text" style="display: none;" />
			<div class="row">
				<div class="col-12 p-0">
				<h5>{{ $t('step_2_title') }}</h5>
					<div class="field" :class="{ 'is-invalid': errors.code }" >
					    <label for="verifycode"><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sms"></use></svg></label>
					    <input type="text" :placeholder="$t('verifycode')" ref="verifycode" name="verifycode" v-model="form.verifycode" v-on:keydown.enter.prevent>
						<div v-if="errors.code" class="invalid-feedback">{{ errors.code[0] }}</div>
				  </div>
				   <label class="form-row text-center" style="font-size: 1rem;background: transparent!important;border: 0;outline: 0;box-shadow: none;color: #212529;">
			         {{ $t('verifycode_instruction') }}
			      </label>
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
	import { mapGetters } from 'vuex'

export default {
	data(){
    return {
        form: {
	      verifycode: null
	    },
	    notyf: new Notyf({delay:2000}),
	    errors: [],
	    isDisabled: false
	    }
    },
    computed: mapGetters({
		file: 'wizard/file',
		mobile: 'wizard/mobile'
	}),
    methods: {
        nextStep() {
	        var self = this;
	        this.isDisabled = true;
	        this.$parent.isLoading = true;
            axios.post('api/verify/code', {code: self.form.verifycode, mobile: this.mobile}).then(response => {
	            if(response.data == "exist"){
			        this.$parent.next(4);
	            }else{
			        this.$parent.next(3);
	            }
            })
            .catch(error => {
	            this.isDisabled = false;
		        this.$parent.isLoading = false;
		        if(error.response.data.errors.code){
					this.$toast.error(this.$t(error.response.data.errors.code));
		        }
		        if(error.response.data.errors.mobile){
					this.$toast.error(this.$t(error.response.data.errors.mobile));
		        }
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

<style lang="scss" scoped>
$core-blue: #086b94;

/* COLOR ASSIGNMENTS */
$primary: $core-blue;

/* MISC ASSIGNMENT */
$br: 4px;
$font--large: 26px;

	.form-row {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		background-color: #fff;
		display: block;
		border-bottom: 1px solid #272a2d;
		cursor: pointer;
		position: relative;
		font-size: 26px;
		color: #ffffff;
		font-size: 1rem;
		width: 100%;
		padding: 9px;
		margin: 0 auto;
		&:first-child {
			border-radius: $br $br 0 0;
		}
		&:last-child {
			border-bottom: 0 none;
			border-radius: 0 0 $br $br;
		}
	}

</style>