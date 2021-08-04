import React, { useState, useEffect } from 'react';

import {
	Paper,
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableContainer,
	TableRow,
	TablePagination,
	Typography,
} from '@material-ui/core';

import { CustomRow } from './CustomRow/CustomRow';
import { useStyles } from './styles';

interface Column {
	title: string;
	align: 'left' | 'right' | 'inherit' | 'center' | 'justify' | undefined;
}

const columns: Column[] = [
	{ title: 'Photo', align: 'left' },
	{ title: 'Title', align: 'left' },
	{ title: 'Id', align: 'left' },
	{ title: 'Gender', align: 'left' },
	{ title: 'Price', align: 'left' },
	{ title: 'Sale Price', align: 'left' },
];

interface Props {
	data: any[];
}

export const CustomTable: React.FC<Props> = ({ data }) => {
	const classes = useStyles();

	// for pagination
	const [page, setPage] = useState<number>(0);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);

	// handles pagination
	const handleChangePage = (e: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setRowsPerPage(parseInt(e.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper} className={classes.container}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.title} align={column.align}>
								{column.title}
							</TableCell>
						))}
						<TableCell />
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((rowData) => (
						// <h5 key={rowData.gtin}>{rowData.title}</h5>
						<CustomRow key={rowData.gtin} data={rowData} />
					))}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component='div'
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
};
