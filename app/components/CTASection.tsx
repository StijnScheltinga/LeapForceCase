import React from 'react';
import Image from 'next/image';
import CTAPicture from './CTAPicture';

const CTASection = () => {
	return (
		<section className="max-w-[1440px] flex flex-col gap-16 mx-auto px-[64px] pt-[64px] pb-[96px]">
			<div className="max-w-[864px] mx-auto flex flex-col gap-6">
				<div className="max-w-[642px] mx-auto flex flex-col items-center gap-2">
					<p className="font-ttcommons font-[450] text-[#39494D] text-[15px] leading-[16px] tracking-[0.02em] text-center max-w-[642px] mx-auto">Label</p>
					<h1 className="font-ttcommons font-[600] text-[#212121] text-[40px] leading-[48px] text-center">
						Mandatory title about the{' '}
						<span className="font-gtalpina whitespace-nowrap font-[300] text-[42px]">
							call-to-action{' '}
						</span>
						here
					</h1>
				</div>
				<p className="font-ttcommons font-[450] text-[19px] leading-[24px] text-custom-gray-80 text-center">
					Optional body copy goes here.
				</p>
				<div className="font-ttcommons font-[450] text-[19px] leading-[24px] flex flex-row gap-1 justify-center text-custom-orange">
					<a href="#" className='hover:text-[#A6433A] hover:underline'>
						Optional button
					</a>
					<Image
						src="icons/Arrow Right.svg"
						alt="arrow icon"
						width="24"
						height="24"
						/>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-[24px]'>
				<CTAPicture />
				<CTAPicture />
			</div>
		</section>
	)
}

export default CTASection