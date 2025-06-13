import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision1 from "./Decision1/Decision1";

function Task1() {
	const { title, text1, text2, text3, text4 } = tasks[0];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
				text2={text2}
				text3={text3}
				text4={text4}
			/>
			<Decision1/>
		</>
	);
}

export default Task1;
