import styles from "./listItem.module.scss";
import Button from "../Button/Button";

function ListItem({ title, arr, textBtn, onButtonClick,styleBtn, emptyText }) {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{title}</h3>
			{arr?.length > 0 ? (
				arr.map((item) => (
					<div
						className={styles.card}
						key={item.id}
					>
						<p className={styles.dish}>{item.dish}</p>
						<Button
							text={textBtn}
							onButtonClick={() => onButtonClick(item.id)}
							styleBtn={styleBtn}
						/>
					</div>
				))
			) : (
				<p className={styles.emptyText}>{emptyText}</p>
			)}
		</div>
	);
}

export default ListItem;