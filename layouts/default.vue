<template>
	<div class="grid grid-rows-[auto,auto,1fr,auto] min-h-screen">
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
