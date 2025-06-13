import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision3 from "./Decision3/Decision3";

function Task3() {
	const { title, text1, text2, text3 } = tasks[2];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
				text2={text2}
				text3={text3}
			/>
			<Decision3/>
		</>
	);
}

export default Task3;
