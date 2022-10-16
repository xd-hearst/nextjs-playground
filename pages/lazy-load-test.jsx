import Script from 'next/script';

export default function LazyLoadTest() {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu neque
				ullamcorper, pellentesque urna eu, sollicitudin massa. Duis
				sollicitudin, est et imperdiet finibus, neque eros dapibus mi, vitae
				congue libero lacus molestie erat. Cras convallis lacus gravida neque
				gravida rutrum. Curabitur ultricies, nulla eget imperdiet imperdiet,
				sapien purus cursus turpis, nec aliquam nisl nibh in lacus. Vivamus
				venenatis placerat magna eu blandit. Vivamus vitae nunc quis massa
				ultrices eleifend quis eget quam. Aenean dignissim rhoncus est sit amet
				tincidunt. Etiam a sapien varius, aliquet orci eget, elementum justo.
				Morbi quis arcu porttitor, sollicitudin eros sit amet, venenatis metus.
				In luctus arcu metus. Curabitur sem nisl, dictum non rutrum nec, sodales
				ut leo. Donec luctus at massa eu convallis. Mauris nec risus nec lorem
				auctor consectetur porttitor nec leo.
			</p>
			<p>
				Fusce pharetra ligula id arcu semper, ac laoreet risus pretium. Morbi
				vitae mi quis urna cursus ultricies. Aliquam varius tristique efficitur.
				Nulla venenatis lobortis sapien quis scelerisque. Proin interdum nunc a
				lacus interdum dignissim. Orci varius natoque penatibus et magnis dis
				parturient montes, nascetur ridiculus mus. Nulla facilisi. Nam magna
				magna, placerat in malesuada sit amet, blandit vel mauris. Donec vel
				tortor aliquam, iaculis magna ac, feugiat felis. Mauris porttitor at
				tortor a fringilla. Integer auctor, urna sit amet volutpat blandit, eros
				risus tincidunt libero, at tristique sapien velit eu purus. Donec in
				laoreet sapien. Vestibulum accumsan ullamcorper vehicula. Aliquam
				tincidunt volutpat tincidunt. Nunc eu risus non magna fringilla
				tristique ac ultricies dui. Proin eget pretium arcu. Nulla consequat in
				ex id porttitor. Donec vehicula lacinia tincidunt. Cras auctor
				sollicitudin nisl, sed porta lorem convallis eget. Mauris eget lectus
				fermentum, tempus nunc vitae, commodo turpis. Mauris consectetur blandit
				nisi viverra pulvinar. Proin viverra diam nec ipsum feugiat, accumsan
				fringilla lectus tempor. Duis at sapien tellus. Mauris a accumsan ex.
				Nam lorem turpis, ornare quis commodo id, consequat non ipsum. Morbi
				lobortis sed lacus id porttitor. Aliquam ultrices cursus sollicitudin.
				Fusce nec nisl velit. Praesent eget tempus tellus. Ut a turpis lacinia,
				consequat nisi ut, efficitur nisl. Phasellus ac pretium diam. Ut risus
				lacus, placerat ut viverra a, fermentum sit amet ligula. Sed quis
				suscipit dolor. Praesent id egestas leo, et maximus libero. Mauris quis
				varius ligula. Nam vitae massa hendrerit, eleifend turpis a, feugiat
				arcu. Integer eu augue tellus.
			</p>
			<Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
			/>
		</>
	);
}

LazyLoadTest.getLayout = function getLayout(page) {
	return <>{page}</>;
};
