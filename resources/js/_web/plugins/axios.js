import axios from 'axios'
import store from '~/store'
import router from '~/router'
import swal from 'sweetalert2'
import i18n from '~/plugins/i18n'
import iziToast from 'izitoast'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
// Request interceptor

axios.interceptors.request.use(request => {

	const token = store.getters['auth/token']
	if (token) {
		request.headers.common['Authorization'] = `Bearer ${token}`
	}

	const locale = store.getters['lang/locale']
	if (locale) {
		request.headers.common['Accept-Language'] = locale
	}

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

// Response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    // You can extract message from your API, if you want
    const message = error.response.data.message;
    const { status } = error.response;
    if (status === 401){
      iziToast.error({
        title: 'Error Code: 401',
        message: 'Something went wrong, Please contact the technical team.',
        variant: 'error',
        position: 'bottomRight'
    });
  }
  if (status === 500){
    iziToast.error({
      title: 'Error Code: 500',
      message: 'Something went wrong, Please contact the technical team.',
      variant: 'error',
      position: 'bottomRight'
    });
  }

  if (status === 422 && error.response.config.url == '/api/v1/login'){
    iziToast.error({
      title: 'Error Code: 422',
      message: 'The given data was invalid.',
      variant: 'error',
      position: 'bottomRight'
    });
  }

    return Promise.reject(error)
  },
)
/*
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    Vue.prototype.$toast.error('500', 'Whoops!');
  }

  if (status === 401 && store.getters['auth/check']) {
    Vue.prototype.$toast.error('401', 'Whoops!');
  }

  if (status === 422 && store.getters['auth/check']) {
    Vue.prototype.$toast.error('422', 'Whoops!');
  }

  return Promise.reject(error)
})
*/
