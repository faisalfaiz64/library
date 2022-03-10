const CustomerSurvey = () => import('~/pages/customer').then(m => m.default || m)
const EmployeeSurvey = () => import('~/pages/employee').then(m => m.default || m)
const Index = () => import('~/pages/index').then(m => m.default || m)
const LoginPage = () => import('~/pages/login').then(m => m.default || m)
const ThanksPage = () => import('~/pages/thanks').then(m => m.default || m)

export default [
  { path: '/survey/:slug', name: 'customersurvey', component: CustomerSurvey},
  { path: '/employee-survey', name: 'employeesurvey', component: EmployeeSurvey},
  { path: '/', name: 'index', component: Index},
  { path: '/login', name: 'login', component: LoginPage},
  { path: '/thankyou', name: 'thanks', component: ThanksPage},
  { path: '*', redirect: '/login' }
]
