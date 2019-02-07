import React from 'react';
import ReactDOM from 'react-dom';

import Geolacation from './Geolacation';

class Conteiner extends React.Component {
	render() {
		return (
			<div className="Conteiner">
				<Geolacation />
			</div>
		)
	}
}

ReactDOM.render(
  <Conteiner />,
  document.getElementById('app')
);

module.hot.accept();
