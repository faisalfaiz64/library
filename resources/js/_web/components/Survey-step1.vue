<template>
	<section class="login" style="position: fixed;width: 100%;top: 0;">
	 <div class="container-fluid">
        <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6" style="flex-flow: column;align-items: center;justify-content: center;background: #191919;">
	            <div class="custom-padding-left text-left mb-2">
                    <h2>{{ $t('step1_title_qr') }} </h2>
                    <p>{{ $t('step1_subtitle_qr') }}</p>
                </div>
				<vue-qr style="width: 100%;max-width: 350px;" backgroundDimming="rgba(0, 0, 0, 0.1)" colorLight="#E6BF00" colorDark="#1c1c1c" :dotScale="0.28" :margin="5" :correctLevel="3" backgroundColor="#1c1c1c" bgSrc="/images/logo_qr.jpg" :text="origin + '/survey/' + surveyActive.slug"  :size="350"></vue-qr>

            </div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <!-- Welcome <div> -->
                                <div class="text-center">
                                    <img  class="login-heading mb-5" src="images/logo.png"/>
                                </div>

                                <div class="custom-padding-left text-center mb-5 mt-5">
				                    <h2>{{ $t('step1_title_enter') }} </h2>
				                    <p>{{ $t('step1_subtitle_enter') }}</p>
                                </div>

				                <div class="custom-padding-left text-center mt-5">
				    				<button class="btn mr-3" @click="nextStep()">{{ $t('step1_cta_enter') }}</button>
				                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import VueQr from 'vue-qr'

export default {
	components: {
		VueQr
	},
	data(){
		return {
		    errors: [],
			isDisabled: false,
			surveyActive: [],
			origin: window.location.origin
		    }
		},
		methods: {
		    nextStep() {
				this.$parent.next(2);
			},
		},
		async created() {
			let _this = this;
			await axios.get('api/v1/survey/get').then(response => {
				_this.surveyActive = response.data;
			})
			.catch(error => {
				console.log(error);
			});
			_this.$parent.isLoading = false;
		    setTimeout(function () {
			    // _this.$parent.isLoading = false;
			}, 500)
		}
	}
</script>