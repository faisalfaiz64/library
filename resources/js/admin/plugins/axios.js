import axios from 'axios'
import store from '~admin/store'
import router from '~admin/router'
import swal from 'sweetalert2'
import i18n from '~admin/plugins/i18n'

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

axios.interceptors.request.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response);
}); 

// Response interceptor
// axios.interceptors.response.use(
//   response => response,
//   error => {
//     // You can extract message from your API, if you want
//     const message = 'Something went wrong'
//     iziToast.show({
// 	    title: 'Ups!!',
// 	    message: `${message}`,
// 		variant: 'error'
// 	});

//     return Promise.reject(error)
//   },
// )