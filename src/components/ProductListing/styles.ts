import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		toolbar: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		title: {
			padding: '2rem 0 1rem 2rem',
		},

		inputs: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			padding: '2rem 2rem 1rem 0',
		},

		checkbox: {
			margin: '0 1rem',
		},

		formControl: {},
	}),
);
