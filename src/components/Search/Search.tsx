import {
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
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
				aria-describedby='Search product'
				onChange={handleChangeQuery}
				endAdornment={
					<InputAdornment position='end'>
						<SearchIcon />
					</InputAdornment>
				}
				labelWidth={100}
			/>
		</FormControl>
	);
};
