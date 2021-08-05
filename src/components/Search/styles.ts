import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		textField: {
			width: '16rem',
			marginRight: '.5rem',
		},
		root: {},
		input: {},
		iconButton: {},
	}),
);
