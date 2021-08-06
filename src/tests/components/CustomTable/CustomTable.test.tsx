import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { CustomTable } from '../../../components/CustomTable/CustomTable';

const mockData = [
	{
		title: 'test object',
		gtin: '1',
		gender: 'unisex',
		price: '1 euro',
		sale_price: '0.5 euro',
		image_link: 'testImg.jpg',
		additional_image_link: 'testImg1.jpg, testImg2.jpg',
	},
];

describe('tests on <CustomTable/>', () => {
	const wrapper = mount(<CustomTable data={mockData} />);

	test('should render <CustomTable/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should render as many rows as items in data array', () => {
		expect(wrapper.find('CustomRow').length).toBe(mockData.length);
	});
});
