/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiClock, FiMinus, FiPlus, FiStar } from 'react-icons/fi';
import Image from 'next/image';
import { HiTag } from 'react-icons/hi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	addToCart,
} from '../../store/cart.slice';
import { Waypoint } from 'react-waypoint';
export default function Menu() {
	const [menuList, setMenuList] = useState(null);
	const getMenu = async () => {
		let response = await fetch('https://myqa.fleksa.com/pyapi/43/menu');
		let data = await response.json();
		setMenuList(data);
	};
	useEffect(() => {
		getMenu();

		return () => {};
	}, []);

	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotalPrice = () => {
		return cart.reduce(
			(accumulator, item) => accumulator + item.quantity * item.price,
			0
		);
	};

	const findProduct = (cart, id) => {
		const filteredResult = cart.find((e) => e.id == id);
		if (filteredResult) {
			return filteredResult;
		}
		return null;
	};

	useEffect(() => {
		console.log('cart', cart);
	}, [cart]);

	const addClass = (val) => {
		var y = document.getElementsByClassName('active-category');
		if (y.length > 0) {
			y[0].classList.remove('active-category');
		}
		document.querySelector(`#${val}`).classList.add('active-category');

		// element.classList.remove('class-1');
	};
	const removeClass = (val) => {
		console.log('val', val);
	};
	const gotoSelected = (val) => {
		const violation = document.getElementById(val);
		window.scrollTo({
			top: violation.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className='min-h-screen'>
			<p className='lg:hidden flex items-center gap-2 truncate w-9/12 absolute top-[10px] left-[8px] font-bold z-10'>
				<span className='icon-arrow-up rotate-[270deg] text-2xl shadow-3xl text-white'></span>
				<span className='text-white text-sm font-normal'>Back</span>
			</p>
			<div className='h-[500px] relative border-b-2 lg:h-[400px] mb-20'>
				<Image
					alt='bg'
					src={
						'https://d1nfw7b4288zmf.cloudfront.net/shop/img/place/prodtestres/6222e5763a3c169a.webp'
					}
					layout='fill'
					objectFit='cover'
				/>
				<div className='banner-section'>
					<div className='w-full'>
						<div className='container p-3 mx-auto'>
							<div className='flex justify-between'>
								<div className=''>
									<h1 className='font-semibold sm:text-3xl md:text-4xl lg:text-5xl'>
										Good Taste
									</h1>
									<p className='pb-4'>Food and drink1</p>
									<p className='flex items-center pb-2'>
										<FiClock />
										<span className='px-2 text-sm font-bold'>
											<span>Today 15:00 - 22:00</span>
										</span>
									</p>
									<div className='flex gap-2 pt-2'>
										<div className='h-[50px]'>
											<button className='bg-white flex p-2 items-center gap-3 rounded w-full'>
												<span className='icon-pickup-filled text-black'></span>
												<p className='text-black font-semibold'>PICKUP</p>
												<span className='icon-edit text-black'></span>
											</button>
										</div>
									</div>
								</div>
								<div className=''>
									<h5 className='border-b-2 border-t1-primary-2 max-w-[60px] text-center mb-2'>
										OFFER
									</h5>
									<div className='max-h-[240px] sm:max-h-[250px] overflow-y-auto'>
										<div className='p-2'>
											<div className='flex'>
												<HiTag size={20} className='mr-2' />
												<p className=''>
													<span className='bg-white text-black font-bold mr-2'>
														ABHOLUNG
													</span>
													<span className=''>
														Discount of 10% on orders above10 €
													</span>
												</p>
											</div>
											<p className='text-[13px]'>ABHOLUNG RABATT </p>
										</div>
										<div className='p-2'>
											<div className='flex'>
												<HiTag size={20} className='mr-2' />
												<p className=''>
													<span className='bg-white text-black font-bold mr-2'>
														PIZZA50
													</span>
													<span className=''>
														Discount of 90% on orders above0 €
													</span>
												</p>
											</div>
											<p className=''>90 % off on Cheeze </p>
										</div>
										<div className='p-2'>
											<div className='flex'>
												<HiTag size={20} className='mr-2' />
												<p className=''>
													<span className='bg-white text-black font-bold mr-2'>
														günstig
													</span>
													<span className=''>
														Discount of 20% on orders above20 €
													</span>
												</p>
											</div>
											<p className=''>20% </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex justify-between'>
				<div className='flex flex-col w-1/4'>
					<div className='sticky top-20'>
						<div className=' min-h-[80vh] justify-end'>
							<div className='flex overflow-auto pl-4 b-2 lg:pl-0 lg:h-[80vh] lg:flex-col items-end lg:pb-6'>
								{menuList?.categories?.map((data, k) => (
									<p
										id={`category-${data.id}`}
										className='text-right px-5 py-2 cursor-pointer'
										key={k}
										onClick={() => gotoSelected(`list-${data.id}`)}
									>
										{data.name_json.english}
									</p>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<div className='m-5'>
						{menuList?.categories?.map((data, k) => (
							<div className='text-black' key={k} id={`list-${data.id}`}>
								<Waypoint
									onEnter={() => addClass(`category-${data.id}`)}
									onLeave={() => removeClass(`category-${data.id}`)}
								/>
								<h5 className='text-black text-center py-3 bg-[#ffffb7]'>
									{data.name_json.english}
								</h5>
								{data.products.map((pro, p) => (
									<div
										key={p}
										className='flex justify-between border-t-2 px-3 my-4 hover:shadow-md hover:ease-in-out'
									>
										<div className='flex flex-col mt-3'>
											{pro.is_popular ? (
												<div className='bg-gray-500 dark:bg-gray-800 h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center'>
													<FiStar size={12} color='white' className='mr-1' />
													<span className='text-xs text-white font-normal'>
														Popular
													</span>
												</div>
											) : null}
											<h5 className='mb-1'>{pro.name_json.english}</h5>
											<small>{pro.description_json.english}</small>
											<p>
												<strong>{pro.price} €</strong>
											</p>
										</div>
										<div className='flex'>
											{pro.image && (
												<img
													src={pro.image}
													alt='product images'
													className='product-images'
												/>
											)}
											{findProduct(cart, pro.id) ? (
												<div className='flex '>
													<div className='flex rounded'>
														<button
															onClick={() =>
																dispatch(decrementQuantity(pro.id))
															}
															className='bg-[#ffee32] flex flex-wrap w-[36px] h-[40px] justify-center items-center rounded-md self-center font-bold transition-all duration-200 overflow-hidden '
														>
															<FaMinus color='black' />
														</button>
														<button className='bg-[#ffee32] flex flex-wrap w-[22px] h-[40px] justify-center items-center  self-center font-bold transition-all duration-200 overflow-hidden '>
															{findProduct(cart, pro.id).quantity}
														</button>
														<button
															onClick={() =>
																dispatch(incrementQuantity(pro.id))
															}
															className='bg-[#ffee32] flex flex-wrap w-[36px] h-[40px] justify-center items-center rounded-md self-center font-bold transition-all duration-200 overflow-hidden '
														>
															<FaPlus color='black' />
														</button>
													</div>
												</div>
											) : (
												<button
													type='button'
													onClick={() => dispatch(addToCart(pro))}
													className='bg-[#ffee32] flex flex-wrap w-[86px] h-[40px] justify-center items-center rounded-md self-center font-bold transition-all duration-200 overflow-hidden '
												>
													ADD {console.log(findProduct(cart, pro.id))}
												</button>
											)}
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col w-1/3 '>
					<div className='sticky top-20'>
						<h4 className='text-center'>Your Cart</h4>
						<div className=' min-h-[80vh]'>
							<div className='flex overflow-auto pl-4 b-2 lg:pl-0 lg:h-[80vh] lg:flex-col lg:pb-6'>
								<div className='overflow-y-auto'>
									{cart.map((item, key) => (
										<div
											key={key}
											className='flex items-center justify-between m-0 py-1 lg:py-2 '
											title=''
										>
											<div className='w-9/12 pr-2 align-left'>
												<p className='p-0 m-0 text-sm sm:text-md font-semibold '>
													{item.name_json.english}
												</p>
											</div>
											<div className='w-4/12'>
												<div className='flex items-center justify-between gap-1'>
													<button
														type='button'
														onClick={() => dispatch(decrementQuantity(item.id))}
														className='text-sm flex items-center justify-center text-white bg-black p-1'
													>
														<FiMinus color='white' />
													</button>
													<span className='text-lg px-2 '>{item.quantity}</span>
													<button
														type='button'
														onClick={() => dispatch(incrementQuantity(item.id))}
														className='text-sm flex items-center justify-center text-white bg-black p-1'
													>
														<FiPlus color='white' />
													</button>
												</div>
											</div>
											<p className='p-0 m-0 w-4/12 text-sm text-right font-semibold '>
												{item.price} €
											</p>
										</div>
									))}
								</div>
								<div className='flex justify-between px-2 lg:px-0 items-center border-b pb-2'>
									<p className='font-bold'>Total</p>
									<p className='font-bold'>{getTotalPrice()} €</p>
								</div>
								<p className='checkout-button'>Checkout</p>
								<div className='flex justify-evenly text-2xl md:flex py-4'>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/visa.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/sofort.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/paypal.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/google-pay.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/mastercard.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/apple-pay.svg' alt='visa' width='30px' />
									</div>
									<div className='text-3xl flex items-center justify-evenly'>
										<img src='/assets/euro.svg' alt='visa' width='30px' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
