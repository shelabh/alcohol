import React from 'react';


const Header = () => (
	<div className="w-full h-full   ">
		<div className="flex   flex-col justify-end   w-full h-screen bg-gradient-to-br from-neutral-500 via-neutral-900 to-black  pt-[5%]"> 
			<div className="flex justify-center   items-center">
				<div className="text-white pt-11  ">
					<div className="text-9xl  text-right ">
						ONE
					</div>
					<div className=" py-9    text-right">
						<span>
							A quick way to <br />tell if another round <br />will be <span className="text-fun">fun</span> or a <span className="text-mistake">mistake</span>
						</span>
					</div>
					<div className="text-9xl text-right "> 
						DRINK
					</div>
				</div>
				<div className="">
					<img src="/images/wine_bottle.png" />
				</div>
				<div className="text-9xl  pt-11  z-10">
					<div className="text-more  font-Montserrat ">
						MORE
					</div>
				</div>
				<div className=" absolute ml-[23%]  w-20 ">
					<img src="/images/FEEL_THE_ECSTASY.svg" />
				</div>
			</div>
			
			<div className="flex pt-[6.5%] px-[5%] space-x-10 ">
				<div className="pt-5">
					<svg width="16" height="46" viewBox="0 0 16 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.29289 45.7071C7.68342 46.0976 8.31658 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95262 37.5384 1.31946 37.5384 0.928932 37.9289C0.538408 38.3195 0.538408 38.9526 0.928932 39.3431L7.29289 45.7071ZM7 0L7 45H9L9 0L7 0Z" fill="#B11226"/>
					</svg>
				</div>
				<div className=" w-0.5 h-[5rem]  bg-down "></div>
				<div className="text-down flex space-x-5  text-sm pt-5">
					<a href="#">
						FACEBOOK
					</a>
					<a href="#">
						INSTAGRAM
					</a>
					<a href="#">
						TWITTER
					</a>
				</div>
			</div>	
		</div>	
		<div>
			WHY US
		</div>
      </div>
);
  
export default Header;