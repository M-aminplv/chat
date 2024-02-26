import {
	EmailOutlined,
	LockOutlined,
	PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";


const form = ({ type }) => {
	return (
		<div className="auth">
			<div className="content">
				<img src="assets/logo.png" alt="logo" className="logo" />

				<form className="form">
					{type === "register" && (
						<div className="input">
							<input
								type="text"
								placeholder="Username"
								className="input-field"
							/>
							<PersonOutline xs={{ color: "#737373" }} />
						</div>
					)}

					<div className="input">
						<input type="email" placeholder="Email" className="input-field" />
						<EmailOutlined xs={{ color: "#737373" }} />
					</div>

					<div className="input">
						<input
							type="password"
							placeholder="Password"
							className="input-field"
						/>
						<LockOutlined xs={{ color: "#737373" }} />
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
