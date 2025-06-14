import { useState } from "react";
import Button from "../Button/Button";
import styles from "./decision6.module.scss";
import ListItem from "../ListItem/ListItem";

function Decision6() {
	const [waitingList, setWaitingList] = useState([
		{ id: 1, dish: "Голубці" },
		{ id: 2, dish: "Грибовий суп" },
	]);
	const [processList, setProcessList] = useState([
		{ id: 21, dish: "Блінчики з сиром" },
		{ id: 22, dish: "Салат 'Цезарь'" },
		{ id: 23, dish: "Салат 'Грецький'" },
	]);
	const [completedList, setCompletedList] = useState([
		{ id: 31, dish: "Борщ" },
		{ id: 32, dish: "Плов з овочами" },
	]);
	const [value, setValue] = useState("");
	function hadleChange(e) {
		setValue(e.target.value);
	}

	function handleClickAdd() {
		const trimmedValue = value.trim();
		if (trimmedValue === "") return;

		setWaitingList((prevWaitingList) => [
			...prevWaitingList,
			{ id: Date.now(), dish: trimmedValue },
		]);
		setValue("");
	}

	function handleClickPrepare(id) {
		const dish = waitingList.find((dish) => dish.id === id);
		if (!dish) return;

		setWaitingList((prevWaitingList) =>
			prevWaitingList.filter((dish) => dish.id !== id)
		);
		setProcessList((prevProcessList) => [...prevProcessList, dish]);
	}

	function handleClickCooked(id) {
		const dish = processList.find((dish) => dish.id === id);
		if (!dish) return;

		setProcessList((prevProcessList) =>
			prevProcessList.filter((dish) => dish.id !== id)
		);
		setCompletedList((prevCompletedList) => [...prevCompletedList, dish]);
	}

	function handleClickServed(id) {
		setCompletedList((prevCompletedList) =>
			prevCompletedList.filter((dish) => dish.id !== id)
		);
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.body}>
					<div className={styles.header}>
						<label
							htmlFor="food"
							className={styles.label}
						>
							Нова замовлена страва:
						</label>
						<input
							type="text"
							id="food"
							className={styles.input}
							value={value}
							onChange={hadleChange}
						/>
						<Button
							text="Додати"
							onButtonClick={handleClickAdd}
						/>
					</div>
					<div className={styles.cards}>
						<ListItem
							title="Очікують на виконання"
							arr={waitingList}
							textBtn="Готувати"
							onButtonClick={handleClickPrepare}
							styleBtn={styles.btn1}
							emptyText="Немає замовлень"
						/>
						<ListItem
							title="Виконуються"
							arr={processList}
							textBtn="Приготовлено"
							onButtonClick={handleClickCooked}
							styleBtn={styles.btn2}
							emptyText="Замовлення виконані"
						/>
						<ListItem
							title="Готові до виносу"
							arr={completedList}
							textBtn="Подано"
							onButtonClick={handleClickServed}
							styleBtn={styles.btn3}
							emptyText="Замовлення подані"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Decision6;
