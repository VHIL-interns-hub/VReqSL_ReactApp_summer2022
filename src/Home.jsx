import React, { useEffect } from "react";
import Card from "./Card";
import Login from "./Login/Login";
import SignUp from "./Login/SignUP";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import TableDemo from "./table"
import AddOn from "./AddOn";
import TrackBar from "./Trackbar";
import Userstore from "./store/Userstore";
import { observer } from "mobx-react";
import async from "hbs/lib/async";
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom"

export default function Home() {
	const navigate = useNavigate();
	const callHomePage = async () => {
		try {
			const res = await fetch('/home', {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				credentials: "include"
			})
			const data = await res.json;
			if (!res.status === 200) {
				const error = new Error(res.error);
				throw error;
				navigate('/');
			}

		} catch (err) {
			console.log(err)
			navigate('/');
		}
	}
	useEffect(() => {
		callHomePage();
	}, []);
	return (

		<div>
			<div id="viewport">
				<SideBar />
				<div id="content">
					<div class="container-fluid">
						<div class="above-navbar">
							<span class="section-heading"> Cataloging </span>
							<AddOn />
						</div>
						<div class="content-area">
							<Navbar title="Home" />
							<TrackBar />
							<div>

								{/* Table component below header */}
								<TableDemo />
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
