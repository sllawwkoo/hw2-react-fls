import styles from "./decision4.module.scss";

function Decision4() {
	const workersList = [
		{ id: "111", name: "Іванов", salary: 10000 },
		{ id: "112", name: "Петренко", salary: 12000 },
		{ id: "113", name: "Шевченко", salary: 9500 },
		{ id: "114", name: "Коваль", salary: 11000 },
		{ id: "115", name: "Бондаренко", salary: 10500 },
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<ul className={styles.list}>
					{workersList.map((worker) => (
						<li
							className={styles.item}
							key={worker.id}
						>
							<span>{worker.name}:</span> <span>{worker.salary}</span> грн.
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Decision4;
