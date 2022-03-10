const Login = () => import('~admin/pages/auth/login').then(m => m.default || m)
const register = () => import('~admin/pages/auth/register').then(m => m.default || m)
const Admin = () => import('~admin/pages/admin').then(m => m.default || m)
const Dashboard = () => import('~admin/pages/Dashboard').then(m => m.default || m)


export default [
  { path: '*', redirect: '/dashboard' },
  { path: '/register', name: 'register', component: register },
  { path: '/login', name: 'login', component: Login },
  { path: '/',
  component: Admin,
    children: [
      { path: '', redirect: '/admin/dashboard' },
      { path: 'dashboard',  name: 'dashboard', component: Dashboard },
    ] }
]
