<template>
	<main>
		<h1 class="text-4xl my-4">WILLKOMMEN!</h1>
		<div class="flex">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit aperiam quidem illo voluptatem error incidunt. Cum dolore iure eaque perferendis beatae, nihil assumenda ducimus deleniti hic repellendus omnis similique?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi est amet, illum vel, voluptatum itaque quia magni delectus suscipit accusantium perspiciatis, quaerat ea. Quidem beatae ipsa accusantium mollitia saepe dolore.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit aperiam quidem illo voluptatem error incidunt. Cum dolore iure eaque perferendis beatae, nihil assumenda ducimus deleniti hic repellendus omnis similique?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi est amet, illum vel, voluptatum itaque quia magni delectus suscipit accusantium perspiciatis, quaerat ea. Quidem beatae ipsa accusantium mollitia saepe dolore.
			</p>
		</div>
	</main>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";

	@Component({
		name: "index",
	})
	export default class Index extends Vue {}
</script>

<style>
	/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
