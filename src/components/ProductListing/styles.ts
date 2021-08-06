import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			width: '90vw',
			margin: '0 auto',
			overflowX: 'auto',
		},

		toolbar: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: '.5rem',

			[theme.breakpoints.down('sm')]: {
				margin: 0,
			},
		},

		title: {
			marginLeft: '.8rem',
			padding: '2rem 0 1rem 1rem',

			[theme.breakpoints.down('sm')]: {
				padding: '1rem 0 0 0',
			},
		},

		filters: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			padding: '2rem 0 1rem 0',

			[theme.breakpoints.down('sm')]: {
				flexWrap: 'wrap',
				justifyContent: 'start',
				padding: '1rem 0 0 0',
			},
		},

		select: {
			width: '9rem',
			margin: '0 1rem',

			[theme.breakpoints.down('sm')]: {
				width: '50%',
				marginLeft: 0,
				marginBottom: '1rem',
			},
		},

		checkbox: {
			margin: '0 .5rem',

			[theme.breakpoints.down('sm')]: {
				width: '30%',
				marginLeft: '2rem',
				marginBottom: '1rem',
			},
		},
	}),
);
