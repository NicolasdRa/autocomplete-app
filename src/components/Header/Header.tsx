import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../../assets/logo-rounded.png';

import { useStyles } from './styles';

export const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Box>
						<a href='!#' target='_blank' rel='noreferrer'>
							<img
								className={classes.logo}
								src={logo}
								alt='logo'
							/>
						</a>
					</Box>
					<Typography variant='h6' className={classes.title}>
						Autocomplete App
					</Typography>
					<IconButton
						aria-label='account of current user'
						// aria-controls='menu-appbar'
						// aria-haspopup='false'
						onClick={() => console.log('clicked')}
						color='inherit'>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};
