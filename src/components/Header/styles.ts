import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logo: {
			width: '2rem',
			height: '2rem',
			marginLeft: '.5rem',
		},

		title: {
			flexGrow: 1,
			marginLeft: '1.5rem',

			[theme.breakpoints.down('sm')]: {
				flexGrow: 0,
				margin: '0 auto .2rem auto',
			},
		},
	}),
);
