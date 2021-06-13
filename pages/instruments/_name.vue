<template>
	<div v-if="currentInstrument">
		{{ $route.params.name }}

		{{ currentInstrument }}
		<NuxtLink to="/instruments">Zurück</NuxtLink>
	</div>
	<div v-else>
		Page not found (404)
		<NuxtLink to="/instruments">Zurück</NuxtLink>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	import instruments from "~/static/instruments.json";
	import { Instrument } from "~/models/interfaces/Instrument";

	@Component({
		name: "instrumentPage",
	})
	export default class InstrumentPage extends Vue {
		instruments: Array<Instrument> = instruments;
		currentInstrument = instruments.find((element) => element.name === this.$route.params.name);
	}
</script>
