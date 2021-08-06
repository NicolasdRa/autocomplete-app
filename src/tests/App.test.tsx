import ThemeProvider from '@material-ui/styles/ThemeProvider';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import App from '../App';
import theme from '../theme';

describe('tests on <App/>', () => {
	const wrapper = mount(
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>,
	);

	test('should render <App/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
