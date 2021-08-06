import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		skeletonContainer: {
			width: '90vw',
			margin: '2rem auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'start',
		},

		skeletonFilters: {
			transform: 'none',
			margin: '2rem 0 1rem 0',
			width: '100%',
			height: '8rem',
		},

		skeletonTable: {
			transform: 'none',
			margin: '2rem 0 1rem 0',
			width: '100%',
			height: '65vh',
		},
	}),
);
