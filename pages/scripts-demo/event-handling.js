import { Prism } from '@mantine/prism';
import PageShell from 'components/page-shell';

const demoCode = `
import Script from 'next/script';
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
      strategy="afterInteractive"
			onLoad={() => {
          console.log('script loaded')
        }}
			onReady={() => {
          console.log('script is ready')
        }}
			onError={() => {
          console.log('error loading script')
        }}
    ></Script>
  
  `;

const text = (
	<>
		<p className="mb-2">
			Next Script uses the html <code language="markedown">script</code>. It
			provides 3 events: `onLoad`, `onReady`, `onError`.
		</p>
		<p className="mb-2">
			For scripts loaded using{' '}
			<code language="markedown">beforeInteractive</code>, `onLoad` event is not
			available.
		</p>
	</>
);

export default function EventHandling() {
	return (
		<PageShell title="Event Handling">
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
