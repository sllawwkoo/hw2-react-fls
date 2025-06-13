import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision4 from "./Decision4/Decision4";

function Task4() {
	const { title, text1 } = tasks[3];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
			/>
			<Decision4/>
		</>
	);
}

export default Task4;
