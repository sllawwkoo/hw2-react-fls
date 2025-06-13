import styles from "./main.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {tasks} from "../../data.js"
import TypingTitle from "./TypingTitle/TypingTitle.jsx";

function Main() {
	
	return (
		<div className={styles.container}>
			<TypingTitle/>
			<Tabs className={styles.tasks}>
				<TabList className={styles.tasksList}>
					{tasks.map(({ id, title }) => (
						<Tab key={id} className={styles.task}>{title}</Tab>
					))}
				</TabList>
				{tasks.map(({ id, Component }) => (
					<TabPanel key={id}>
						<Component />
					</TabPanel>
				))}
			</Tabs>
		</div>
	);
}

export default Main;