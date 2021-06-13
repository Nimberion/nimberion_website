<template>
	<div>
		<div v-for="(instrument, index) in instruments" :key="index">
			<NuxtLink :to="`/instruments/${instruments[index].name}`">{{ instruments[index].name }}</NuxtLink>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	import instruments from "~/static/instruments.json";
	import { Instrument } from "~/models/interfaces/Instrument";

	@Component({
		name: "instruments",
	})
	export default class Instruments extends Vue {
		instruments: Array<Instrument> = instruments;
	}
</script>
