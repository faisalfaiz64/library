<template>

	<div class="feedback-modal">
		<button @click="ProductClose" class="close-btn"><img src="/images/close@2x.png"/></button>
		<h1>Do you like this product?</h1>
		<div class="perfume-block">
			<span>
				<img :src="'/products/' + product.image"/>
				<div class="title">{{ product.code }}</div>
				<div class="sub-title">{{ product.name }}</div>
			</span>
		</div>
		<div class="col-md-12 col-lg-8 mx-auto mb-4 mt-5">
			<div class="text-center">
				<button class="btn outline mr-3" @click="ProductClose">No</button>
				<button class="btn" @click="nextStep()">Yes</button>
			</div>
		</div>
	</div>

</template>

<script>
	import { mapGetters } from 'vuex'

export default {
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