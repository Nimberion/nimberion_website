<template>
	<nav class="grid grid-cols-[1fr,auto,1fr] px-1">
		<div class="flex items-center justify-self-end">
			<Nav-Item>
				AKKORDE
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</Nav-Item>
			<Nav-Item>INSTRUMENTE</Nav-Item>
		</div>
		<a><Logo class="flex items-center m-2 mx-4 lg:mx-8 h-10" /></a>
		<div class="flex items-center justify-self-start">
			<Nav-Item>
				TOOLS
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</Nav-Item>
			<Nav-Item>
				SPIELE
				<span class="fas fa-chevron-down text-xs ml-1 self-center" />
			</Nav-Item>
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
