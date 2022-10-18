import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItems } from 'data/menu';
import { quotes } from 'data/quotes';

function renderMenu(items) {
	const router = useRouter();
	const menuList = items.map(({ href, title, target, children: subMenus }) => (
		<MenuItem
			key={title}
			title={title}
			href={href}
			target={target}
			isCurrent={router.asPath === href}
			subMenus={subMenus}
		/>
	));

	return <ul className="flex-col min-w-full flex list-none">{menuList}</ul>;
}

function MenuItem({ title, href, isCurrent, subMenus, target = undefined }) {
	return (
		<li className="mx-4 mb-2 rounded-lg">
			<Link href={href}>
				<a
					target={target}
					className={`flex items-center gap-4 text-sm font-light px-4 py-3 rounded-lg cursor-pointer ${
						isCurrent && 'bg-slate-500 text-white'
					}`}
				>
					{title}
				</a>
			</Link>
			{Array.isArray(subMenus) ? renderMenu(subMenus, 2) : null}
		</li>
	);
}

export default function Layout({ children }) {
	const randomIndex = Math.floor(Math.random() * 10);
	const { text, by } = quotes[randomIndex] ?? quotes[0];
	const quoteRandom = `${text} -- ${by}`;
	return (
		<div className="min-h-screen flex flex-col text-base font-sans">
			<header className="bg-slate-100 sticky top-0 h-14 flex justify-center items-center text-sm italic">
				{quoteRandom}
			</header>
			<div className="flex flex-col md:flex-row flex-1">
				<aside className="h-screen fixed top-0 md:left-0 -left-64 flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300">
					<div className="mt-2 text-center w-full inline-block">
						<h1 className="text-gray-900 text-xl font-serif leading-normal mt-0 mb-2 flex">
							<span className="mr-2">
								<img src="/static/favicon.svg" width="32" />
							</span>{' '}
							Next Playground{' '}
						</h1>
					</div>
					<div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
						<div className="flex flex-col">
							<hr className="my-4 min-w-full"></hr>
							<nav>{renderMenu(menuItems)}</nav>
							<div className="mx-16 justify-center">
								{' '}
								<a
									className="text-sm text-gray-500 transition hover:text-gray-600"
									target="_blank"
									rel="noopener"
									href="https://github.com/xd-hearst/nextjs-playground"
								>
									<svg
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										class="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-6 w-6"
									>
										<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div></div>
				</aside>
				<main className="md:ml-64">
					<div className="container mx-auto max-w-full">{children}</div>
				</main>
			</div>
			<footer className="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
				<p className="text-gray-700 mb-6 lg:mb-0"></p>
				<ul className="list-unstyled flex">
					<li className="mr-6">
						<a
							className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
							target="_blank"
							rel="noreferrer"
							href="/about"
						>
							About
						</a>
					</li>
					<li className="mr-6">
						<a
							className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
							target="_blank"
							href="https://next-next-please.vercel.app/"
						>
							Blog
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
