import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RowExpandedContent } from '../../../../components/CustomTable/RowExpandedContent/RowExpandedContent';

const mockData = '1, 2, 3';

describe('tests on <RowExpandedContent/>', () => {
	const wrapper = shallow(<RowExpandedContent data={mockData} />);

	test('should render <RowExpandedContent/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should render as many images as items divided by commas in the string', () => {
		expect(wrapper.find('img').length).toBe(3);
	});
});
