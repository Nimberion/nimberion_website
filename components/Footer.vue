<template>
	<footer class="mx-auto">
		<div>FOOTER CONTENT</div>
		<div class="space-x-8 text-2xl inline-block">
			<a href="https://www.youtube.com/nimberion" target="_blank" title="Youtube"><i class="fab fa-youtube hover:text-red-600"></i></a>
			<i class="fab fa-facebook hover:text-blue-700"></i>
			<i class="fab fa-instagram hover:text-purple-700"></i>
			<i class="fab fa-twitter hover:text-blue-500"></i>
		</div>
	</footer>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "Footer",
	})
	export default class Footer extends Vue {}
</script>

<style scoped></style>
