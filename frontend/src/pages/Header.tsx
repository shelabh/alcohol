import React from 'react';

const Header = () => (
	<div className=" fixed w-full ">
		<div className="flex w-full text-white justify-around pt-5 font-Montserrat"> 
			<div className="text-4xl ">
				ALCOHOL
			</div>
			<div className="flex space-x-10 pt-5 text-sm">
				<a href="#" className="">
					ABOUT US
				</a>
				<a href="#" className="">
					ORDER
				</a>
				<a href="#" className="">
					CONTACT US
				</a>
			</div>
			<div className="pt-3 mr-[5%] flex sapce-x-10">
				<button className="outline outline-2 py-1.5 px-[35%] ">
					<span>
						SIGNUP
					</span>
				</button>
				<button className="ml-[55%]">
					<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.875 26.25H4.375V23.3333H21.875V26.25ZM30.625 18.9583H4.375V16.0417H30.625V18.9583ZM21.875 11.6667H4.375V8.75H21.875V11.6667Z" fill="white"/>
					</svg>
				</button>
			</div>
		</div>
      </div>
  );
  
  export default Header;