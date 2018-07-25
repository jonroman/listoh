<template>
        <div class="col-sm-10">
          <div class="posts">
            <h1>Posts</h1>
            <div v-if="posts.length > 0" class="table-wrap">
              <div>
                <router-link v-bind:to="{ name: 'NewPost' }" class="">Add Post</router-link>
              </div>
              <table>
                <tr>
                  <td>Title</td>
                  <td width="550">Description</td>
                  <td width="100" align="center">Action</td>
                </tr>
                <!-- eslint-disable-next-line -->
                <tr v-for='(post, index) in posts' :key='index'>
                  <td>{{ post.title }}</td>
                  <td>{{ post.description }}</td>
                  <td align="center">
                    <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
                    <a href="#" @click="deletePostGrowl(post._id, index)">Delete</a>
                  </td>
                </tr>
              </table>
            </div>
            <div v-else>
              There are no posts.. Lets add one now <br /><br />
              <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
            </div>
            <vue-snotify></vue-snotify>
          </div>
        </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'Posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  watch: {
    posts: function () {
      this.posts;
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
      console.log('posts = ' + JSON.stringify(this.posts));
    },
    async deletePost (id, index) {
      await PostsService.deletePost(id)
      this.$delete(this.posts, index)
      this.$snotify.error('Deleted!', '', {
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        animation: {
          enter: 'bounceInDown',
          exit: 'bounceInDown',
          time: 5000
        }
      })
    },
    deletePostGrowl (id, index) {
      this.$snotify.confirm('Please delete this post', 'Delete Post', {
        timeout: 5000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [
          {text: 'Yes', action: () => {this.deletePost(id, index); this.$snotify.remove();}, bold: false},
          {text: 'No', action: () => this.$snotify.remove()}
        ],
        animation: {
          enter: 'bounceInDown',
          exit: 'bounceInDown',
          time: 1000
        }
      })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}


.bounceInDown {
  animation-name: bounceInDown;
}


@keyframes bounceInDown {
  0%, 60%, 75%, 90%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(.985);
  }

  100% {
    opacity: 1;
    transform: none;
  }
}


</style>