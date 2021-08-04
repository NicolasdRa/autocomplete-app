import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			marginTop: '1rem',
		},

		pagination: {
			marginRight: '2rem',
		},

		title: {
			margin: '2rem 0 1rem 2rem',
		},
	}),
);
