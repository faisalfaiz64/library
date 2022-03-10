<template>

	<div class="feedback-modal">
		<button @click="ProductClose" class="close-btn"><img src="/images/close@2x.png"/></button>
		<h1>{{ $t('like_product') }}</h1>
		<div class="perfume-block">
			<span>
				<img :src="'/products/' + products[0].image"/>
				<div class="title">{{ products[0].code }}</div>
				<div class="sub-title">{{ products[0].name }}</div>
			</span>
		</div>
		<div class="col-md-12 col-lg-8 mx-auto mb-4 mt-5">
			<div class="text-center">
				<button class="btn outline mr-3" @click="ProductClose">{{ $t('no') }}</button>
				<button class="btn" @click="nextStep()">{{ $t('yes') }}</button>
			</div>
		</div>
	</div>

</template>

<script>
	import { mapGetters } from 'vuex'
	import { SurveyDAO } from '~/db/surveyDAO';
	import { Survey } from '~/db/models/survey';

export default {
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
	ProductClose(){
		this.$store.dispatch('wizard/saveProductStatus', {product_status: false});
	},
	nextStep() {
		this.$parent.next(2);
	}
    },
    async mounted() {
		var _this = this;
		console.log(this.product);
		await SurveyDAO.getInstance().getProduct(this.product).then(result =>{
			_this.products = result;
			console.log(result);
		})
		setTimeout(function () {
			_this.$parent.isLoading = false;
		}, 500)
	},
}
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}
</style>