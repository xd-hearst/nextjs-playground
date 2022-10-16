import { Prism } from '@mantine/prism';
import PageShell from 'components/page-shell';
import Script from 'next/script';

const demoCode = `	
	// code omitted for brevity
	<>
		<Script src="https://www.google-analytics.com/analytics.js" />
	</>
  `;

export default function AfterInteractive() {
	const text = (
		<>
			<p className="mb-2">
				<code class="language-markdown">afterInteractive</code> strategy are
				injected client-side. It runs after Next.js hydrates the page and is
				injected into the bottom of
				<code class="language-markdown">body</code>. This is the default mode
				for Next Script.
			</p>
			<p className="mb-2">
				Third party scripts such as ads, google analytics should be good
				candidates for this strategy
			</p>
		</>
	);
	return (
		<PageShell title="afterInteractive">
			<div>
				{' '}
				{text}
				<p>Sample Code</p>
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
			<Script src="https://www.google-analytics.com/analytics.js" />
		</PageShell>
	);
}
