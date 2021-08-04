import { Grid } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
	data: string[];
}

export const RowExpandedContent: React.FC<Props> = ({ data }) => {
	const classes = useStyles();

	console.log(data);

	return (
		<Grid container spacing={3} className={classes.container}>
			<Grid item lg={3} className={classes.description}>
				{data.map((item) => (
					<img src={item} alt='thumbnail' />
				))}
			</Grid>
		</Grid>
	);
};
