export interface NavItem {
	name: string;
	route: string;
	subMenu: Array<NavItem>;
	subMenuOpen: boolean;
}

export function newNavItem(name = "", route = "", subMenu: Array<NavItem> = [], subMenuOpen = false): NavItem {
	return { name, route, subMenu, subMenuOpen };
}
