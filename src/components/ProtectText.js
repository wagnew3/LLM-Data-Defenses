import { useState } from "react";
import DEFENSES from "../lib/defenses"

export default function ProtectText() {
	const [textRows, setTextRows] = useState(20);
	const [filterText, setFilterText] = useState("");
	const [protectedText, setProtectedText] = useState("");
	//const [protectedTextQuestion, setProtectedTextQuestion] = useState("");
	const [copyButtonText, setcopyButtonText] = useState("Copy Text");

	const handleInputChange = (event) => {
			setFilterText(event.target.value);
	};

	const copyText = () => {
			navigator.clipboard.writeText(protectedText);
			setcopyButtonText("Copied!");
	};

	const handleSubmit = () => {
			const rows = [];
			let lastCategory = null;
			let defense = "";
	
			const defense_ind = Math.floor(Math.random() * DEFENSES.length);
	
			defense = DEFENSES[defense_ind];
			var indices = [];
			for (var i = 0; i < filterText.length; i++) {
					if (filterText[i] === " ") indices.push(i);
			}
	
			const insert_index = Math.floor(Math.random() * indices.length);
			const fullProtectedText = filterText
					.substring(0, indices[insert_index])
					.concat(
					". ",
					defense,
					" ",
					filterText.substring(indices[insert_index], filterText.length)
					);
			setProtectedText(fullProtectedText);
			// setProtectedTextQuestion(
			// 		"Summarize the following text in three bullet points: ".concat(
			// 		fullProtectedText
			// 		)
			// );
			setcopyButtonText("Copy Text");
	};
  
	return (
		<div class="columns is-tablet">
			<div class="column is-6">
				<textarea
					class="textarea"
					placeholder="Insert text for protection"
					rows={textRows}
					value={filterText}
					onChange={handleInputChange}
				></textarea>
				<button class="button" id="protectButton" onClick={handleSubmit}>
						Go
				</button>
			</div>
			<div class="column is-6">
				<textarea
					class="textarea"
					placeholder="Protected text will appear here"
					rows={textRows}
					value={protectedText}
					readonly
				></textarea>
				<button class="button" id="copyButton" onClick={copyText}>{copyButtonText}</button>
			</div>
		</div>
	);
}