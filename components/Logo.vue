<template>
	<img src="@/assets/logo_neu.png" />
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "Logo",
	})
	export default class Logo extends Vue {}
</script>

<style>
	.NuxtLogo {
		animation: 1s appear;
		margin: auto;
	}

	@keyframes appear {
		0% {
			opacity: 0;
		}
	}
</style>
