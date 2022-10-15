export default function Home() {
	return (
		<div className="flex h-full flex-col p-5">
			<h1 className="text-4xl mb-5 font-bold">Next Script Demo</h1>
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
					<a>lazyLoad</a>
				</p>
			</div>
		</div>
	);
}
