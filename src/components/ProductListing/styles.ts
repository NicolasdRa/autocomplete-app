import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			width: '95vw',
			margin: '0 auto',
		},

		toolbar: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		title: {
			padding: '2rem 0 1rem 1rem',
		},

		inputs: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			padding: '2rem 0 1rem 0',
		},

		select: {
			width: '9rem',
			margin: '0 1rem',
		},

		checkbox: {
			margin: '0 .5rem',
		},
	}),
);
