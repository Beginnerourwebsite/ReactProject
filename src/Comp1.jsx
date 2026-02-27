import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
// import Comp2 from "./Comp2";
// import Comp3 from "./Comp3";

export default function Comp1() {
	//props self child ko data pass krta ha
	//but child k child ko data pass nhi krskta 

	//
	let NavbarManusName = [
		"Home",
		"About",
		"Contact",
		"Blog",
		"Careers",
		"Support",
		"FAQ",
		"Terms of Service",
		"Privacy Policy"];
	return <div>Comp1
		<Navbar />
		<MainContent NavbarManusName={NavbarManusName} />

	</div>;
}


