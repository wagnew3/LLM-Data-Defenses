import { createRef, useState , useEffect } from "react";
import DEFENSES from "../lib/defenses"

export default function ProtectText() {
	const DEFAULT_ROWS = 12
	const [textRows, setTextRows] = useState(DEFAULT_ROWS);
	const inputTextarea = createRef();
	const outputTextarea = createRef();
	const [inputText, setInputText] = useState("");
	const [protectedText, setProtectedText] = useState("");
	//const [protectedTextQuestion, setProtectedTextQuestion] = useState("");
	const [copyButtonText, setcopyButtonText] = useState("Copy Text");

	const handleInputChange = (event) => {
		setInputText(event.target.value);
		setRows(inputTextarea);
	};

	const setRows = (textarea) => {
		const styles = getComputedStyle(textarea.current);
		const rows = textarea.current.scrollHeight / parseInt(styles.lineHeight);
		setTextRows(Math.max(DEFAULT_ROWS, textRows, rows));
	}

	const copyText = () => {
		navigator.clipboard.writeText(protectedText);
		setcopyButtonText("Copied!");
	};

	const clearAll = () => {
		setInputText("");
		setProtectedText("");
		setTextRows(DEFAULT_ROWS);
	}

	const handleSubmit = () => {
		const rows = [];
		let lastCategory = null;
		let defense = "";

		setTextRows(DEFAULT_ROWS);

		const defense_ind = Math.floor(Math.random() * DEFENSES.length);

		defense = DEFENSES[defense_ind];
		var indices = [];
		for (var i = 0; i < inputText.length; i++) {
			if (inputText[i] === " ") indices.push(i);
		}

		const insert_index = Math.floor(Math.random() * indices.length);
		const fullProtectedText = inputText
			.substring(0, indices[insert_index])
			.concat(
			". ",
			defense,
			" ",
			inputText.substring(indices[insert_index], inputText.length)
			);
		setProtectedText(fullProtectedText);
		// setProtectedTextQuestion(
		// 		"Summarize the following text in three bullet points: ".concat(
		// 		fullProtectedText
		// 		)
		// );
		setcopyButtonText("Copy Text");
	};

	useEffect(() => {setRows(outputTextarea)});
  
	return (
		<div className="columns is-tablet is-family-secondary">
			<div className="column is-6">
				<div className="field">
					<textarea
						className="textarea is-family-secondary"
						ref={inputTextarea}
						placeholder="Insert text for protection"
						rows={textRows}
						value={inputText}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div className="buttons">
					<button className="button is-primary" id="protectButton" onClick={handleSubmit}>Go</button>
				</div>
			</div>
			<div className="column is-6">
				<div className="field">
					<textarea
						className="textarea is-family-secondary"
						ref={outputTextarea}
						placeholder="Protected text will appear here"
						rows={textRows}
						value={protectedText}
						readOnly
					></textarea>
				</div>
				<div className="buttons">
					<button className="button" id="copyButton" onClick={copyText}>{copyButtonText}</button>
					<button className="button" id="clearButton" onClick={clearAll}>Clear All</button>
				</div>
			</div>
		</div>
	);
}