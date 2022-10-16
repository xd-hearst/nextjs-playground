import PageShell from 'components/page-shell';

export default function Home() {
	const srcs = [
		'/static/images/nextjs-monster.jpeg',
		'/static/images/nextjs-monster2.jpeg',
		'/static/images/next-monster3.png',
		'/static/images/next-monster4.png',
	];

	const randomIndex = Math.floor(Math.random() * srcs.length);
	return (
		<PageShell title="Next.js Monster at Work">
			<div className="flex">
				<figure>
					<img
						className="h-screen"
						src={srcs[randomIndex]}
						alt="a furry next monster doing programming"
					/>
					<figcaption className="text-xs font-light">
						courtsey: DALL.E
					</figcaption>
				</figure>
			</div>
		</PageShell>
	);
}
