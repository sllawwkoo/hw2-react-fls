import TaskCard from "../TaskCard/TaskCard";
import { tasks } from "../../data";
import Decision6 from "./Decision6/Decision6";

function Task6() {
	const { title, text1, text2, text3, text4 } = tasks[5];
	return (
		<>
			<TaskCard
				title={title}
				text1={text1}
				text2={text2}
				text3={text3}
				text4={text4}
			/>
			<Decision6/>
		</>
	);
}

export default Task6;
