<template>
	<div>
		<li v-for="(item, index) in navItems" :key="index" class="my-2 py-4 text-2xl" :class="{ 'bg-gray-200': item.subMenuOpen }">
			<template v-if="item.subMenu.length > 0">
				<div class="flex justify-center cursor-pointer" @click="item.subMenuOpen = !item.subMenuOpen">
					<span> {{ item.name }} </span>
					<i v-if="item.subMenu.length > 0" class="ml-4 text-sm self-center" :class="{ 'fas fa-chevron-down': !item.subMenuOpen, 'fas fa-chevron-up': item.subMenuOpen }" />
				</div>
				<ul v-for="(subItem, subIndex) in item.subMenu" v-show="item.subMenuOpen" :key="subIndex" class="flex justify-center py-2">
					<li class="cursor-pointer" @click="$emit('navigate', subItem.route)">
						{{ subItem.name }}
					</li>
				</ul>
			</template>
			<template v-else>
				<div class="flex justify-center cursor-pointer" @click="$emit('navigate', item.route)">
					{{ item.name }}
				</div>
			</template>
		</li>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "nuxt-property-decorator";
	import { NavItem } from "~/models/interfaces/NavItem";

	@Component({
		name: "NavItemMobile",
	})
	export default class NavItemMobile extends Vue {
		@Prop({ required: true }) private navItems!: Array<NavItem>;
	}
</script>
