import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head />
			<body class="relative bg-x-gradient-grey-200-grey-200-50-white-50">
				<Main />
				<NextScript />
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
					strategy="beforeInteractive"
				></Script>
			</body>
		</Html>
	);
}
