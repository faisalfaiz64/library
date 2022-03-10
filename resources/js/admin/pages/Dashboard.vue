<template>
	<!-- BEGIN #content -->
	<div id="content" class="app-content">
		<!-- page header -->
		<h1 class="page-header">
			Dashboard <small>Overview of the backend</small>
		</h1>

		<!-- BEGIN row -->
		<b-row>
			<!-- BEGIN col-6 -->
			<b-col xl="12">
				<!-- BEGIN row -->
				<b-row>

					<!-- BEGIN col-6 -->
					<b-col cols="6">
						<!-- BEGIN card -->
						<b-card class="mb-3">
							<div class="d-flex mb-3">
								<div class="flex-grow-1">
									<h5 class="mb-1">Total Targets</h5>
									<div class="fs-13px">Visibility, Availability, Distribution & Sales</div>
								</div>
								<a href="#" data-toggle="dropdown" class="text-muted"><i class="fa fa-redo"></i></a>
							</div>
							<div class="mb-4">
								<h3 class="mb-1">{{ targets[0].visibility + targets[0].availability + targets[0].distribution + targets[0].sales}}</h3>
							</div>

							<div class="fs-13px">
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										 Visibility
									</div>
									<div class="fw-600 text-dark">{{ targets[0].visibility }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Availability
									</div>
									<div class="fw-600 text-dark">{{ targets[0].availability }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Distribution
									</div>
									<div class="fw-600 text-dark">{{ targets[0].distribution }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Sales
									</div>
									<div class="fw-600 text-dark">{{ targets[0].sales }}</div>
								</div>
							</div>
						</b-card>
						<!-- END card -->
					</b-col>
					<!-- END col-6 -->

					<!-- BEGIN col-6 -->
					<b-col cols="6">
						<!-- BEGIN card -->
						<b-card class="mb-3">
							<div class="d-flex mb-3">
								<div class="flex-grow-1">
									<h5 class="mb-1">Total Actuals</h5>
									<div class="fs-13px">Visibility, Availability, Distribution & Sales</div>
								</div>
								<a href="#" data-toggle="dropdown" class="text-muted"><i class="fa fa-redo"></i></a>
							</div>

							<div class="mb-4">
								<h3 class="mb-1">{{ actuals[0].visibility + actuals[0].availability + actuals[0].distribution + actuals[0].sales}}</h3>
							</div>

							<div class="fs-13px">
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										 Visibility
									</div>
									<div class="fw-600 text-dark">{{ actuals[0].visibility }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Availability
									</div>
									<div class="fw-600 text-dark">{{ actuals[0].availability }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Distribution
									</div>
									<div class="fw-600 text-dark">{{ actuals[0].distribution }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Sales
									</div>
									<div class="fw-600 text-dark">{{ actuals[0].sales }}</div>
								</div>
							</div>
						</b-card>
						<!-- END card -->
					</b-col>
					<!-- END col-6 -->

					<b-col cols="12">
						<!-- BEGIN card -->
						<b-card class="mb-3">
							<div class="d-flex mb-3">
								<div class="flex-grow-1">
									<h5 class="mb-1">Total Designation</h5>
								</div>
								<a href="#" data-toggle="dropdown" class="text-muted"><i class="fa fa-redo"></i></a>
							</div>
							<div class="mb-4">
								<h3 class="mb-1">{{ designation[0].salesman + designation[0].supervisor + designation[0].channelmanager + designation[0].rsm + designation[0].cdm }}</h3>
							</div>

							<div class="fs-13px">
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										 Van Salesman
									</div>
									<div class="fw-600 text-dark">{{ designation[0].salesman }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Sales Supervisor
									</div>
									<div class="fw-600 text-dark">{{ designation[0].supervisor }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Channel Manager
									</div>
									<div class="fw-600 text-dark">{{ designation[0].channelmanager }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										RSM
									</div>
									<div class="fw-600 text-dark">{{ designation[0].rsm }}</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										CDM
									</div>
									<div class="fw-600 text-dark">{{ designation[0].cdm }}</div>
								</div>
							</div>
						</b-card>
						<!-- END card -->
					</b-col>
					<!-- END col-6 -->

				</b-row>
				<!-- END row -->
			</b-col>
			<!-- END col-6 -->
		</b-row>
		<!-- END row -->

	</div>
	<!-- END #content -->
</template>

<script>
	import axios from 'axios'
	// import { mapGetters } from 'vuex'

	export default {
		name: 'analytics',
		data() {
			return {
				stats: [],
				targets: [],
				actuals: [],
				designation: [],
			}
		},
		methods: {

			async getCities(){
				// let _this = this;
				// await axios.post('/apiadmin/v1/city/get', {country_id: this.selectedCountry}).then(response => {
				// 	this.cityValue = response.data
				// });
				// this.selectedCity = '';
				// this.selectedBranch = '';
				// this.branchValue = [];
				// this.selectedCountryText = this.countryValue[this.selectedCountry]
				//
				// await axios.post('/apiadmin/v1/stats/selected', {country: this.selectedCountry,city: this.selectedCity,branch: this.selectedBranch}).then(response => {
				// 	_this.surveyOverview = response.data;
				// 	_this.branches = response.data.branches;
				// 	console.log(response.data);
				// })
				// .catch(error => {
				// 	console.log(error);
				// });
			},
		},
		async created(){
			let _this = this;
			await axios.get('/apiadmin/v1/dashboard/stats/targets').then(response => {
				_this.targets = response.data;

	    });
			await axios.get('/apiadmin/v1/dashboard/stats/actuals').then(response => {
				_this.actuals = response.data;
	    });
			await axios.get('/apiadmin/v1/dashboard/stats/designation').then(response => {
				_this.designation = response.data;
	    });
    }
	}
</script>
