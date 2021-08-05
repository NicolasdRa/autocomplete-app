import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		generalContainer: {
			backgroundColor: theme.palette.common.grey,
		},
		skeleton: {
			width: '95vw',
		},
	}),
);
