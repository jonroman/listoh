import Datatable from './view/Datatable.vue'
import Posts from './view/Posts.vue'
import NewPost from './view/NewPost.vue'
import EditPost from './view/EditPost.vue'

let meta = {
  displayMainMenu: false,
  displayAdminMenu: true,
  displayWidgetMenu: true
}

let routes = [
  {
    path: '/datatable',
    name: 'Datatable',
    component: Datatable,
    meta
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
    meta
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost,
    meta
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost,
    meta
  }
]

export default routes
