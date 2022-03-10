<template>
	<div class="row mt-2">
		<!-- <button v-hammer:tap="prevStep" class="btn back"><font-awesome-icon :icon="['fas', 'angle-left']" /> Back</button> -->
        <div class="col-md-6 col-lg-6 mx-auto">
			<div class="text-center mb-4">
				<h2>{{ $t('step3_title') }}</h2>
			</div>
		</div>
		<div class="row products" style="max-width: 1200px;margin: 0 auto;" v-if="products.length > 1">
				<figure v-for="perfume in products" v-bind:key="perfume.id" :style="(products.length == 4 ? 'flex-basis: 30%;' : 'flex-basis: 27%;')">
					<div class="col-md-6 col-lg-6 mx-auto">
						<img :src="'/products/' + perfume.image"/>
					</div>
					<div class="col-md-6 col-lg-6 mx-auto">
						<div class="title">{{ perfume.code }}</div>
						<div class="sub-title">{{ perfume.name }}</div>

						<button class="btn button" @click="setProduct(perfume.product_id)">{{ $t('rate_it') }}</button>
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
	import { mapGetters } from 'vuex'
	import SurveyModal from '~/components/SurveyModal'
	import { SurveyDAO } from '~/db/surveyDAO';
	import { Survey } from '~/db/models/survey';


export default {
components: {
    SurveyModal
  },
	data(){
    return {
        form: {
		verifymobile: null
		},
		errors: [],
		isDisabled: false,
		modalOpen: false,
		survey: new Survey(),
		products: {}
		}
	},
	computed: mapGetters({
		product: 'wizard/product',
		product_status: 'wizard/product_status'
	}),
    methods: {
		setProduct(x){
			this.$store.dispatch('wizard/saveProductStatus', {product_status: true});
			this.$store.dispatch('wizard/saveProduct', {product: x});
		},
		prevStep() {
			this.$parent.next(2);
        }
    },
    async mounted() {
		var _this = this;
		await SurveyDAO.getInstance().getProducts().then(result =>{
			_this.products = result;
			console.log(result);
		})
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