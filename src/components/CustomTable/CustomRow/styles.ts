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

		firstCell: {
			width: '6rem',
		},

		productImg: {
			height: '4rem',
		},

		secondCell: {
			width: '40rem',
		},

		primaryInfo: {
			fontSize: '1rem',
			padding: '1rem 1rem .5rem 0',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
	}),
);
