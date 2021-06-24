import router from './router'
import store from './store'
import { Message } from 'element-ui'
import getPageTitle from '@/utils/get-page-title'


const whiteList = ['/', '/404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = ""

  if (hasToken) {
    const user = store.getters.userInfo
    if (user && user.id) {
      next()
    } else {
      try {
        await store.dispatch('user/getInfo')
        next({ ...to, replace: true })
      } catch (error) {
        await store.dispatch('user/resetToken')
        Message.error(error || 'Has Error')
        next(`/?redirect=${to.path}`)
      }
    }
    
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      Message.error('请先登录')
      // other pages that do not have permission to access are redirected to the login page.
      next(`/?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {


})
