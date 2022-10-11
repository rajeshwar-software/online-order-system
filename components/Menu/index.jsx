/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiClock, FiMinus, FiPlus, FiStar } from 'react-icons/fi';
import Image from 'next/image';
import { HiTag } from 'react-icons/hi';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import {
	incrementQuantity,
	decrementQuantity,
	removeFromCart,
	addToCart,
} from '../../store/cart.slice';
import { Waypoint } from 'react-waypoint';
import { BsArrowLeft } from 'react-icons/bs';
export default function Menu() {
	const [menuList, setMenuList] = useState(null);
	const [productList, setProductList] = useState(null);
	const [showOrders, setShowOrders] = useState(false);

	const getMenu = async () => {
		let response = await fetch('https://myqa.fleksa.com/pyapi/43/menu');
		let data = await response.json();
		setMenuList(data);
		setProductList(data);
	};
	useEffect(() => {
		getMenu();

		return () => {};
	}, []);

	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotalPrice = () => {
		return cart
			.reduce(
				(accumulator, item) => accumulator + item.quantity * item.price,
				0
			)
			.toFixed(2);
	};

	const findProduct = (cart, id) => {
		const filteredResult = cart.find((e) => e.id == id);
		if (filteredResult) {
			return filteredResult;
		}
		return null;
	};

	const searchProduct = (menuList, keyword) => {
		if (keyword) {
			const category = menuList.categories;

			const filteredArray = category.filter((element) => {
				if (element.name_json.english.toLowerCase() === keyword.toLowerCase()) {
					return true;
				}

				return false;
			});

			console.log(filteredArray);
			setProductList(filteredArray);
			// console.log('menuList', menuList);
			// console.log('e', e);

			// console.log('category', category);
			// const found = category.some((cat) => cat.name_json.english === keyword);
			// console.log('found', found);
		} else {
			setProductList(menuList);
		}
	};

	useEffect(() => {
		// console.log('cart', cart);
	}, [cart]);

	const addClass = (val) => {
		var y = document.getElementsByClassName('active-category');
		if (y.length > 0) {
			y[0].classList.remove('active-category');
		}
		document.querySelector(`#${val}`).classList.add('active-category');
		const violation = document.getElementById(val);

		// element.classList.remove('className-1');
	};
	const removeClass = (val) => {
		// console.log('val', val);
	};
	const gotoSelected = (val) => {
		const violation = document.getElementById(val);
		console.log('violation', violation);
		window.scrollTo({
			top: violation.offsetTop,
			behavior: 'smooth',
		});
	};

	return (
		<div className='min-h-screen'>
			<p className='lg:hidden flex items-center gap-2 truncate w-9/12 absolute top-[10px] left-[8px] font-bold z-10'>
				<BsArrowLeft color='white' size={'20'} />
				<span className='text-white text-sm font-normal'>Back</span>
			</p>
			<div className='h-[500px] relative border-b-2 lg:h-[400px] lg:mb-20'>
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
			<div className='block lg:hidden'>
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

			<div className='flex justify-between flex-col lg:flex-row'>
				<div className='sticky top-0 z-1 bg-white flex flex-col lg:w-1/4 w-full'>
					<div className='sticky top-20'>
						<div className=' sticky h-[70px] z-1 -top-20 lg:min-h-[80vh] justify-end overflow-hidden'>
							<div className='flex overflow-auto pl-4 b-2 lg:pl-0 lg:h-[80vh] lg:flex-col items-end lg:pb-6'>
								<div className='lg:flex hidden items-center shrink-0 lg:justify-end mb-4 mr-2 '>
									<div className='relative'>
										<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
											<button
												type='button'
												title='search'
												className='p-1 focus:outline-none focus:ring'
											>
												<svg
													fill='currentColor'
													viewBox='0 0 512 512'
													className='w-4 h-4 text-gray-800'
												>
													<path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
												</svg>
											</button>
										</span>
										<input
											type='search'
											name='Search'
											placeholder='Search...'
											onChange={(e) => searchProduct(menuList, e.target.value)}
											className='w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-violet-600'
										/>
									</div>
								</div>
								{menuList?.categories?.map((data, k) => (
									<p
										id={`category-${data.id}`}
										className='text-right px-5 py-2 cursor-pointer flex items-center shrink-0 lg:justify-end'
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
				<div className='flex flex-col flex-1 '>
					<div className='lg:m-5 m-6'>
						{productList &&
							productList?.categories?.map((data, k) => (
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
											<div className='flex flex-col mt-3 w-8/12'>
												{pro.is_popular ? (
													<div className='mb-2 max-w-[70px] text-white bg-black py-[1px] rounded flex items-center justify-center gap-1'>
														<FiStar size={12} color='white' className='mr-1' />
														<span className='text-xs text-white font-normal'>
															Popular
														</span>
													</div>
												) : null}
												<h5 className='mb-1'>{pro.name_json.english}</h5>
												<small className='mr-5'>
													{pro.description_json.english}
												</small>
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
														ADD
													</button>
												)}
											</div>
										</div>
									))}
								</div>
							))}
					</div>
				</div>
				<div className='flex flex-col lg:w-1/3 w-full'>
					{cart.length > 0 ? (
						<div className=''>
							{showOrders ? (
								<div className='fixed left-0 right-0  w-full flex justify-between p-2 items-center z-30 lg:hidden bg-white relative'>
									<a
										className='font-semibold flex items-center p-2 fixed z-30 bottom-[15px] left-[8px] right-[8px] rounded h-[50px] bg-[#ffee32]'
										type='button'
									>
										<div className='flex w-full flex-1 items-center'>
											<span className='relative'>
												<FiShoppingBag color='black' size={25} />
												<span className='absolute font-bold text-[10px] rounded-full bottom-[1px] right-[-6px] w-4 h-4 bg-white flex items-center justify-center animate-bounce'>
													{cart.length > 0 ? cart.length : '0'}
												</span>
											</span>
											<p className='w-full flex justify-between items-center'>
												<span className='font-bold flex-1 text-center'>
													Go to checkout
												</span>
												<span className='text-sm font-semibold'>
													{getTotalPrice()} €
												</span>
											</p>
										</div>
									</a>
								</div>
							) : (
								<button
									className='lg:hidden font-semibold flex items-center p-2 rounded bg-[#ffee32] fixed z-30 bottom-[15px] left-[8px] right-[8px] h-[50px]'
									type='button'
									onClick={() => setShowOrders(true)}
								>
									<div className='flex w-full flex-1 items-center'>
										<span className='relative'>
											<FiShoppingBag color='black' size={25} />
											<span className='absolute font-bold text-[10px] rounded-full bottom-[1px] right-[-6px] w-4 h-4 bg-white flex items-center justify-center animate-bounce'>
												{cart.length > 0 ? cart.length : '0'}
											</span>
										</span>
										<p className='w-full flex justify-between items-center'>
											<span className='font-bold flex-1'>View order</span>{' '}
											<span className='text-sm'>{getTotalPrice()} €</span>
										</p>
									</div>
								</button>
							)}
							<div
								className={`fixed ${
									showOrders ? 'translate-y-0' : 'translate-y-[600px]'
								} z-20 -bottom-[15%] left-0 right-0 p-2 bg-white  transition-all duration-500 rounded-lg`}
							>
								<div className='flex justify-between items-center py-4'>
									<h3 className='font-bold text-xl'>Your Order</h3>
									<button
										type='button'
										onClick={() => setShowOrders(false)}
										className='p-2 rounded-full border w-8 h-8 flex justify-center items-center bg-black text-white'
									>
										<FaTimes color={'white'} size={20} />
									</button>
								</div>
								<div className='relative h-[500px] bg-white w-full overflow-y-auto'>
									<div className='max-h-[80%] border-b-2 border-gray-300 pb-2 overflow-y-auto'>
										<div className='overflow-y-auto'>
											{cart.map((item, key) => (
												<div
													key={key}
													className='flex items-center justify-between m-0 mr-3 py-1 lg:py-2 '
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
																onClick={() =>
																	dispatch(decrementQuantity(item.id))
																}
																className='text-sm flex items-center justify-center text-white bg-black p-1'
															>
																<FiMinus color='white' />
															</button>
															<span className='text-lg px-2 '>
																{item.quantity}
															</span>
															<button
																type='button'
																onClick={() =>
																	dispatch(incrementQuantity(item.id))
																}
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
									</div>
								</div>
							</div>
							{showOrders ? (
								<div className='bg-black opacity-30 fixed top-0 left-0 right-0 bottom-0 z-[10] h-screen'></div>
							) : null}
						</div>
					) : null}
					<div className='sticky hidden lg:block top-20'>
						<h4 className='text-center'>Your Cart</h4>
						<div className=' min-h-[80vh]'>
							<div className='flex overflow-auto pl-4 b-2 lg:pl-0 h-[95vh] flex-col lg:pb-6'>
								<div className='overflow-y-auto'>
									{cart.map((item, key) => (
										<div
											key={key}
											className='flex items-center justify-between m-0 mr-3 py-1 lg:py-2 '
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
								{cart.length > 0 ? (
									<div>
										<div className='flex justify-between px-2 lg:px-0 items-center border-b mr-3  pb-2'>
											<p className='font-bold'>Total</p>
											<p className='font-bold '>{getTotalPrice()} €</p>
										</div>
										<p className='checkout-button'>Checkout</p>
									</div>
								) : (
									<div>
										<img src='/assets/cart-empty.svg' alt='Empty-cart' />
										<p className='text-sm sm:text-lg text-center text-gray-500 pt-4'>
											Please select at least one product to place an order
										</p>
									</div>
								)}

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
