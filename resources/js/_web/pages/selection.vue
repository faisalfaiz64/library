<template>
<section class="login">

    <div class="container-fluid">
        <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"><div class="overlay"></div></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto">
                                <!-- Welcome <div> -->
                                <div class="text-center">
                                    <img  class="login-heading mb-5" src="images/logo.png"/>
                                </div>

                                <div class="custom-padding-left text-left">
                                    <h2>Log In</h2>
                                    <p>Welcome back to login account</p>
                                </div>
                                <!-- Login Form-->
                                  <form role="form" @submit.prevent="login" @keydown="form.onKeydown($event)">
                                  <!-- Email Form-->
                                    <div class="form-label-group" :class="{ 'has-danger': form.errors.has('email_username') }">
                                      <has-error class="d-block" :form="form" field="text"/>
                                        <label for="inputEmail">Email or Username</label>
                                        <input v-model="form.email_username" type="text" id="inputEmail" class="form-control" required autofocus>
                                    </div>
                                    <!-- Password Form-->
                                    <div class="form-label-group" :class="{ 'has-danger': form.errors.has('password') }">
                                        <has-error class="d-block" :form="form" field="password"/>
                                        <label for="inputPassword">Password</label>
                                        <input v-model="form.password" type="password" id="inputPassword" class="form-control" required>
                                    </div>
                                    <!-- Sign-in Button -->
                                  <v-button :loading="form.busy" class="btn btn-lg btn-primary btn-login mt-5 mb-2" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
                                    Login <font-awesome-icon :icon="['fas', 'angle-right']" />
                                  </v-button>
                                </form>
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
layout: 'surveylogin',
components: {
		VueQr
	},
	data(){
		return {
		    errors: [],
			isDisabled: false
		    }
		},
		methods: {
		    nextStep() {
				this.$parent.next(2);
			},
		},
		created() {
		    var _this = this;
			_this.$parent.isLoading = false;
		    setTimeout(function () {
			    // _this.$parent.isLoading = false;
			}, 500)
		}
	}
</script>
