<template>
  <div id="app">
	<loading-screen/>
    <loading ref="loading"/>
	<transition name="fade" mode="out-in">
      <component v-if="layout" :is="layout"/>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'
import LoadingScreen from '~/components/LoadingScreen'
import axios from 'axios'
import { SurveyDAO } from '~/db/surveyDAO'

// Load layout components dynamically.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading,
    LoadingScreen
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default',
    onLine: navigator.onLine,
    showBackOnline: false,
    surveys: [],
	syncSuccess: false,
	syncInterval: null
  }),

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },

	watch: {
	    onLine(v) {
		    let _this = this;
	        if (v) {
	            _this.syncInterval = setInterval(() => {
		            _this.Sync();
	            }, 20000);
	        } else {
		        clearInterval( _this.syncInterval )
	        }
	    },
	},
	beforeDestroy() {
	    window.removeEventListener('online', this.updateOnlineStatus);
	    window.removeEventListener('offline', this.updateOnlineStatus);
	},

  mounted () {
    let _this = this;
    this.$loading = this.$refs.loading;
	window.addEventListener('online', this.updateOnlineStatus);
	window.addEventListener('offline', this.updateOnlineStatus);

	if(navigator.onLine){
		_this.syncInterval = setInterval(() => {
	        _this.Sync();
	    }, 20000);
	}
  },

  created() {
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0);
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    },
    updateOnlineStatus(e) {
        const {
            type
        } = e;
        this.onLine = type === 'online';
    },
    Sync(){
	    if(this.$route.name == 'index' || this.$route.name == 'thanks'){
		  var _this = this;
			SurveyDAO.getInstance().get().then(result =>{
				this.surveys = result;
				axios.post('api/v1/survey/sync', {sync: this.surveys}).then(response => {
					console.log('Calling SyncDelete');
					_this.SyncDelete();
				})
				.catch(error => {
					console.log(error);
// 					this.$toast.error('Nothing to sync');
				});
			});
	    }
	},
	SyncDelete(){
		SurveyDAO.getInstance().delete();
		console.log('SyncDelete');
// 		this.$toast.success('Synced successfully with the server');
	}
  }
}
</script>
