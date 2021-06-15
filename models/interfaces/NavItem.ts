export interface NavItem {
	name: string;
	route: string;
	subMenu?: Array<NavItem>;
	subMenuOpen?: boolean;
}
