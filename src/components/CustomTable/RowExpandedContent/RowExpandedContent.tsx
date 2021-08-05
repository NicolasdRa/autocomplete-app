import { Box, TableRow, TableCell, Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
	data: string;
}

export const RowExpandedContent: React.FC<Props> = ({ data }) => {
	const classes = useStyles();

	const firstCellContent = data.split(',').slice(0, 1).join();

	console.log(firstCellContent);

	return (
		<TableRow className={classes.row}>
			<TableCell className={classes.firstCell}></TableCell>
			<TableCell className={classes.secondCell}>
				<Box>
					<Typography variant='subtitle2' className={classes.title}>
						Photo Gallery
					</Typography>
				</Box>
				<Box>
					{data.split(',').map((item) => (
						<img
							loading='lazy'
							className={classes.img}
							src={item}
							alt='thumbnail'
						/>
					))}
				</Box>
			</TableCell>
		</TableRow>
	);
};
