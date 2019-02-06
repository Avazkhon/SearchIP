import React from 'react';
import ReactDOM from 'react-dom';

import Head from './Head';
import Geolacation from './Geolacation';
import Footer from './Footer';

class Conteiner extends React.Component {
	render() {
		return (
			<div className="Conteiner">
				<Head />
				<Geolacation />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(
  <Conteiner />,
  document.getElementById('app')
);

module.hot.accept();
