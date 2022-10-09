import Head from 'next/head';
import Bottom from '../components/Bottom';
import Menu from '../components/Menu';
import Top from '../components/Top';

export default function Home() {
	return (
		<div>
			<Top />
			<Menu />
			<Bottom />
		</div>
	);
}
