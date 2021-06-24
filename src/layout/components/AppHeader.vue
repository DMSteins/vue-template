<template>
	<div class="app-header">
		header
	</div>
</template>

<script>
export default {
	components: {
	
	},
	data() {
		return {
			
		}
	},
	methods: {
		
  	}
}
</script>

<style lang="scss" scoped>
$boxShadow: 0 0 8px rgba(0, 0, 0, 0.1);
.app-header{
	z-index: 1000;
	position: fixed;
	background-color: #eee;
	height: $headerH;
	width: 100%;
	border-bottom: 1px solid #EDEDED;
	// overflow: hidden;

	.container{
		height: 100%;
	}

	
}

</style>
