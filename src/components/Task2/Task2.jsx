import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision2 from "./Decision2/Decision2";
function Task2() {
	const { title, text1, text2, text3 } = tasks[1];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
				text2={text2}
				text3={text3}
			/>
			<Decision2/>
		</>
	);
}

export default Task2;
