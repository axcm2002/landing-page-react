import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import  Card  from "../cards";
import  Footer  from "../footer";
import  Jumbotron  from "../jumbotron";
import  Navbar  from "./navbar";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="container">
				<div className="jumbotronfondo">
					<Jumbotron></Jumbotron>

				</div>
				<div className="cardsbox">
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>

			</div>

			<Footer></Footer>
			
		</div>


	);
};

export default Home;
