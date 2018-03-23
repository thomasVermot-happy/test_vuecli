import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/form/index'
import Contact from '@/components/contact/index'
import ContactB from '@/components/contactb/index'
import UserView from '@/components/user/view'
import UserEdit from '@/components/user/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/contactb',
      name: 'ContactB',
      component: ContactB
    },
    {
      path: '/user/:id/view',
      name: 'User',
      component: UserView
    },
    {
      path: '/user/:id/edit',
      name: 'User Edit',
      component: UserEdit
    }
  ]
})
