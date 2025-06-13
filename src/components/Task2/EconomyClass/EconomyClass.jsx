import styles from "./economyClass.module.scss";
import { selectData } from "../dataTask2";

function EconomyClass({ beerType, setBeerType, chips, setChips }) {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h2 className={styles.title}>☁️ Економ клас послуги</h2>

				<div className={styles.selectGroup}>
					<label className={styles.label}>🍺 Оберіть тип пива:</label>
					<select
						value={beerType}
						onChange={(e) => setBeerType(e.target.value)}
						className={styles.select}
					>
						<option value="">-- Оберіть пиво --</option>
						{selectData.beerTypes.map((item) => (
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
					<label className={styles.label}>🥔 Оберіть чипси:</label>
					<select
						value={chips}
						onChange={(e) => setChips(e.target.value)}
						className={styles.select}
					>
						<option value="">-- Оберіть чипси --</option>
						{selectData.chips.map((item) => (
							<option
								key={item.id}
								value={item.value}
							>
								{item.label}
							</option>
						))}
					</select>
				</div>

				{(beerType || chips) && (
					<div className={styles.economyMessage}>
						<p>🎉 Насолоджуйтесь польотом серед хмар!</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default EconomyClass;