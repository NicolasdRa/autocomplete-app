import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		row: {
			align: 'left',
		},

		firstCell: {
			width: '6rem',
			borderBottom: 'none',
		},

		secondCell: {
			display: 'flex',
			flexDirection: 'column',
			borderBottom: 'none',
		},

		title: {
			paddingBottom: '.5rem',
		},

		img: {
			borderRadius: '.3rem',
			width: '10rem',
			margin: '.5rem',
			'&:first-child': { marginLeft: 0 },
		},
	}),
);
