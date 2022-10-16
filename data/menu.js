export const menuItems = [
	{
		href: '/',
		title: 'Next.js Monster',
	},
	{
		href: '/scripts-demo',
		title: 'Next Script Demo',
		children: [
			{
				href: '/scripts-demo/before-interactive',
				title: 'beforeInteractive',
			},
			{
				href: '/scripts-demo/after-interactive',
				title: 'afterInteractive',
			},
			{
				href: '/scripts-demo/lazy-load',
				title: 'lazyOnLoad',
			},
		],
	},
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/contact',
		title: 'Contact',
	},
];
