import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { readString } from 'react-papaparse';
import csvFile from './data/products.csv';

import { Header } from './components/Header/Header';
import { CustomSkeleton } from './components/CustomSkeleton/CustomSkeleton';
import { ProductListing } from './components/ProductListing/ProductListing';

import theme from './theme';

function App() {
	const [dataArray, setDataArray] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		readString(csvFile, {
			delimiter: '',
			newline: '',
			header: true,
			skipEmptyLines: true,
			complete: (data) => {
				console.log('Parsing complete', data);
				setDataArray(data.data);
				setLoading(false);
			},
			download: true,
			error: (error, file) => {
				console.log('Error while parsing:', error, file);
			},
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			{loading ? <CustomSkeleton /> : <ProductListing data={dataArray} />}
		</ThemeProvider>
	);
}

export default App;
