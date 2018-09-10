import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from '../../components/research-dev-componets';


it('Home renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});