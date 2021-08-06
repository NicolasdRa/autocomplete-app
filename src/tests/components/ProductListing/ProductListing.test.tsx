import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ProductListing } from '../../../components/ProductListing/ProductListing';

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

	{
		title: 'test object2',
		gtin: '1',
		gender: 'female',
		price: '2 euro',
		sale_price: '0.5 euro',
		image_link: 'testImg.jpg',
		additional_image_link: 'testImg1.jpg, testImg2.jpg',
	},

	{
		title: 'test object3',
		gtin: '1',
		gender: 'male',
		price: '3 euro',
		sale_price: '0.5 euro',
		image_link: 'testImg.jpg',
		additional_image_link: 'testImg1.jpg, testImg2.jpg',
	},
];

describe('tests on <ProductListing/>', () => {
	const wrapper = shallow(<ProductListing data={mockData} />);

	test('should render <ProductListing/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
