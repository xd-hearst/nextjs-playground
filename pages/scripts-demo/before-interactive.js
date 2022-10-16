import { Prism } from '@mantine/prism';
import PageShell from 'components/page-shell';

const demoCode = `
import Script from 'next/script';

<Html>
  <Head />
  <body>
    <Main />
    <NextScript />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      strategy="beforeInteractive"
    ></Script>
  </body>
  </Html>
  `;

	const text = (
	<>
		<p className="mb-2">
			Used for critical scripts. This strategy only works inside _document.js
			and is designed to load scripts that are needed by the entire site (i.e.
			the script will load when any page in the application has been loaded
			server-side).
		</p>
		<p className="mb-2">
			Scripts using this strategy should be placed inside `_document.js`. If
			placed in a component, the timing and ordering of the script loading is
			not guaranteed
		</p>
		<p className="mb-2">
			Scripts that you would normally load in the head should use{' '}
			<code language="markdown">beforeInteractive</code>, such as Polyfills,
			device detecting script.
		</p>
	</>
);

export default function BeforeInteractive() {
	
	return (
		<PageShell title="beforeInteractive">
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
		</PageShell>
	);
}
