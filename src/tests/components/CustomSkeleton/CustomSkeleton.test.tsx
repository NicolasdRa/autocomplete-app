import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { CustomSkeleton } from '../../../components/CustomSkeleton/CustomSkeleton';

describe('tests on <CustomSkeleton/>', () => {
	const wrapper = shallow(<CustomSkeleton />);

	test('should render <CustomSkeleton/> correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
