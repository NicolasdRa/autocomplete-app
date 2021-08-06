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

import { Search } from '../Search/Search';
import { CustomTable } from '../CustomTable/CustomTable';

import { useStyles } from './styles';

interface Props {
	data: any[];
}

export const ProductListing: React.FC<Props> = ({ data }) => {
	const classes = useStyles();

	const [filteredArray, setFilteredArray] = useState<any[]>(data);
	const [queryString, setQueryString] = useState('');
	const [gender, setGender] = useState('');
	const [checked, setChecked] = useState(false);

	// search filter (product & price)
	const search = (data: any[]): any[] => {
		if (data.length > 0 && queryString !== '') {
			return data.filter(
				(item) =>
					item.title.toLowerCase().includes(queryString) ||
					item.price.toString().toLowerCase().includes(queryString),
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
		if (
			gender !== '' &&
			(gender === 'male' || gender === 'female' || gender === 'unisex')
		) {
			return data.filter((item) => item.gender === gender);
		}
		return data;
	};

	useEffect(() => {
		const searchFiltered = search(data);
		const saleFiltered = filterByOnSale(searchFiltered);
		const genderFiltered = filterByGender(saleFiltered);

		setFilteredArray(genderFiltered);
	}, [data, queryString, gender, checked]);

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
		<Box className={classes.container}>
			<Box className={classes.toolbar}>
				<Typography variant='h5' className={classes.title}>
					Products
				</Typography>
				<Box className={classes.inputs}>
					<Search handleChangeQuery={handleChangeQuery} />
					<FormControl variant='outlined' className={classes.select}>
						<InputLabel id='demo-simple-select-outlined-label'>
							Filter by gender
						</InputLabel>
						<Select
							labelId='demo-simple-select-outlined-label'
							id='demo-simple-select-outlined'
							value={gender}
							onChange={handleChangeGenderFilter}
							labelWidth={100}>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value={'female'}>female</MenuItem>
							<MenuItem value={'male'}>male</MenuItem>
							<MenuItem value={'unisex'}>unisex</MenuItem>
						</Select>
					</FormControl>
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
				</Box>
			</Box>
			<CustomTable data={filteredArray} />
		</Box>
	);
};
