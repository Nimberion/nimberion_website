<template>
	<nav class="grid grid-cols-[1fr,auto,1fr] px-1">
		<div class="flex items-center justify-self-end">
			<Nav-Item :nav-item="navItems[0]"> {{ navItems[0].name }} </Nav-Item>
			<Nav-Item :nav-item="navItems[1]"> {{ navItems[1].name }} </Nav-Item>
		</div>
		<NuxtLink to="/"><Logo class="flex items-center m-2 mx-4 lg:mx-8 h-10" /></NuxtLink>
		<div class="flex items-center justify-self-start">
			<Nav-Item :nav-item="navItems[2]"> {{ navItems[2].name }} </Nav-Item>
			<Nav-Item :nav-item="navItems[3]"> {{ navItems[3].name }} </Nav-Item>
			<button class="absolute md:hidden right-4" @click="showMenu = !showMenu"><i class="fas fa-bars text-2xl" /></button>
		</div>
		<div v-if="showMenu" class="md:hidden z-50 bg-white h-[calc(100vh-3.5rem)] w-screen absolute top-14 right-0 p-4 px-6">
			<ul>
				<li v-for="(item, index) in navItems" :key="index" class="my-2 py-4 text-2xl" :class="{ 'bg-gray-200': item.subMenuOpen }">
					<div class="flex justify-center">
						<span> {{ item.name }} </span>
						<button v-if="item.subMenu" class="ml-4 text-sm self-center" :class="{ 'fas fa-chevron-down': !item.subMenuOpen, 'fas fa-chevron-up': item.subMenuOpen }" @click="item.subMenuOpen = !item.subMenuOpen" />
					</div>
					<ul v-for="(subItem, subIndex) in item.subMenu" v-show="item.subMenuOpen" :key="subIndex" class="flex justify-center py-2">
						<li>{{ subItem.name }}</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
	import { Component, Vue } from "nuxt-property-decorator";
	import { NavItem } from "~/models/interfaces/NavItem";

	@Component({
		name: "Nav",
	})
	export default class Nav extends Vue {
		navItems: Array<NavItem> = [
			{
				name: "AKKORDE",
				route: "chords",
				subMenu: [{ name: "Liedtitel", route: "liedtitel" }],
				subMenuOpen: false,
			},
			{
				name: "INSTRUMENTE",
				route: "instruments",
			},
			{
				name: "TOOLS",
				route: "tools",
				subMenu: [{ name: "Toolname", route: "toolname" }],
				subMenuOpen: false,
			},
			{
				name: "GAMES",
				route: "games",
				subMenu: [{ name: "Gametitel", route: "gametitel" }],
				subMenuOpen: false,
			},
		];

		showMenu: boolean = false;

		openSubMenu(item: any) {
			console.log(item.subMenuOpen, "1");
			item.subMenuOpen = !item.subMenuOpen;
			console.log(item.subMenuOpen, "2");
		}
	}
</script>
