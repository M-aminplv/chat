'use client'
import {
	EmailOutlined,
	LockOutlined,
	PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const form = ({ type }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

  const onSubmit = async (data) =>{console.log(data);}
	return (
		<div className="auth">
			<div className="content">
				<img src="assets/logo.png" alt="logo" className="logo" />

				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					{type === "register" && (
						<div>
							<div className="input">
								<input
									defaultValue=""
									{...register("username", {
										required: "Usernaem is required",
										validate: (value) => {
											if (value.length < 3) {
												return "Username must be at least 3 characters and contain at least on special character";
											}
										},
									})}
									type="text"
									placeholder="Username"
									className="input-field"
								/>
								<PersonOutline xs={{ color: "#737373" }} />
							</div>
							{errors.username && (
								<p className="text-red-500">{errors.username.message}</p>
							)}
						</div>
					)}
					<div>
						<div className="input">
							<input
								defaultValue=""
								{...register("email", { required: "Email is required" })}
								type="email"
								placeholder="Email"
								className="input-field"
							/>
							<EmailOutlined xs={{ color: "#737373" }} />
						</div>
						{errors.email && (
							<p className="text-red-500">{errors.email.message}</p>
						)}
					</div>
					<div>
						<div className="input">
							<input
								defaultValue=""
								{...register("password", {
									required: "Password is required",
									validate: (value) => {
										if (
											value.length < 5 ||
											!value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/.]/)
										) {
											return "Password must be at least 5 characters and contain at least on special character";
										}
									},
								})}
								type="password"
								placeholder="Password"
								className="input-field"
							/>
							<LockOutlined xs={{ color: "#737373" }} />
						</div>
						{errors.password && (
							<p className="text-red-500">{errors.password.message}</p>
						)}
					</div>

					<button className="button" type="submit">
						{type === "register" ? "Join Free" : `let's Chat`}
					</button>
				</form>

				{type === "register" ? (
					<Link href="/" className="link">
						<p className="text-center">Already have an acount? Sign In Here</p>
					</Link>
				) : (
					<Link href="/register" className="link">
						<p className="text-center">Don't have an account? Register Here</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default form;
