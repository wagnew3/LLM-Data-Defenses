

function FilterableProductTable({ products }) {
	const [filterText, setFilterText] = useState("");

	return (
		<div>
			<InputText filterText={filterText} onFilterTextChange={setFilterText} />

			<Protections products={products} filterText={filterText} />
		</div>
	);
}

function InputText({ filterText, onFilterTextChange }) {
	return (
		<form>
			<button onClick={this.handleSubmit}>Search</button>
			<input
				type="text"
				value={filterText}
				placeholder="Search..."
				onClick={(e) => onFilterTextChange(e.target.value)}
			/>
		</form>
	);
}

function Protections({ products, filterText }) {
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
	let protected_text = filterText
		.substring(0, indices[insert_index])
		.concat(
			". ",
			defense,
			" ",
			filterText.substring(indices[insert_index], filterText.length)
		);

	return (
		<div>
			<p>{protected_text}</p>
		</div>
	);
}