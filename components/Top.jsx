import Image from 'next/image';
import React from 'react';

export default function Top() {
	return (
		<div className='bg-white h-[80px]  flex gap-4 justify-between px-5 sticky top-0 z-10'>
			<div className=' grid  justify-center items-center ml-4'>
				<div className='flex justify-center'>
					<Image
						src='https://d1nfw7b4288zmf.cloudfront.net/development/shop/img/logo/50/3c5bfae81d49c13e0d0030ba4b45394342630bfe8ff79da62b158a2af9d915a9.jpg'
						alt='Picture of the author'
						width={50}
						height={50}
					/>
				</div>
			</div>
			<div className='flex gap-3'>
				<div className=' menu-main'>
					<div className='master-menu'>
						<div className='text-black menu-list'>
							<h5 className=' text-black list-single'>Home</h5>
						</div>
						<div className='text-black menu-list active-menu'>
							<h5 className='text-black list-single '>Menu</h5>
						</div>
						<div className='text-black menu-list'>
							<h5 className='text-black list-single'>Discover</h5>
						</div>
						<div className='text-black menu-list'>
							<h5 className='text-black list-single'>Reservation</h5>
						</div>
						<div className='text-black menu-list'>
							<h5 className='text-black list-single'>Gallery</h5>
						</div>
						<div className='text-black menu-list'>
							<h5 className='text-black list-single'>Contact</h5>
						</div>
						<div className='text-black menu-list'>
							<h5 className='text-black list-single'>Login</h5>
						</div>
					</div>
				</div>
				<div className='h-auto flex items-center justify-center'>
					<Image
						src='https://goodtaste.fleksa.de/assets/svg/flag-united-kingdom.svg'
						alt='language switch icon'
						width={45}
						height={45}
						layout='intrinsic'
						className='object-cover rounded-full cursor-pointer block '
					/>
				</div>
			</div>
		</div>
	);
}
