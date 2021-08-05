import { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';

import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { ThemeProvider } from '@material-ui/core/styles';

import csvFile from './data/products.csv';

import { Header } from './components/Header/Header';
import { ProductListing } from './components/ProductListing/ProductListing';

import { useStyles } from './styles';
import theme from './theme';

function App() {
	const classes = useStyles();
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
			<Box className={classes.generalContainer}>
				{loading ? (
					<Box className={classes.skeleton}>
						<Skeleton />
						<Skeleton animation={false} />
						<Skeleton animation='wave' />
					</Box>
				) : (
					<ProductListing data={dataArray} />
				)}
			</Box>
		</ThemeProvider>
	);
}

export default App;
