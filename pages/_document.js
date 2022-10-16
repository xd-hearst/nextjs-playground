import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" className="scroll-smooth">
				<Head>
					<link rel="shortcut icon" href="/static/code.svg" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
