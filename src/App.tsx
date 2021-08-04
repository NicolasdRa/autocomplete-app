import { useState, useEffect } from 'react';

import { Search } from './components/Search/Search';
import { CustomTable } from './components/CustomTable/CustomTable';

import { readString } from 'react-papaparse';
import csvFile from './data/products.csv';

function App() {
	const [dataArray, setDataArray] = useState<any[]>([]);
	const [filteredArray, setFilteredArray] = useState<any[]>([]);
	const [queryString, setQueryString] = useState('');
	console.log(queryString);

	const handleChangeQuery = (e: any) => {
		setQueryString(e.target.value.toLowerCase());
	};

	useEffect(() => {
		readString(csvFile, {
			delimiter: '',
			newline: '',
			header: true,
			skipEmptyLines: true,
			complete: (data) => {
				console.log('Parsing complete', data);
				setDataArray(data.data);
			},
			download: true,
			error: (error, file) => {
				console.log('Error while parsing:', error, file);
			},
		});
	}, []);

	// search by product name
	useEffect(() => {
		queryString &&
			setFilteredArray(
				dataArray.filter((item) =>
					item.title.toLowerCase().includes(queryString),
				),
			);

		return () => {
			setFilteredArray(dataArray);
		};
	}, [queryString]);

	// filter by gender

	return (
		<div className='App'>
			<h1>Autocomplete App</h1>
			<Search handleChangeQuery={handleChangeQuery} />
			<CustomTable data={filteredArray.slice(0, 99)} />
		</div>
	);
}

export default App;
