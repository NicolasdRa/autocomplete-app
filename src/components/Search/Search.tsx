import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Paper,
	TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

interface Props {
	handleChangeQuery: (e: unknown) => void;
}

export const Search: React.FC<Props> = ({ handleChangeQuery }) => {
	const classes = useStyles();

	return (
		<FormControl className={classes.textField} variant='outlined'>
			<InputLabel htmlFor='outlined-adornment-password'>
				Search product
			</InputLabel>
			<OutlinedInput
				onChange={handleChangeQuery}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton edge='end'>
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				labelWidth={100}
			/>
		</FormControl>

		// <TextField
		// 	label='Search product'
		// 	variant='outlined'
		// 	className={classes.input}
		// 	placeholder='Search product'
		// 	inputProps={{ 'aria-label': 'search google maps' }}
		// 	onChange={handleChangeQuery}
		// 	defaultValue=''
		// />

		// <IconButton
		// 	type='submit'
		// 	className={classes.iconButton}
		// 	aria-label='search'>
		// 	<SearchIcon />
		// </IconButton>
	);
};
