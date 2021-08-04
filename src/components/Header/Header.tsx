import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useStyles } from './styles';

export const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Autocomplete App
					</Typography>
					<IconButton
						aria-label='account of current user'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={() => console.log('clicked')}
						color='inherit'>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};
