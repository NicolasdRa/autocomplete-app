import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			padding: '0 1rem',
		},

		title: {
			marginBottom: '1.5rem',
			fontSize: '.8rem',
			fontWeight: 'bolder',
		},

		description: {
			paddingRight: '.5rem',
		},

		imgContainer: {
			width: '100%',
		},

		img: {
			borderRadius: '.3rem',
			width: '95%',
			objectFit: 'cover',
			marginTop: '.2rem',
		},

		textContainer: {
			paddingRight: '2rem',
			marginBottom: '1.5rem',
			fontSize: '.78rem',
			lineHeight: '1.8em',
		},

		text: {
			fontSize: '.78rem',
			lineHeight: '1.8em',
		},

		packages: {
			marginLeft: '1rem',
			paddingRight: '1rem',
		},

		packagesText: {
			margin: '1rem 0',
			height: '2rem',
		},

		list: {
			margin: '0 auto 0 -1.5rem',
		},

		listItem: {
			margin: '.5rem auto .5rem 0',
			paddingTop: '3px',
			paddingLeft: '.5rem',
			fontSize: '.8rem',
		},

		status: {
			marginLeft: '4rem',
			paddingTop: '3px',
		},

		step: {
			fontSize: '.78rem',
		},
	}),
);
