<template>
	<NuxtLink :to="navItem.route" class="hidden md:flex hover:text-red-700 mx-4 lg:ml-8">
		<slot />
		<span v-if="navItem.subMenu.length > 0" class="fas fa-chevron-down text-xs ml-1 self-center" />
	</NuxtLink>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "nuxt-property-decorator";
	import { NavItem } from "~/models/interfaces/NavItem";

	@Component({
		name: "NavItemDesktop",
	})
	export default class NavItemDesktop extends Vue {
		@Prop({ required: true }) private navItem!: NavItem;
	}
</script>
