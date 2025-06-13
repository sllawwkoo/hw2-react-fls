import { useState } from "react";
import styles from "./inputFloatingLabel.module.scss";
import { Eye, EyeOff } from "lucide-react";

function InputFloatingLabel({
	label,
	type = "text",
	id,
	placeholder,
	showPasswordToggle = false,
	value,
	onChangeInput
}) {

	const [isFocused, setIsFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const isFloating = isFocused || value.length > 0;
	const inputType = showPasswordToggle
		? showPassword
			? "text"
			: "password"
		: type;

		const handleFocusBlur = () => {
			setIsFocused((prevFocused) => !prevFocused);
		};
		
		const handleClick = () => {
			setShowPassword(prevPassword => !prevPassword);	
		};

	return (
		<div className={styles.inputContainer}>
			<input
				type={inputType}
				id={id}
				value={value}
				onChange={onChangeInput}
				onFocus={handleFocusBlur}
				onBlur={handleFocusBlur}
				placeholder={isFloating ? placeholder : ""}
				className={`${styles.input} ${isFloating && styles.focused}`}
			/>

			<label
				htmlFor={id}
				className={`${styles.label} ${isFloating && styles.floating}`}
			>
				{label}
			</label>

			{showPasswordToggle && (
				<button
					type="button"
					onClick={handleClick}
					className={styles.passwordToggle}
				>
					{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
				</button>
			)}
		</div>
	);
}

export default InputFloatingLabel;
