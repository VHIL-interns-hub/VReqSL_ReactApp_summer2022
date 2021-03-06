import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { user_name, updateUser } from "../ValidUser";

export default function Login() {

	let navigate = useNavigate()
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const loginUser = async (event) => {
		event.preventDefault()
		const { email, password } = user;
		const res = await fetch('/', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email, password
			})
		});

		const data = res.json()
		if (res.status === 400 || !data) {
			window.alert("Invalid Credentials");
		}
		else {
			window.alert("Login Successful");
			updateUser(email)
			console.log("Valid User = " + user_name)
			navigate("/home")
		}
	}

	let name, value;
	const handleInputs = (event) => {
		name = event.target.name;
		value = event.target.value;
		setUser({ ...user, [name]: value });
	};

	return (
		<section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
			<div class="container py-6 h-100">
				<div class="row d-flex justify-content-center align-items-center h-100">
					<div class="col-xl-10">
						<div class="card rounded-3 text-black">
							<div class="row g-0">
								<div class="col-lg-6">
									<div class="card-body p-md-5 mx-md-4">
										<div class="text-center">
											<h4 class="mt-1 mb-5 pb-1">
												<b>VReqSL</b>
											</h4>
										</div>

										<form method="POST">
											<p style={{ fontSize: "200%" }}>Get Started</p>
											<p style={{ fontSize: "150%", color: "#bdbdbd" }}>
												Sign In
											</p>

											<div class="form-outline mb-4">
												<label class="form-label" for="form2Example11">
													Email :
												</label>
												<input
													type="email"
													id="form2Example11"
													class="form-control"
													placeholder="email"
													name="email"
													value={user.email}
													onChange={handleInputs}
												/>
											</div>

											<div class="form-outline mb-4">
												<label class="form-label" for="form2Example12">
													Password :
												</label>
												<input
													type="password"
													id="form2Example11"
													class="form-control"
													placeholder="password"
													name="password"
													value={user.password}
													onChange={handleInputs}
												/>
											</div>

											{/* <p style={{textAlign: "center", marginTop: "0"}}> OR </p>

												<button
													type="button"
													class="btn btn-light btn-block"
													style={{marginBottom: "10%"}}
												>
													<i
														class="fa-brands fa-google"
														style={{marginRight: "5%"}}
													></i>
													Connect with Google
												</button> */}

											<div class="text-center pt-1 mb-5 pb-1">

												<button
													class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 signIn_btn"
													type="button" onClick={loginUser}
												>
													Sign In
												</button>


												<a class="text-muted" href="#!">
													Forgot password?
												</a>
											</div>

											<div class="d-flex align-items-center justify-content-center pb-4">
												<p class="mb-0 me-2">Don't have an account?</p>
												<NavLink to="/signUP">
													<button
														type="button"
														class="btn btn-outline-danger signUp_btn"
														style={{ marginLeft: "1rem" }}
													>
														Sign Up
													</button>
												</NavLink>

											</div>
										</form>
									</div>
								</div>
								<div class="col-lg-6 d-flex align-items-center gradient-custom-2">
									<div class="text-white px-3 py-4 p-md-5 mx-md-4">
										<h4 class="mb-4">We are more than just a company</h4>
										<p class="small mb-0">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud exercitation
											ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
