import styles from './itemCard.module.scss';

function ItemCard({label, link, translate, title, text, url}) {
	return (
		<div className={styles.card}>
			<div className={styles.headerBody}>
				<div className={styles.logo}>
					<img
						src={url}
						alt="logo"
					/>
				</div>
				<div className={styles.infoBody}>
					<div className={styles.label}>{label}</div>
					<div className={styles.linkBody}>
						<span className={styles.link}>{link}</span>
						<span className={styles.translate}>{translate}</span>
						<svg
							className={styles.icon}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
						</svg>
					</div>
				</div>
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default ItemCard;