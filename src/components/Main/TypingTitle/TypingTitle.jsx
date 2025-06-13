import styles from "./typingTitle.module.scss";
import {ReactTyped} from "react-typed";

function TypingTitle() {
	return (
		<h1 className={styles.title}>
			<ReactTyped
				startWhenVisible
				strings={[ "", "Домашня робота №2"]}
				typeSpeed={120}
			/>
		</h1>
	);
}

export default TypingTitle;
