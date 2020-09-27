// este es el que viene por defecto con create react app
import '@testing-library/jest-dom/extend-expect'; 

//ese es el de enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

//para hacer los snapshops, extensión enzyme to json
import {createSerializer} from 'enzyme-to-json'; 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));