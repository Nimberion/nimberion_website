<template>
	<nav class="grid grid-cols-[1fr,auto,1fr] px-1">
		<div class="flex items-center justify-self-end">
			<NavItemDesktop :nav-item="navItems[0]"> {{ navItems[0].name }} </NavItemDesktop>
			<NavItemDesktop :nav-item="navItems[1]"> {{ navItems[1].name }} </NavItemDesktop>
		</div>
		<NuxtLink to="/"><Logo class="flex items-center m-2 mx-4 lg:mx-8 h-10" /></NuxtLink>
		<div class="flex items-center justify-self-start">
			<NavItemDesktop :nav-item="navItems[2]"> {{ navItems[2].name }} </NavItemDesktop>
			<NavItemDesktop :nav-item="navItems[3]"> {{ navItems[3].name }} </NavItemDesktop>
			<button class="absolute md:hidden right-4 focus:outline-none" @click="showMenu = !showMenu"><i class="fas fa-bars text-2xl" /></button>
		</div>

		<ul v-if="showMenu" class="md:hidden z-50 bg-white h-[calc(100vh-3.5rem)] w-screen absolute top-14 right-0 p-4 px-6">
			<NavItemMobile :nav-items="navItems" @navigate="navigate" />
		</ul>
	</nav>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	import { NavItem, newNavItem } from "~/models/interfaces/NavItem";

	@Component({
		name: "Nav",
	})
	export default class Nav extends Vue {
		navItems: Array<NavItem> = [
			newNavItem("AKKORDE", "/chords", [newNavItem("Liedtitel", "liedtitel")]),
			newNavItem("INSTRUMENTE", "/instruments"),
			newNavItem("TOOLS", "/tools", [newNavItem("Toolname", "toolname")]),
			newNavItem("GAMES", "/games", [newNavItem("Gametitel", "gametitel")]),
		];

		showMenu: boolean = false;

		openSubMenu(item: any) {
			console.log(item.subMenuOpen, "1");
			item.subMenuOpen = !item.subMenuOpen;
			console.log(item.subMenuOpen, "2");
		}

		navigate(route: string) {
			this.showMenu = false;
			this.navItems.forEach((item) => {
				item.subMenuOpen = false;
			});
			this.$router.push(route);
		}
	}
</script>
