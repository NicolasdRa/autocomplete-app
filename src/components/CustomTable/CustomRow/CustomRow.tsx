import { useState } from 'react';

import {
	Box,
	Collapse,
	IconButton,
	TableRow,
	TableCell,
	Typography,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { RowExpandedContent } from '../RowExpandedContent/RowExpandedContent';

import { useStyles } from './styles';

interface Props {
	data: {
		title: string;
		gtin: string;
		gender: string;
		price: string;
		sale_price: string;
		image_link: string;
		additional_image_link: string;
	};
}

export const CustomRow: React.FC<Props> = ({ data }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const {
		title,
		gtin,
		gender,
		price,
		sale_price,
		image_link,
		additional_image_link,
	} = data;

	return (
		<>
			<TableRow
				className={classes.root}
				hover
				onClick={() => setOpen(!open)}>
				<TableCell className={classes.firstCell}>
					<img
						loading='lazy'
						src={image_link}
						alt={title}
						className={classes.productImg}
					/>
				</TableCell>
				<TableCell className={classes.secondCell}>
					<Typography className={classes.primaryInfo}>
						{title}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography className={classes.primaryInfo}>
						{gtin}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography className={classes.primaryInfo}>
						{gender}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography className={classes.primaryInfo}>
						{price}
					</Typography>
				</TableCell>
				<TableCell>
					<Typography className={classes.primaryInfo}>
						{sale_price}
					</Typography>
				</TableCell>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? (
							<KeyboardArrowUpIcon />
						) : (
							<KeyboardArrowDownIcon />
						)}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{
						padding: 0,
					}}
					colSpan={12}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box>
							<RowExpandedContent data={additional_image_link} />
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
};
