import { Prism } from '@mantine/prism';
import PageShell from 'components/page-shell';
import Script from 'next/script';
import { useEffect } from 'react';

const demoCode = `
	// code omitted for brevity
	<>
		<Script src="https://connect.facebook.net/en_US/sdk.js" strategy="lazyOnLoad />
	</>
  `;
const text = (
	<>
		<p className="mb-2">
			<code class="language-markdown">lazyOnLoad</code> works the same way as
			scripts using <code class="language-markdown">afterInteractive</code>.
			However it will only be loaded during idle time. Next.js uses the{' '}
			<a
				href="https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback"
				_target="blank"
			>
				window.requestIdleCallback
			</a>
			method to check if browser is idle.
		</p>
		<p className="mb-2">
			Third party scripts that have the lowest priorities should be loaded using{' '}
			<code class="language-markdown">lazyOnLoad</code> strategy. For example,
			third party for comments (that is if comments is something not hugely
			important).
		</p>
	</>
);

export default function LazyOnLoad() {
	useEffect(() => {
    // use the following code to see that the script won't be loaded while brower is busy
		for (let i = 0; i <= 10000; i++) {
			if (i === 10000) console.log(i);
		}
	}, []);

	return (
		<PageShell title="lazyOnLoad">
			<div>
				{' '}
				{text}
				<p>
					<strong>Sample Code</strong>
				</p>
				<div className="m-5">
					<Prism
						colorScheme="dark"
						language="js"
						copyLabel="Copy code to clipboard"
						copiedLabel="Code copied to clipboard"
					>
						{demoCode}
					</Prism>
				</div>
			</div>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() => {
					console.log('lazy load');
				}}
			/>
		</PageShell>
	);
}
