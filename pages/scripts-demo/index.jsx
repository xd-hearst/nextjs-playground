import PageShell from 'components/page-shell';

export default function ScriptDemo() {
	return (
		<PageShell title="Next Script Demo">
			The Next.js Script component, next/script, is an extension of the HTML
			<code class="language-markdown">script</code> element. It enables
			developers to set the loading priority of third-party scripts anywhere in
			their application, outside next/head, saving developer time while
			improving loading performance.
		</PageShell>
	);
}
