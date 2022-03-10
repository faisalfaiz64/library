<template>
	<!-- BEGIN login -->
	<div class="login">
		<!-- BEGIN login-content -->
		<div class="login-content">
			<form @submit.prevent="login" @keydown="form.onKeydown($event)" name="login_form">
				<h1 class="text-center">Sign In</h1>
				<div class="text-muted text-center mb-4">
					For your protection, please verify your identity.
				</div>

				<b-form-group label="Email">
					<b-input :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.email" size="lg" class="fs-15px" autocomplete="email" placeholder="username@email.com"></b-input>
					<has-error class="d-block" :form="form" field="email"/>
				</b-form-group>

				<b-form-group>
					<div class="d-flex">
						<label>Password</label>
					</div>
					<b-input :class="{ 'is-invalid': form.errors.has('email') }" v-model="form.password" type="password" size="lg" autocomplete="current-password" class="fs-15px" placeholder="Enter your password"></b-input>
				</b-form-group>

				<b-form-group>
					<b-form-checkbox v-model="remember" name="remember" id="rememberMe">Remember me</b-form-checkbox>
					
				</b-form-group>

				<button :loading="form.busy" type="submit" class="btn btn-primary btn-lg d-block w-100 fw-500 mb-3">{{ $t('login') }}</button>
			</form>
			<router-link :to="{ name: 'register'}">
              register
              </router-link>
		</div>
		<!-- END login-content -->
	</div>
	<!-- END login -->
</template>

<script>
import Form from 'vform'
import AppOptions from '~admin/config/AppOptions'

export default {
   middleware: 'guest',

  metaInfo () {
    return { title: this.$t('login') }
  },
  data() {
		return {
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
    }
  },
  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/apiadmin/v1/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the admin.
      await this.$store.dispatch('auth/fetchAdmin')

      // Redirect home.
      this.$router.push({ name: 'admin.dashboard' })

      return console.log('Done');
    }
  },
  mounted() {
			AppOptions.appWithoutSidebar = true;
			AppOptions.appWithoutHeader = true;
			AppOptions.appContentFullWidth = true;
		},
		beforeRouteLeave (to, from, next) {
			AppOptions.appWithoutSidebar = false;
			AppOptions.appWithoutHeader = false;
			AppOptions.appContentFullWidth = false;
			next();
		}
}
</script>
