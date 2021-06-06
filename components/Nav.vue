<template>
	<nav class="grid center-nav-logo px-1">
		<div class="flex items-center justify-self-end">
			<a class="hidden md:flex hover:text-red-700">
				AKKORDE
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</a>
			<a class="hidden md:flex hover:text-red-700 ml-4 lg:ml-8">INSTRUMENTE</a>
		</div>
		<a><Logo class="flex items-center m-2 mx-8 lg:mx-16 h-10" /></a>
		<div class="flex items-center justify-self-start">
			<a class="hidden md:flex hover:text-red-700 mr-4 lg:mr-8">
				TOOLS
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</a>
			<a class="hidden md:flex hover:text-red-700">
				SPIELE
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</a>
		</div>
	</nav>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "Nav",
	})
	export default class Nav extends Vue {}
</script>

<style scoped>
	.center-nav-logo {
		grid-template-columns: 1fr auto 1fr;
	}
</style>
