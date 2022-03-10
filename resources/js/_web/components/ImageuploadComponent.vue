<template>
	<section class="section" style="width: 100%;">


<!--
		<div class="field is-small">
		  <div class="control">
	        <progress class="progress" role="progressbar" max="100" :value.prop="percentage">{{ percentage }}%</progress>
		  </div>
		</div>
-->

<!-- 		<step-navigation :steps="steps" :currentstep="currentstep"></step-navigation> -->

        <div v-if="currentstep == 2">
            <h1 class="title">Step 2</h1>
			<form @submit.prevent="verifyNumber" class="container">
				<div class="form-group">
				    <label for="label">Verify Number</label>
				    <input :class="{ 'is-invalid': errors.mobile }" class="form-control" type="text" placeholder="Write your mobile number" ref="verifymobile" name="verifymobile" v-model="form.verifymobile">
				    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
					<div v-if="errors.mobile" class="invalid-feedback">{{ errors.mobile[0] }}</div>
				</div>
			</form>
        </div>

        <div v-if="currentstep == 3">
            <h1 class="title">Step 3</h1>
            <form @submit.prevent="verifyCode">
				<div class="field">
				  <label class="label">Verify Code</label>
				  <div class="control">
				    <input class="input" type="text" placeholder="Write the code" ref="verifycode" name="verifycode" v-model="form.verifycode">
					<span v-if="errors.code" class="label label-danger">{{ $t(errors.code[0]) }}</span>
				  </div>
				</div>

				<div class="field is-grouped">
				  <div class="control">
<!-- 				    <button class="button is-link" type="submit">Verify Code</button> -->
				  </div>
				</div>
			</form>
        </div>


        <form id="new-file-form" action="#" method="#" @submit.prevent="submitForm">
		    <div class="field">
			  <label class="label">File Upload</label>
			  <div class="control">
			  	 <file-pond ref="pond" allow-multiple="false" v-on:processfile="handleFilePondInit" accepted-file-types="image/jpeg, image/png" required/>
			  </div>
		    </div>

	    </form>




        <step v-for="step in steps" :currentstep="currentstep" :key="step.id" :step="step" :stepcount="steps.length" @step-change="stepChanged"></step>


	</section>
</template>

<script>
	import Form from 'vform'
	import axios from 'axios'
	import swal from 'sweetalert2'

	import StepNavigationStep from '~/components/step-navigation-step'
	import StepNavigation from '~/components/step-navigation'
	import Step from '~/components/step'

	// Import Vue FilePond
	import vueFilePond, { setOptions } from 'vue-filepond';

	// Import image preview and file type validation plugins
	import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

		setOptions({
			allowRevert: false,
			instantUpload: false,
			server:{
			    url: '/api/',
			    process: {
		            url: 'files/add',
		            method: 'POST',
		            headers: {
		                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		            },
		            withCredentials: false,
		            onerror: (res) => {
			            swal('Error');
			        }
		        },
		        revert: (uniqueFileId, load, error) => {
	// 				console.log(uniqueFileId);
				},
			}
		})

	const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)


    export default {

	    components: {
		  StepNavigationStep,
		  StepNavigation,
		  Step,
		  FilePond
		},

	    computed: {
		    percentage: function(){

		      var p = 0;
		      var size = 100 / Object.keys(this.form).length;

		      for( var i in this.form){
		        // console.log( this.infos[i] );

		        if( this.form[i] != null && this.form[i] != '' ){
		          p = p + size;
		        }
		      }

		      return Math.round(p);

		    }
		 },

        data(){
            return {
	            form: {
			      verifymobile: null,
			      verifycode: null
			    },
			    errors: [],
                image: '',
                files: {},
		        file: '',
		        formData: {},
		        fileName: '',
		        attachment: '',
		        uploadPercentage: 0,

		        currentstep: 1,

		        steps: [
		            {
		                id: 1,
		                title: "Position",
		                icon_class: "fa fa-map-marker"
		            },
		            {
		                id: 2,
		                title: "Category",
		                icon_class: "fa fa-folder-open"
		            },
		            {
		                id: 3,
		                title: "Send",
		                icon_class: "fa fa-paper-plane"
		            },
		            {
		                id: 4,
		                title: "Send",
		                icon_class: "fa fa-paper-plane"
		            }
		        ]
            }
        },
        methods: {
	        handleFilePondInit: function(error, file) {
		        if (error) {
			        swal(error);
	                return;
		        }
				this.currentstep = this.currentstep + 1;
	        },
	        stepChanged(step) {
		        var self = this;

		        if(this.currentstep == 1){
			        this.$refs.pond.processFile().then(file => {
				        // File has been added
				    })
				    .catch(error => {
				        alert("File required");
				    });
		        }

		        if(this.currentstep == 2){
			        this.errors = [];
	                var x = JSON.stringify(self.form.verifymobile)
					localStorage.setItem('mobile', x);
	                axios.post('api/verify/number', {mobile: self.form.verifymobile}).then(response => {
	                    console.log(response.data);
			            this.currentstep = step;
	                })
	                .catch(error => {
	                    this.errors = error.response.data.errors;
	                    console.log(error.response.data.errors);
	                });
		        }

		        if(this.currentstep == 3){
			        this.errors = [];
			        if (localStorage.getItem('mobile')) {
				        var x = JSON.parse(localStorage.getItem('mobile'));
			        }
	                axios.post('api/verify/code', {code: self.form.verifycode, mobile: x}).then(response => {
	                    console.log(response.data);
			            this.currentstep = step;
	                })
	                .catch(error => {
	                    this.errors = error.response.data.errors;
	                    console.log(error.response.data.errors);
	                });
		        }
/*
		        if(this.currentstep > step && this.currentstep !== 1){
		            this.currentstep = step;
		        }
*/
	        },
/*

	        verifyNumber(){
		        this.errors = [];
                var x = JSON.stringify(this.form.verifymobile)
				localStorage.setItem('mobile', x);
                axios.post('api/verify/number', {mobile: this.form.verifymobile}).then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data.errors);
                });
            },
            verifyCode(){
		        this.errors = [];
		        if (localStorage.getItem('mobile')) {
			        var x = JSON.parse(localStorage.getItem('mobile'));
		        }
                axios.post('api/verify/code', {code: this.form.verifycode, mobile: x}).then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                });
            },
*/
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            uploadImage(){
                axios.post('api/files/add', {image: this.image}, {headers: {'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)}}).then(response => {
                     swal({
				      type: 'sucess',
				      title:'Image uploaded',
				      text: 'Demo'
				    })
                });
            },
             submitForm() {
	            this.formData = new FormData();
	            this.formData.append('name', this.fileName);
	            this.formData.append('file', this.attachment);

	            axios.post('api/files/add', this.formData, {headers: {'Content-Type': 'multipart/form-data'}, onUploadProgress: function( progressEvent ) {
        this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) );
      }.bind(this)})
	                .then(response => {
	                    this.resetForm();
	                    this.uploadPercentage = 0;
	                })
	                .catch(error => {
	                    this.errors = error.response.data.errors;
	                });
	        },
	        addFile() {
	            this.attachment = this.$refs.file.files[0];
	        },
	        resetForm() {
	            this.formData = {};
	            this.fileName = '';
	            this.attachment = '';
	        }
        }
    }
</script>

<style lang="scss" scoped>
$wizard-color-neutral: #ccc !default;
$wizard-color-active: #4183D7 !default;
$wizard-color-complete: #87D37C !default;
$wizard-step-width-height: 64px !default;
$wizard-step-font-size: 24px !default;

.step-wrapper {
    padding: 20px 0;
    display: none;

    &.active {
        display: block;
    }
}



.step-indicator {
    border-collapse: separate;
    display: table;
    margin-left: 0px;
    position: relative;
    table-layout: fixed;
    text-align: center;
    vertical-align: middle;
    padding-left: 0;
    padding-top: 20px;

    li {
        display: table-cell;
        position: relative;
        float: none;
        padding: 0;
        width: 1%;

        &:after {
            background-color: $wizard-color-neutral;
            content: "";
            display: block;
            height: 1px;
            position: absolute;
            width: 100%;
            top: $wizard-step-width-height/2;
        }

        &:after {
            left: 50%;
        }

        &:last-child {
            &:after {
                display: none;
            }
        }

        &.active {
            .step {
                border-color: $wizard-color-active;
                color: $wizard-color-active;
            }

            .caption {
                color: $wizard-color-active;
            }
        }

        &.complete {
            &:after {
                background-color: $wizard-color-complete;
            }

            .step {
                border-color: $wizard-color-complete;
                color: $wizard-color-complete;
            }

            .caption {
                color: $wizard-color-complete;
            }
        }
    }

    .step {
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid $wizard-color-neutral;
        color: $wizard-color-neutral;
        font-size: $wizard-step-font-size;
        height: $wizard-step-width-height;
        line-height: $wizard-step-width-height;
        margin: 0 auto;
        position: relative;
        width: $wizard-step-width-height;
        z-index: 1;

        &:hover {
            cursor: pointer;
        }
    }

    .caption {
        color: $wizard-color-neutral;
        padding: 11px 16px;
    }
}
</style>