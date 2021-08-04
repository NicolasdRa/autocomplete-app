import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

interface Props {
	handleChangeQuery: (e: unknown) => void;
}

export const Search: React.FC<Props> = ({ handleChangeQuery }) => {
	const classes = useStyles();

	return (
		<Paper component='form' className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder='Search product'
				inputProps={{ 'aria-label': 'search google maps' }}
				onChange={handleChangeQuery}
				defaultValue=''
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
