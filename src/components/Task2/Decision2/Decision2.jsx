import styles from "./decision2.module.scss";
import { useState } from "react";
import { selectData } from "../dataTask2";
import BusinessClass from "../BusinessClass/BusinessClass";
import EconomyClass from "../EconomyClass/EconomyClass";

function Decision2() {
	const [ticketClass, setTicketClass] = useState("");
	const [newspaper, setNewspaper] = useState("");
	const [cognac, setCognac] = useState("");
	const [snack, setSnack] = useState("");
	const [beerType, setBeerType] = useState("");
	const [chips, setChips] = useState("");

	const handleTicketClassChange = (e) => {
		setTicketClass(e.target.value);
		// Скидаємо всі інші вибори при зміні класу
		setNewspaper("");
		setCognac("");
		setSnack("");
		setBeerType("");
		setChips("");
	};

	let bg

	if (ticketClass === "business") bg = styles.business;
	else if(ticketClass === "economy") bg = styles.economy;
	else bg = styles.default;


	return (
		<div className={`${styles.wrapper} ${bg}`}>
			<div className={styles.container}>
				<div className={styles.card}>
					<h1 className={styles.title}>✈️ Вибір класу квитка</h1>

					<div className={styles.mainSelectGroup}>
						<label className={styles.mainLabel}>Оберіть клас квитка:</label>
						<select
							value={ticketClass}
							onChange={handleTicketClassChange}
							className={styles.mainSelect}
						>
							<option value="">-- Оберіть клас --</option>
							{selectData.ticketClasses.map((item) => (
								<option
									key={item.id}
									value={item.value}
								>
									{item.label}
								</option>
							))}
						</select>
					</div>

					{ticketClass === "business" && (
						<BusinessClass
							newspaper={newspaper}
							setNewspaper={setNewspaper}
							cognac={cognac}
							setCognac={setCognac}
							snack={snack}
							setSnack={setSnack}
						/>
					)}

					{ticketClass === "economy" && (
						<EconomyClass
							beerType={beerType}
							setBeerType={setBeerType}
							chips={chips}
							setChips={setChips}
						/>
					)}

					{ticketClass && (
						<div className={styles.summary}>
							<h3 className={styles.summaryTitle}>📋 Ваш вибір:</h3>
							<p className={styles.summaryItem}>
								Клас:{" "}
								<span className={styles.summaryValue}>
									{
										selectData.ticketClasses.find(
											(item) => item.value === ticketClass
										)?.label
									}
								</span>
							</p>
							{ticketClass === "business" && (
								<>
									{newspaper && (
										<p className={styles.summaryItem}>
											Газета:{" "}
											<span className={styles.summaryValue}>
												{
													selectData.newspapers.find(
														(item) => item.value === newspaper
													)?.label
												}
											</span>
										</p>
									)}
									{cognac && (
										<p className={styles.summaryItem}>
											Коньяк:{" "}
											<span className={styles.summaryValue}>
												{
													selectData.cognacs.find(
														(item) => item.value === cognac
													)?.label
												}
											</span>
										</p>
									)}
									{snack && (
										<p className={styles.summaryItem}>
											Закуска:{" "}
											<span className={styles.summaryValue}>
												{snack === "yes" ? "Так" : "Ні"}
											</span>
										</p>
									)}
								</>
							)}
							{ticketClass === "economy" && (
								<>
									{beerType && (
										<p className={styles.summaryItem}>
											Пиво:{" "}
											<span className={styles.summaryValue}>
												{
													selectData.beerTypes.find(
														(item) => item.value === beerType
													)?.label
												}
											</span>
										</p>
									)}
									{chips && (
										<p className={styles.summaryItem}>
											Чипси:{" "}
											<span className={styles.summaryValue}>
												{
													selectData.chips.find((item) => item.value === chips)
														?.label
												}
											</span>
										</p>
									)}
								</>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Decision2;