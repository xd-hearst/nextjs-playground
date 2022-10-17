import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="scroll-smooth">
				<Head>
					<link
						rel="icon"
						href="/static/favicon.svg"
						sizes="any"
						type="image/svg+xml"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* 
					Turn on the following to see beforeInteractive script in action
					<Script
						src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
						strategy="beforeInteractive"
					></Script> */}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
