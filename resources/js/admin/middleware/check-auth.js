import store from '~admin/store'

export default async (to, from, next) => {

	if (!store.getters['auth/check'] && store.getters['auth/token']) {
	try {
		  await store.dispatch('auth/fetchAdmin')
		} catch (e) { }
	}

	if (!store.getters['auth/check']) {
	    next({ name: 'login' })
	}
  next()
}
