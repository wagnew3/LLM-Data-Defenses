import { useState } from "react";
import DEFENSES from "../lib/defenses"

export default function ProtectText() {
	const [filterText, setFilterText] = useState("");
	const [protectedText, setProtectedText] = useState("");
	const [protectedTextQuestion, setProtectedTextQuestion] = useState("");

	const handleInputChange = (event) => {
			setFilterText(event.target.value);
	};

	const copyText = () => {
			console.log("start copy");
			navigator.clipboard.writeText(protectedText);
			alert("Copied the text: " + protectedText);
			console.log("end copy");
	};

	const handleSearch = () => {
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
			setProtectedTextQuestion(
					"Summarize the following text in three bullet points: ".concat(
					fullProtectedText
					)
			);
	};
  
	return (
			<div>
					<div class="light">
					<input
							type="text"
							placeholder="Search..."
							value={filterText}
							onChange={handleInputChange}
					/>
					<button id="protectButton" onClick={handleSearch}>
							Go
					</button>
					<p class="protected">{protectedText}</p>
					<h2>2. Copy your protected text</h2>
					<p>
							<button onClick={copyText}>Copy text</button>
					</p>
					</div>
			</div>
	);
}