import {
	Box,
	Hidden,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Typography,
} from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
	data: string;
}

export const RowExpandedContent: React.FC<Props> = ({ data }) => {
	const classes = useStyles();

	return (
		<Table>
			<TableBody>
				<TableRow className={classes.row}>
					<Hidden smDown>
						<TableCell className={classes.firstCell}></TableCell>
					</Hidden>
					<TableCell className={classes.secondCell}>
						<Box>
							<Typography
								variant='subtitle2'
								className={classes.title}>
								Photo Gallery
							</Typography>
						</Box>
						<Box>
							{data.split(',').map((item, index) => (
								<img
									key={index}
									loading='lazy'
									className={classes.img}
									src={item}
									alt='thumbnail'
								/>
							))}
						</Box>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};
