<template>
	<!-- BEGIN #content -->
	<div id="content" class="app-content">
		<!-- page header -->
		<h1 class="page-header">
			Dashboard <small>Overview of the library</small>
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
									<h5 class="mb-1">Total users</h5>
								</div>
								<a href="#" data-toggle="dropdown" class="text-muted"><i class="fa fa-redo"></i></a>
							</div>
							<div class="mb-4">
								<h3 class="mb-1">655</h3>
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
									<h5 class="mb-1">Total Books</h5>
								</div>
								<a href="#" data-toggle="dropdown" class="text-muted"><i class="fa fa-redo"></i></a>
							</div>

							<div class="mb-4">
								<h3 class="mb-1">888</h3>
							</div>

							<div class="fs-13px">
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										 Available
									</div>
									<div class="fw-600 text-dark">111</div>
								</div>
								<div class="d-flex align-items-center mb-2">
									<div class="flex-grow-1 d-flex align-items-center">
										Not Available
									</div>
									<div class="fw-600 text-dark">222</div>
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
	}
</script>
