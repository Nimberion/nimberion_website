<template>
	<NuxtLink :to="`/${$attrs['nav-item'].route}`" class="hidden md:flex hover:text-red-700 mx-4 lg:ml-8">
		<slot />
		<span v-if="$attrs['nav-item'].subMenu" class="fas fa-chevron-down text-xs ml-1 self-center" />
	</NuxtLink>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "Nav-Item",
	})
	export default class Nav extends Vue {}
</script>
