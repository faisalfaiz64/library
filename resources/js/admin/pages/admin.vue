<template>
    <transition name="fade" mode="out-in">
        <router-view/>
	</transition>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'admin',
  layout: 'admin',
  middleware: 'check-auth',

  metaInfo () {
    return { title: 'Admin' }
  },

  computed:
	  mapGetters({
	    authenticated: 'auth/check',
	    user: 'auth/user'
	  })
}
</script>

<style lang="scss" scoped>
.pax-loading-modal {
	position: fixed!important;
    z-index: 2000000000!important;
}
</style>