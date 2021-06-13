<template>
	<section class="flex px-px md:px-0.5">
		<div
			v-for="(instrument, index) in displayedInstruments"
			:key="index"
			class="w-1/6 md:w-[12.5%] lg:w-[10%] xl:w-1/12 m-px md:m-0.5 p-[1%] bg-gradient overflow-hidden bg-teal-4"
			:style="`background-color: #${backgroundColors[index]}`"
		>
			<div class="aspect-w-9 aspect-h-16 max-h-96 relative">
				<button class="md:hidden absolute h-6 w-6 mb-auto ml-auto -top-px -right-px bg-black bg-opacity-50 text-white rounded-full z-20 focus:outline-none flex" @click="toggleInstrumentColor(index)">
					<i class="fas fa-fill-drip text-sm m-auto" />
				</button>
				<img src="@/assets/images/instruments/test.svg" alt="Ukulele" class="max-h-full max-w-full w-auto m-auto filter-white z-10" :class="{ 'no-filter': index === activeInstrumentIndex }" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	import instruments from "~/static/instruments.json";
	import { Instrument } from "~/models/interfaces/Instrument";

	@Component({
		name: "Hero",
	})
	export default class Hero extends Vue {
		instruments: Array<Instrument> = instruments;
		randomInstrumentSelection: Array<Instrument> = [];
		displayedInstruments: Array<Instrument> = [];
		backgroundColors: Array<string> = ["ff6842", "ffb442", "ffff42", "b4ff42", "68ff42", "42ff68", "42ffb4", "42ffff", "42b4ff", "4268ff", "6842ff", "b442ff", "ff42ff", "ff42b4", "ff4268"];
		activeInstrumentIndex: number = -1;

		mounted() {
			this.shuffleArray(this.randomInstrumentSelection);
			this.shuffleArray(this.backgroundColors);

			this.randomInstrumentSelection = this.instruments.slice(0, 12);
			this.setNumberOfInstruments();

			window.onresize = this.setNumberOfInstruments;
		}

		setNumberOfInstruments() {
			// console.log("width: ", window.innerWidth);
			// console.log("instruments: ", this.displayedInstruments.length);

			if (window.innerWidth >= 1280) {
				// xl
				if (this.displayedInstruments.length !== 12) {
					this.displayedInstruments = this.randomInstrumentSelection.slice(0, 12);
					this.activeInstrumentIndex = -1;
					console.log("sehr groß");
				}
			} else if (window.innerWidth >= 1024) {
				// lg
				if (this.displayedInstruments.length !== 10) {
					this.displayedInstruments = this.randomInstrumentSelection.slice(0, 10);
					this.activeInstrumentIndex = -1;
					console.log("groß");
				}
			} else if (window.innerWidth >= 768) {
				// md
				if (this.displayedInstruments.length !== 8) {
					this.displayedInstruments = this.randomInstrumentSelection.slice(0, 8);
					this.activeInstrumentIndex = -1;
					console.log("mittel");
				}
			} else if (window.innerWidth < 768) {
				// sm
				if (this.displayedInstruments.length !== 6) {
					this.displayedInstruments = this.randomInstrumentSelection.slice(0, 6);
					console.log("klein");
				}
			}
		}

		shuffleArray(array: Array<any>) {
			array.sort(() => Math.random() - 0.5);
		}

		toggleInstrumentColor(index: number) {
			this.activeInstrumentIndex = this.activeInstrumentIndex === index ? -1 : index;
		}

		removeInstrumentColor(index: number) {
			if (this.activeInstrumentIndex === index) {
				this.activeInstrumentIndex = -1;
			}
		}
	}
</script>

<style scoped>
	.bg-gradient {
		background: linear-gradient(-10deg, rgba(0, 0, 0, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%);
	}

	.filter-white {
		filter: brightness(0) invert(1);
	}
	.filter-white:hover {
		filter: none;
		filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0, 0.6));
	}
	.no-filter {
		filter: none;
		filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0, 0.6));
	}

	.test {
		position: absolute;
	}
</style>
