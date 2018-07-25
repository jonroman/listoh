<template>
        <div class="col-sm-10">
          <div class="posts">
            <h1>Edit Post</h1>
              <div class="form">
                  <div v-if="auto_saving_title && auto_saving_prompt" v-bind:class="{saving: auto_saving_title}" class="alert alert-success " id="auto-save-warning">
                    Auto Saving.. {{ title }}
                    <transition name="slide-fade">
                      <i v-if="saving" class="fa fa-gear" style="font-size:24px"></i>
                    </transition>
                  </div>
                  <div v-if="auto_saving_description && auto_saving_prompt" v-bind:class="{saving: auto_saving_description}" class="alert alert-success " id="auto-save-warning">
                    Auto Saving.. {{ description }}
                    <transition name="slide-fade">
                      <i v-if="saving" class="fa fa-gear" style="font-size:24px"></i>
                    </transition>
                  </div>
                <div>
                  <input type="text" id="title" name="title" placeholder="TITLE" v-model="title" v-on:keyup="updatePost('title', false)" v-on:click="hideSaveMessage" v-on:keyup.tab="hideSaveMessage">
                  <div v-if="saving"><i class="fa fa-gear" style="font-size:24px"></i></div>
                </div>
                <div>
                  <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description" v-on:keyup="updatePost('description', false)" v-on:click="hideSaveMessage" v-on:keyup.tab="hideSaveMessage"></textarea>
                </div>
                <div>
                  <button class="app_post_btn" @click="updatePost">Update</button>
                </div>
              </div>
              <vue-snotify></vue-snotify>
          </div>
        </div>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'EditPost',
  data () {
    return {
      title: '',
      description: '',
      saving: false,
      auto_saving_prompt: false,
      auto_saving_title: false,
      auto_saving_description: false
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    hideSaveMessage() {
      this.auto_saving_prompt = false
      this.auto_saving_title = false
      this.auto_saving_description = false
    },
    async getPost () {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description

    },
    async updatePost (input = '', redirect = true) {
      this.saving = true
      this.auto_saving_prompt = true
      if(input=='description') {
        this.auto_saving_description = true
      } else {
        this.auto_saving_title = true
      }
      let res = await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })

      if(res.data.success){
        this.saving = false
      }
      // redirect to list of posts
      if (redirect) {
        //this.$snotify.Snotify.success('hello');
        this.$snotify.success('hello', function(){
        });
        this.$router.push({ name: 'Posts' })
      }
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}

.saving {
  border-color: green;
}

.not-saving {
  border-color: none;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>