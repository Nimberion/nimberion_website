<template>
	<div class="pancake-stack min-h-screen">
		<Nav class="" />
		<Hero />
		<Nuxt class="max-w-screen-lg mx-auto" />
		<Footer />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "default",
	})
	export default class Default extends Vue {}
</script>

<style scoped>
	.pancake-stack {
		display: grid;
		grid-template-rows: auto auto 1fr auto;
	}
</style>
