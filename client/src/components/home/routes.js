import Hello from './HelloWorld.vue'

let meta = {
  displayMainMenu: true,
  displayMainMenuSub: true,
  displayAdminMenu: false,
  displayWidgetMenu: true
}

let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    meta,
    component: Hello
  }
]

export default routes
