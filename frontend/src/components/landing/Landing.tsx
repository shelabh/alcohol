import React from 'react';
import wine_bottle from '../images/wine_bottle.png'
import Image from 'next/image'

const Header = () => (
	<div className="w-full h-full ">
		<div className="flex w-full h-screen bg-gradient-to-br from-neutral-500 via-neutral-900 to-black justify-center pt-[10%]"> 
			<div className="text-white">
				<div>
					left
				</div>
			</div>
			<div className="">
				<Image 
					src={wine_bottle} 
					height={738}
					width={700}
				
					
				
				 />
			</div>
			<div className="text-white">
				rigth
			</div>
		</div>
      </div>
);
  
export default Header;