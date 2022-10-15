import Link from 'next/link';
import { useRouter } from 'next/router';
import { menuItems } from 'data/menu';
import { quotes } from 'data/quotes';

function renderMenu(items) {
	const router = useRouter();
	const menuList = items.map(({ href, title, children: subMenus }) => (
		<MenuItem
			title={title}
			href={href}
			isCurrent={router.asPath === href}
			subMenus={subMenus}
		/>
	));

	return <ul className="flex-col min-w-full flex list-none">{menuList}</ul>;
}

function MenuItem({ title, href, isCurrent, subMenus }) {
	return (
		<li className="mx-4 mb-2 rounded-lg" key={title}>
			<Link href={href}>
				<a
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
						<h1 class="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
							Next.js Playground
						</h1>
					</div>
					<div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
						<div class="flex flex-col">
							<hr class="my-4 min-w-full"></hr>
							<nav>{renderMenu(menuItems)}</nav>
						</div>
					</div>
				</aside>
				<main className="md:ml-64">
					<div className="container mx-auto max-w-full">{children}</div>
				</main>
			</div>
			<footer class="py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center">
				<p class="text-gray-700 mb-6 lg:mb-0"></p>
				<ul class="list-unstyled flex">
					<li class="mr-6">
						<a
							class="text-gray-700 hover:text-gray-900 font-medium block text-sm"
							target="_blank"
							rel="noreferrer"
							href="https://www.creative-tim.com/presentation?ref=mtdk"
						>
							About
						</a>
					</li>
					<li class="mr-6">
						<a
							class="text-gray-700 hover:text-gray-900 font-medium block text-sm"
							target="_blank"
							rel="noreferrer"
							href="https://www.creative-tim.com/blog/?ref=mtdk"
						>
							Blog
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}
