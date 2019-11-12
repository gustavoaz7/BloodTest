import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};
