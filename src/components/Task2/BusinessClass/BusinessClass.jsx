import styles from "./businessClass.module.scss";
import {selectData} from "../dataTask2";

function BusinessClass({
	newspaper,
	setNewspaper,
	cognac,
	setCognac,
	snack,
	setSnack,
}) {
	const handleCognacChange = (e) => {
		setCognac(e.target.value);
		if (e.target.value === "") {
			setSnack("");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h2 className={styles.title}>👔 Бізнес клас послуги</h2>

				<div className={styles.selectGroup}>
					<label className={styles.label}>📰 Оберіть газету:</label>
					<select
						value={newspaper}
						onChange={(e) => setNewspaper(e.target.value)}
						className={styles.select}
					>
						<option value="">-- Оберіть газету --</option>
						{selectData.newspapers.map((item) => (
							<option
								key={item.id}
								value={item.value}
							>
								{item.label}
							</option>
						))}
					</select>
				</div>

				<div className={styles.selectGroup}>
					<label className={styles.label}>🥃 Оберіть коньяк:</label>
					<select
						value={cognac}
						onChange={handleCognacChange}
						className={styles.select}
					>
						<option value="">-- Оберіть коньяк --</option>
						{selectData.cognacs.map((item) => (
							<option
								key={item.value}
								value={item.value}
							>
								{item.label}
							</option>
						))}
					</select>
				</div>

				{cognac && (
					<div className={styles.snackContainer}>
						<label className={styles.snackLabel}>
							🧀 Бажаєте закуску до коньяку?
						</label>
						<div className={styles.radioGroup}>
							<label className={styles.radioLabel}>
								<input
									type="radio"
									name="snack"
									value="yes"
									checked={snack === "yes"}
									onChange={(e) => setSnack(e.target.value)}
									className={styles.radio}
								/>
								Так
							</label>
							<label className={styles.radioLabel}>
								<input
									type="radio"
									name="snack"
									value="no"
									checked={snack === "no"}
									onChange={(e) => setSnack(e.target.value)}
									className={styles.radio}
								/>
								Ні
							</label>
						</div>
						{snack === "yes" && (
							<p className={styles.snackMessage}>
								✨ Вам подадуть вишукані французькі сири та горіхи
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default BusinessClass;