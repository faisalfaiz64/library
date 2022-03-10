<template>
	<div class="row mt-2">
		<!-- <button v-hammer:tap="prevStep" class="btn back"><font-awesome-icon :icon="['fas', 'angle-left']" /> Back</button> -->
        <div class="col-md-6 col-lg-6 mx-auto">
			<div class="text-center mb-4">
				<h2>Perfume Products</h2>
			</div>
		</div>
		<div class="row products" v-if="products.length > 1">
				<figure v-for="perfume in products" v-bind:key="perfume.id" :style="(products.length == 4 ? 'flex-basis: 30%;' : 'flex-basis: 27%;')">
					<div class="col-md-6 col-lg-6 mx-auto">
						<img :src="'/products/' + perfume.image"/>
					</div>
					<div class="col-md-6 col-lg-6 mx-auto">
						<div class="title">{{ perfume.code }}</div>
						<div class="sub-title">{{ perfume.name }}</div>

						<button class="btn button" @click="setProduct(perfume)">Rate It</button>
					</div>
				</figure>

			</div>
		<transition name="fade">
			<div v-if="product_status" class="overlay flex items-center justify-center absolute inset-0">
				<transition name="fade" mode="out-in">
					<survey-modal></survey-modal>
				</transition>
			</div>
		</transition>


		</div>
</template>

<script>
	import axios from 'axios'
	import { mapGetters } from 'vuex'
	import SurveyModal from '~/components/survey/customer/SurveyModal'

export default {
components: {
    SurveyModal
  },
	data(){
    return {
		errors: [],
		isDisabled: false,
		modalOpen: false,
		survey: [],
		products: {}
		}
	},
	computed: mapGetters({
		product: 'wizard/product',
		product_status: 'wizard/product_status',
		surveyID: 'wizard/surveyID'
	}),
    methods: {
		setProduct(perfume){
			this.$store.dispatch('wizard/saveProductStatus', {product_status: true});
			this.$store.dispatch('wizard/saveProduct', {product: perfume});
		},
		prevStep() {
			this.$parent.next(1);
        }
    },
    async created() {
		let _this = this;
		await axios.get('/api/v1/survey/get').then(response => {
		console.log(response.data);
		_this.$store.dispatch('wizard/saveSurveyID', {surveyID: response.data.id});
		_this.products = response.data.products;
		})
		.catch(error => {
			console.log(error);
		});
		setTimeout(function () {
			_this.$parent.isLoading = false;
		}, 500)
    }
}
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}
</style>