<template>
    <!-- BEGIN #content -->
    <div id="content" class="app-content">
        <h1 class="page-header">
            Create <small>Book</small>
        </h1>

        <hr class="mb-4">
        <form id="announcementForm" @submit.prevent="processForm">
        <b-card title="Book Details">
        <label for="title" class="form-label">Title</label>
        <b-form-input  type="text" name="title" placeholder="Enter Title Name" v-model="title"></b-form-input>

        <hr class="mb-2">

        <label for="isbn" class="form-label" >ISBN</label>
        <b-form-input  type="text" name="isbn" placeholder="Enter ISBN" v-model="isbn"></b-form-input>
        </b-card>
        <hr class="mb-4">
        <b-button type="submit" variant="primary" active size="lg">Submit</b-button>
        </form>
    </div>
    <!-- END #content -->
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  el: '#announcementForm',
  data() {
    return {
	title: '',
    isbn: '',
    }
  },

  methods:{
    processForm: function(){
      let _this = this;
        axios.post('/apiadmin/v1/book/create', {title: this.title,isbn: this.isbn}).then(response => {
					_this.items = response.data.data;
					console.log(_this.items);
          
          this.$bvToast.toast('Book has been added', {
              title: 'Upload',
              variant: 'success',
              noAutoHide: false,
              solid: true
          })
          this.$router.push('/books');
	      });
        }
  }
}
</script>
