import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision5 from "./Decision5/Decision5";

function Task5() {
	const { title, text1} = tasks[4];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
			/>
			<Decision5/>
		</>
	);
}

export default Task5;
