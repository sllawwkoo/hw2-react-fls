import { useState } from "react";
import styles from "./decision1.module.scss";
import InputFloatingLabel from "../InputFloatingLabel/InputFloatingLabel";
import Result1 from "../Result1/Result1";

function Decision1() {
	const [valueLogin, setValueLogin] = useState("");
	const [valuePassword, setValuePassword] = useState("");
	const [isAuth, setIsAuth] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const [lastLogin, setLastLogin] = useState(""); 

	const users = [
		{ login: "admin", password: "admin111" },
		{ login: "admin2", password: "admin222" },
		{ login: "admin3", password: "admin333" },
	];

	const handleChangeLogin = (e) => setValueLogin(e.target.value);
	const handleChangePassword = (e) => setValuePassword(e.target.value);
	const handleClick = (e) => {
		e.preventDefault();

		const isAuthenticated = users.some(
			(user) => user.login === valueLogin && user.password === valuePassword
		);

		setLastLogin(valueLogin);
		setIsAuth(isAuthenticated);
		setShowResult(true);
		setValueLogin("");
		setValuePassword("");
	};

	const ivan = "Ivan";
	const isIvan =
		lastLogin.toLocaleLowerCase() === ivan.toLocaleLowerCase() && !isAuth;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h3 className={styles.title}>Вхід в систему</h3>
				<form className={styles.form}>
					<InputFloatingLabel
						id="login"
						label="Логін"
						type="text"
						placeholder="Введіть ваш логін"
						value={valueLogin}
						onChangeInput={handleChangeLogin}
					/>
					<InputFloatingLabel
						id="password"
						label="Пароль"
						type="password"
						placeholder="Введіть ваш пароль"
						showPasswordToggle={true}
						value={valuePassword}
						onChangeInput={handleChangePassword}
					/>
					<button
						className={styles.button}
						onClick={handleClick}
					>
						Увійти
					</button>
				</form>
				{showResult && (
					<Result1
						isAuth={isAuth}
						isIvan={isIvan}
					/>
				)}
			</div>
		</div>
	);
}

export default Decision1;
