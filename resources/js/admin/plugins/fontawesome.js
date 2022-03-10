import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'

import { } from '@fortawesome/fontawesome-free-regular/shakable.es'

import {
  faUser, faLock, faSignOutAlt, faCog, faPlayCircle
} from '@fortawesome/fontawesome-free-solid/shakable.es'

import {
  faGithub,faFacebook, faTwitter, faInstagram, faYoutube, faSnapchat
} from '@fortawesome/fontawesome-free-brands/shakable.es'

fontawesome.library.add(
  faUser, faLock, faSignOutAlt, faCog, faGithub, faFacebook, faTwitter, faInstagram, faYoutube, faSnapchat
)

Vue.component('fa', FontAwesomeIcon)
