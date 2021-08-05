import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
	interface CommonColors {
		background?: string;
		white?: string;
		grey?: string;
		shadow?: string;
	}
}
