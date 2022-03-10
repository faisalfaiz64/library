<template>
		<div :class="locales[locale]">
			<a class="lang" href="@" v-for="(value, key) in locales" :key="key" @click.prevent="setLocale(key)" :id="value">
		      <span v-if="value == 'EN'">
				<button class="btn outline lang"><font-awesome-icon :icon="['fas', 'globe']" /> English</button>
		      </span>

		      <span v-else-if="value === 'AR'">
				<button class="btn outline lang">العربية <font-awesome-icon :icon="['fas', 'globe']" /></button>
		      </span>
		    </a>
		</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
	    this.$ga.event('Language', 'Changed', locale, 1);
        loadMessages(locale)
        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>