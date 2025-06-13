import { useState } from "react";
import styles from "./decision3.module.scss";
import beer from "../../../assets/img/beer.webp";

function Decision3() {
	const [value, setValue] = useState("");
	const [show, setShow] = useState(false);

	const handleChange = (e) => setValue(e.target.value);
	const handleFocus = () => setShow(false);

	const word = "пиво";
	const isCorect = value.toLowerCase() === word.toLowerCase();

	const handleClick = () => setShow(true);

	let border = '';
	if (isCorect && show) border = styles.correct;
	if (!isCorect && show) border = styles.wrong;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={`${styles.card} ${border}`}>
					<img
						src={beer}
						alt="beer"
						className={styles.beer}
					/>
					<p className={styles.word}>beer</p>
					<label
						htmlFor="text"
						className={styles.label}
					>
						Ваш переклад:
					</label>
					<input
						type="text"
						id="text"
						className={styles.input}
						value={value}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
					<button
						className={styles.button}
						onClick={handleClick}
					>
						Перевірити
					</button>
				</div>

				{show && (
					<p className={styles.text}>
						{isCorect ? "Добре. Молодець!" : "Невірно, спробуйте ще раз!"}
					</p>
				)}
			</div>
		</div>
	);
}

export default Decision3;
