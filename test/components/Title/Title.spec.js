import { mount, shallow } from 'enzyme';
import { Title } from '../../../components/Title';


describe('Title Component', () => {

  it("el componente existe", ()=>{
    const wrapper = shallow(<Title/>);

    expect( wrapper ).toMatchSnapshot();
  })
  



  it('should render without crashing', () => {
    const wrapper = mount(<Title />);

    expect(wrapper.find('h1')).toHaveLength(1);
  });
});