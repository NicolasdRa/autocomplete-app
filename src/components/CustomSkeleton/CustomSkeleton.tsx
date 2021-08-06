import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

import { useStyles } from './styles';

export const CustomSkeleton = () => {
	const classes = useStyles();

	return (
		<Box className={classes.skeletonContainer}>
			<Skeleton className={classes.skeletonFilters} />
			<Skeleton className={classes.skeletonTable} />
		</Box>
	);
};
