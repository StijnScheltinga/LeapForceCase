import React from 'react'
import Image from 'next/image'

const CTAPicture = () => {
	return (
		<div className='relative h-[335px] md:h-[515px] w-full bg-[url(/images/Image.png)] bg-cover bg-center bg-no-repeat rounded-[4px]'>
			<div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#141414] opacity-[.80] to-transparent rounded-[4px]'/>
			<div className='absolute bottom-4 right-4 left-4 z-10 items-center flex justify-between items-end gap-2'>
				<div>
					<h3 className='font-ttcommons font-[600] text-[28px] leading-[32px] tracking-wide text-white mb-2'>
						Title
					</h3>
					<p className='font-ttcommons font-[450] text-[19px] leading-[24px] text-[#FAFAFA50]'>
						Supporting text about the call-to-action goes here.
					</p>
				</div>
				<a href="#" className='flex-shrink-0 w-[56px] h-[56px]'>
					<Image
						src="icons/Arrow Button.svg"
						alt="arrow icon"
						width={56}
						height={56}
					/>
				</a>
			</div>
		</div>
	)
}

export default CTAPicture