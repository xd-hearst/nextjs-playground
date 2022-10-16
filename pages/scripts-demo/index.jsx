import PageShell from 'components/page-shell';

export default function Home() {
	return (
		<PageShell title="Next Script Demo">
			<div className="text-2xl">
				There are four loading strategies for Next Js.
			</div>
			<div>
				<p>
					<a>beforeInteractive</a>
				</p>
				<p>
					<a>afterInteractive</a>
				</p>
				<p>
					<a>lazyLoaagd</a>
				</p>
			</div>
		</PageShell>
	);
}
