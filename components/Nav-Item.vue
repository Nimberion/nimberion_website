<template>
	<a class="hidden md:flex hover:text-red-700 mx-4 lg:ml-8">
		<slot />
	</a>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "Nav-Item",
	})
	export default class Nav extends Vue {}
</script>
