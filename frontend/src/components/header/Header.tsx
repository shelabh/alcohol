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
			<div className="pt-3">
				<button className="outline outline-2 py-1.5 px-[35%]">
					<span>
						SIGNUP
					</span>
					
				</button>
			</div>
		</div>
      </div>
  );
  
  export default Header;