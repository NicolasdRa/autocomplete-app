import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { CustomRow } from '../../../../components/CustomTable/CustomRow/CustomRow';

const mockData = {
	title: 'test object',
	gtin: '1',
	gender: 'unisex',
	price: '1 euro',
	sale_price: '0.5 euro',
	image_link: 'testImg.jpg',
	additional_image_link: 'testImg1.jpg, testImg2.jpg',
};

describe('tests on <CustomRow/>', () => {
	const wrapper = mount(<CustomRow data={mockData} />);
	const button = wrapper.find('button');

	test('should render <CustomRow/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('expanded content should mount on click on btn', () => {
		button.simulate('click');
		expect(wrapper.find('RowExpandedContent').exists()).toBe(true);
	});
});
