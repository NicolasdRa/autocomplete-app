import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Header } from '../../../components/Header/Header';

describe('tests on <Header/>', () => {
	const wrapper = mount(<Header />);

	test('should render <Header/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
