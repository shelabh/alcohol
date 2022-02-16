import React from 'react';


const Header = () => (
	<div className="w-full h-full ">
		<div className="flex  justify-center   items-center w-full h-screen bg-gradient-to-br from-neutral-500 via-neutral-900 to-black  pt-[5%]"> 
		
			<div className="text-white pt-11 ">
				<div className="text-9xl  text-right ">
					ONE
				</div>
				<div className=" py-9 w-[30.5%] text-right">
					A quick way to tell if another round will be fun or a mistake	
					
				</div>
				<div className="text-9xl text-right "> 
					DRINK
				</div>
			</div>
			<div className="">
				<img src="/images/wine_bottle.png" />
			</div>
			<div className="text-9xl  pt-11">
				<div className="text-more  font-Montserrat ">
					MORE
				</div>
			</div>
		</div>
			
		
      </div>
);
  
export default Header;