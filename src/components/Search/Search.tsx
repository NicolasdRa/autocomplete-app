import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

export const Search = () => {
	const classes = useStyles();
	return (
		<Paper component='form' className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder='Search product'
				inputProps={{ 'aria-label': 'search google maps' }}
			/>
			<IconButton
				type='submit'
				className={classes.iconButton}
				aria-label='search'>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};
