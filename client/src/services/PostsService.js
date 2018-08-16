import Axios from '@/services/axios'

export default {
  fetchPosts () {
    return Axios().get('posts')
  },

  addPost (params) {
    // return Api().post('posts/new', params)
    // Api().defaults.headers.common['Access-Control-Request-Headers'] = null
    // Api().defaults.headers.common['Access-Control-Request-Method'] = null
    let config = {
      headers: {
        // 'content-type': 'application/x-www-form-urlencoded'
         'content-type': 'application/json'
        //'content-type': 'text/plain'
      }
    }
    var returned = Axios().post('posts/new', params, config)
    console.log('&&&&&&&&&&& FUCK &&&&&&&&&& ', returned)
    return returned
  },

  updatePost (params) {
    return Axios().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Axios().get('posts/' + params.id)
  },

  deletePost (id) {
    return Axios().delete('posts/' + id)
  }
}
