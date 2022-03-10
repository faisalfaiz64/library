<template>
	<div id="header" class="app-header">
		<!-- BEGIN mobile-toggler -->
		<div class="mobile-toggler">
			<button type="button" class="menu-toggler" v-on:click="toggleAppSidebarMobile">
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
		</div>
		<!-- END mobile-toggler -->

		<!-- BEGIN brand -->
		<div class="brand">
			<div class="desktop-toggler">
				<button type="button" class="menu-toggler" v-on:click="toggleAppSidebarMinify">
					<span class="bar"></span>
					<span class="bar"></span>
				</button>
			</div>

			<a href="#" class="brand-logo">
				<!-- <img src="/assets/img/logo.png" alt="" /> -->
			</a>
		</div>
		<!-- END brand -->

		<!-- BEGIN menu -->
		<div class="menu">
			<b-dropdown style="margin: 0 0 0 auto;" class="menu-item" right toggle-tag="a" variant="link" :no-caret="true" toggle-class="menu-link border-0">
				<template v-slot:button-content>
					<div class="menu-img online">
						<div class="d-flex align-items-center justify-content-center w-100 h-100 bg-gray-800 text-gray-300 rounded-circle overflow-hidden">
                            <i class="fa fa-user fa-2x mb-n3"></i>
                        </div>
					</div>
					<div class="menu-text" v-if="user">{{ user.email }}</div>
				</template>
				<b-dropdown-item link-class="d-flex align-items-center" href="/admin/settings">
					Setting <i class="fa fa-wrench fa-fw ml-auto text-gray-400 f-s-16"></i>
				</b-dropdown-item>
				<b-dropdown-divider />
				<b-dropdown-item link-class="d-flex align-items-center" href="#" @click.prevent="logoutUser">
					Log Out <i class="fa fa-toggle-off fa-fw ml-auto text-gray-400 f-s-16"></i>
				</b-dropdown-item>
			</b-dropdown>
		</div>
		<!-- END menu -->
	</div>
</template>

<script>
import AppOptions from '../config/AppOptions.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
		return {
			appOptions: AppOptions,
			notificationData: []
		}
  },
  computed: mapGetters({
    authenticated: 'auth/check',
    user: 'auth/user',
  }),
	methods: {
		async logoutUser () {
		// Log out the user.
		await this.$store.dispatch('auth/logoutAdmin')
		// Redirect to login.
		this.$router.push({ name: 'login' })
		},
		toggleAppSidebarMobile() {
			this.appOptions.appSidebarMobileToggled = !this.appOptions.appSidebarMobileToggled;
		},
		toggleAppSidebarMinify() {
			this.appOptions.appSidebarMinified = !this.appOptions.appSidebarMinified;
		},
		checkForm: function(e) {
			e.preventDefault();
			this.$router.push({ path: '/extra/search' })
		}
	}
}
</script>
