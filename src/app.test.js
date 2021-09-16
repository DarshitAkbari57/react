import { makeMountRender, reduxify, snapshotify } from './test-utils';
import App from './App';

describe('Render app', function() {

  let vuetify
  let store
  let wrapper;

  beforeEach(() => {
    
  })

  it('matches snapshot', function() {
    wrapper = makeMountRender(reduxify(App))();
    expect(snapshotify(wrapper)).toBeTruthy();
  });
});
