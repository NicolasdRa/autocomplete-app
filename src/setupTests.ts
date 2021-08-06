// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter() });

//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
