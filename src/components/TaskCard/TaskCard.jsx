import styles from "./taskCard.module.scss";

function TaskCard({ title, text1, text2, text3, text4}) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text1}</p>
			{text2 && <p className={styles.text}>{text2}</p>}
			{text3 && <p className={styles.text}>{text3}</p>}
			{text4 && <p className={styles.text}>{text4}</p>}
		</div>
	);
}

export default TaskCard;
