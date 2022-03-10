const Login = () => import('~admin/pages/auth/login').then(m => m.default || m)
const register = () => import('~admin/pages/auth/register').then(m => m.default || m)
const Admin = () => import('~admin/pages/admin').then(m => m.default || m)
const Dashboard = () => import('~admin/pages/Dashboard').then(m => m.default || m)
const Books = () => import('~admin/pages/Books').then(m => m.default || m)
const BookCreate = () => import('~admin/pages/BookCreate').then(m => m.default || m)

export default [
 
  { path: '/register', name: 'register', component: register },
  { path: '/login', name: 'login', component: Login },
  { path: '/',
  component: Admin,
    children: [
      { path: '', redirect: '/dashboard' },
      { path: 'dashboard',  name: 'dashboard', component: Dashboard },
      { path: 'books',  name: 'books', component: Books },
      { path: 'book/create',  name: 'book.create', component: BookCreate },
    ] }
]
