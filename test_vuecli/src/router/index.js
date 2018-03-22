import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/form/index'
import Contact from '@/components/contact/index'
import ContactB from '@/components/contactb/index'

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
    }
  ]
})
