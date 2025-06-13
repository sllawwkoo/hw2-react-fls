import styles from "./result1.module.scss";
import smile from "../../../assets/img/smile.webp";
function Result1({ isAuth, isIvan }) {
	return (
		<>
			{isAuth ? (
				<div className={styles.wrapper1}>
					<div className={styles.container}>
						<img
							className={styles.smile}
							src={smile}
							alt="smile"
						/>
						<p className={styles.text1}>Вітаємо, ви авторизовані!</p>
					</div>
				</div>
			) : (
				<div className={styles.wrapper2}>
					<p className={`${styles.text2} ${isIvan && styles.ivan}`}>
						Невірний логін чи пороль!
					</p>
				</div>
			)}
		</>
	);
}

export default Result1;
