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
				href: '/scripts-demo/lazy-on-load',
				title: 'lazyOnLoad',
			},
			{
				href: '/scripts-demo/event-handling',
				title: 'Script Events',
			},
		],
	},
];
