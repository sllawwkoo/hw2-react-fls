import styles from "./button.module.scss";

function Button({ text, onButtonClick, styleBtn }) {
	return (
		<button
			className={`${styles.button} ${styleBtn ? styleBtn : ""}`}
			onClick={onButtonClick}
		>
			{text}
		</button>
	);
}

export default Button;
