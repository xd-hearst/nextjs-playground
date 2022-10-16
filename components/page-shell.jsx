export default function PageShell({ children, title }) {
	return (
		<div className="flex h-full flex-col p-5">
			<h1 className="text-2xl mb-5 font-bold">{title}</h1>
			{children}
		</div>
	);
}
