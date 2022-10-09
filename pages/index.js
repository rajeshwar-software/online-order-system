import Head from 'next/head';
import Bottom from '../components/Bottom';
import Menu from '../components/Menu';
import Top from '../components/Top';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Online ordering System </title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Top />
			<Menu />
			<Bottom />
		</div>
	);
}
