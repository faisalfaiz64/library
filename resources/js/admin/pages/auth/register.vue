<template>
	<!-- BEGIN login -->
	<div class="login">
		<!-- BEGIN login-content -->
		<div class="login-content">
			<form @submit.prevent="login" @keydown="form.onKeydown($event)" name="login_form">
				<h1 class="text-center">Registration </h1>

                <b-form-group label="Name">
					<b-input :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name" size="lg" class="fs-15px" autocomplete="name" placeholder="Enter your name"></b-input>
					<has-error class="d-block" :form="form" field="name"/>
				</b-form-group>

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
                <b-form-group label="Date of birth">
					<b-input :class="{ 'is-invalid': form.errors.has('date_of_birth') }" v-model="form.date_of_birth" size="lg" class="fs-15px" autocomplete="DOB" placeholder="Enter your DOB"></b-input>
					<has-error class="d-block" :form="form" field="date_of_birth"/>
				</b-form-group>
				<button :loading="form.busy" type="submit" class="btn btn-primary btn-lg d-block w-100 fw-500 mb-3">{{ $t('Register') }}</button>
			</form>
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
    formRegister: new Form({
      email: '',
      password: '',
      name: '',
      date_of_birth: ''
    }),
    form: new Form({
      email: '',
      password: '',
    }),

    }
  },
  methods: {
    async login () {
        //register
        const { data1 } = await this.form.post('/apiadmin/v1/register')
        console.log(data1)
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
