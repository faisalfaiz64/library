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
import Form from 'vform'
import { SurveyDAO } from '~/db/surveyDAO';
import { Survey } from '~/db/models/survey';
import { mapGetters } from 'vuex'
import axios from 'axios'
import FormError from '~/components/FormError'

export default {
	layout: 'surveylogin',
  middleware: 'guest',

  computed: {
    ...mapGetters({
	    user: 'auth/user',
    })
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email_username: '',
      password: ''
    }),
    remember: false,
    survey: new Survey(),
    slug: ''
  }),

  methods: {
    async login () {
      let _this = this;
      // Submit the form.
      const { data } = await this.form.post('/api/v1/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the admin.
      await this.$store.dispatch('auth/fetchUser')

      SurveyDAO.getInstance().saveBranch(this.user['branch_id']).catch(error => console.error(error));

      await this.$store.dispatch('auth/fetchUser')

      await axios.get('api/v1/survey/get').then(response => {
        _this.survey.survey_id = response.data.id;
        SurveyDAO.getInstance().deleteProducts();
        response.data.products.forEach(function(product) {
            _this.survey.code = product.code;
            _this.survey.product_id = product.id;
            _this.survey.name = product.name;
            _this.survey.image = product.image;
            SurveyDAO.getInstance().saveProducts(_this.survey).catch(error => console.error(error));
        });
			})
			.catch(error => {
				console.log(error);
			});

      // Redirect home.
      // const survey = _this.slug
      // this.$router.push({ path: `/survey/${survey}` })
      await this.$router.push({ name: 'index' })

    }
  }
}
</script>
