import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				borderBottom: 'unset',
			},
			'&:hover': {
				cursor: 'pointer',
			},
		},

		productImg: {
			marginLeft: '2rem',
			height: '4rem',
		},

		infoContainer: {
			display: 'flex',
			flexDirection: 'column',
			alignContent: 'left',
		},

		primaryInfo: {
			fontSize: '.8rem',
			padding: '1rem 1rem .5rem 0',
		},

		secondaryInfo: {
			fontSize: '.7rem',
			padding: '0 1rem 1rem 0',
		},
	}),
);
