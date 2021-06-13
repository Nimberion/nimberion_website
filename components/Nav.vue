<template>
	<nav class="grid grid-cols-[1fr,auto,1fr] px-1">
		<div class="flex items-center justify-self-end">
			<Nav-Item route="chords" :has-dropdown="true"> AKKORDE </Nav-Item>
			<Nav-Item route="instruments">INSTRUMENTE</Nav-Item>
		</div>
		<NuxtLink to="/"><Logo class="flex items-center m-2 mx-4 lg:mx-8 h-10" /></NuxtLink>
		<div class="flex items-center justify-self-start">
			<Nav-Item route="tools" :has-dropdown="true"> TOOLS </Nav-Item>
			<Nav-Item route="games" :has-dropdown="true"> SPIELE </Nav-Item>
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
