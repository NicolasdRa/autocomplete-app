import { useState, useEffect } from 'react';

import {
	Box,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
	Typography,
} from '@material-ui/core';

import { readString } from 'react-papaparse';
import csvFile from '../../data/products.csv';

import { Search } from '../Search/Search';
import { CustomTable } from '../CustomTable/CustomTable';

import { useStyles } from './styles';

export const ProductListing: React.FC = () => {
	const classes = useStyles();

	const [dataArray, setDataArray] = useState<any[]>([]);
	const [filteredArray, setFilteredArray] = useState<any[]>([]);
	const [queryString, setQueryString] = useState('');
	const [gender, setGender] = useState('');
	const [checked, setChecked] = useState(false);

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

	useEffect(() => {
		dataArray.length > 0 && setFilteredArray(dataArray);
	}, [dataArray]);

	// search filter
	const search = (data: any[]): any[] => {
		if (data.length > 0 && queryString !== '') {
			return data.filter((item) =>
				item.title.toLowerCase().includes(queryString),
			);
		}
		return data;
	};

	// on Sale filter
	const filterByOnSale = (data: any[]): any[] => {
		if (checked) {
			return data.filter((item) => item.sale_price < item.price);
		}
		return data;
	};

	// gender filter
	const filterByGender = (data: any[]): any[] => {
		if (gender !== 'unisex') {
			return data.filter((item) => item.gender === gender);
		}
		return data;
	};

	useEffect(() => {
		const searchFiltered = search(dataArray);
		const saleFiltered = filterByOnSale(searchFiltered);
		const genderFiltered = filterByGender(saleFiltered);

		setFilteredArray(genderFiltered);
	}, [dataArray, queryString, gender, checked]);

	const handleChangeQuery = (e: any) => {
		setQueryString(e.target.value.toLowerCase());
	};

	const handleChangeSaleFilter = (e: any) => {
		setChecked(e.target.checked);
	};

	const handleChangeGenderFilter = (e: any) => {
		setGender(e.target.value);
	};

	return (
		<Box>
			<Box className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Products
				</Typography>
				<Box className={classes.inputs}>
					<Search handleChangeQuery={handleChangeQuery} />
					<FormGroup row className={classes.checkbox}>
						<FormControlLabel
							control={
								<Checkbox
									checked={checked}
									onChange={handleChangeSaleFilter}
									color='primary'
								/>
							}
							label='On Sale'
						/>
					</FormGroup>
					<FormControl
						variant='outlined'
						className={classes.formControl}>
						<InputLabel id='demo-simple-select-outlined-label'>
							gender
						</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={gender}
							onChange={handleChangeGenderFilter}
							label='Gender'>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value={'female'}>female</MenuItem>
							<MenuItem value={'male'}>male</MenuItem>
							<MenuItem value={'unisex'}>unisex</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</Box>

			{dataArray.length > 0 && (
				<CustomTable data={filteredArray.slice(0, 99)} />
			)}
		</Box>
	);
};
