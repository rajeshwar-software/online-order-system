import React, { useState, useEffect } from 'react';
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { AiOutlineApple } from 'react-icons/ai';
import Image from 'next/image';
import { BsArrowUpShort } from 'react-icons/bs';

export default function Bottom() {
	const [showTopBtn, setShowTopBtn] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className='bg-[#222222] p-5 text-white'>
			<footer className='bottom-0 container '>
				<div className='flex flex-row justify-between '>
					<div className=' text-white flex flex-col flex-1'>
						<p>Gelastraße 92</p>
						<p>60388 Frankfurt am Main</p>
						<p>hello@fleksa.com</p>
						<p>+49 69120063308</p>
					</div>
					<div className='flex flex-col items-center justify-center gap-2 flex-1'>
						<h5 className='m-0 p-0'>Online ordering System</h5>
						<p className='m-0 p-0'>powered By</p>
						<Image
							src='https://goodtaste.fleksa.de/assets/svg/fleksa-logo.svg'
							alt='Picture of the author'
							width={80}
							height={20}
							className='m-0 p-0'
						/>
					</div>
					<div className='flex flex-col gap-3 justify-center flex-1'>
						<div className='flex flex-row gap-3 justify-center'>
							<div className='border border-white rounded-full w-[40px] h-[40px] flex items-center'>
								<FiTwitter size={25} className='m-1 mx-auto' />
							</div>

							<div className='border border-white rounded-full w-[40px] h-[40px] flex items-center'>
								<FiFacebook size={25} className='m-1 mx-auto' />
							</div>
							<div className='border border-white rounded-full w-[40px] h-[40px] flex items-center'>
								<FiInstagram size={25} className='m-1 mx-auto' />
							</div>
							<div className='border border-white rounded-full w-[40px] h-[40px] flex items-center'>
								<AiOutlineApple size={28} className='m-1 mx-auto' />
							</div>
							<div className='border border-white rounded-full w-[40px] h-[40px]  justify-self-center'>
								<div className='w-[20px] h-[20px] mx-auto mt-2'>
									<Image
										src='https://goodtaste.fleksa.de/assets/svg/app/eatarian.svg'
										alt='eatarian'
										width={20}
										height={20}
										layout={'responsive'}
									/>
								</div>
							</div>
						</div>
						<div className='flex gap-2 justify-center'>
							<div>
								<small>©️2021 Fleksa </small>
							</div>
							<div>
								<small>Terms & Conditions |</small>
							</div>
							<div>
								<small>Privacy Policy | </small>
							</div>
							<div>
								<small> Imprint</small>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className='top-to-btm'>
				{showTopBtn && (
					<BsArrowUpShort
						color='black'
						className='icon-position icon-style'
						onClick={goToTop}
					/>
				)}
			</div>
		</div>
	);
}
