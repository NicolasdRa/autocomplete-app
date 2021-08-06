import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Search } from '../../../components/Search/Search';

const handleChangeQuery = jest.fn();

describe('tests on <Search/>', () => {
	const wrapper = mount(<Search handleChangeQuery={handleChangeQuery} />);

	test('should render <Search/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should call handleChangeQuery', () => {
		const input = wrapper.find('input');

		input.simulate('change');
		expect(handleChangeQuery).toHaveBeenCalled();
	});
});
