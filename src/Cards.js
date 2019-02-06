import React from 'react';

class Cards extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div>город: {this.props.city}</div>
				<div>страна {this.props.country}</div>
				<div>аббревиатура: {this.props.country_code}</div>
				<div>IP: {this.props.ip}</div>
				<div>ширина: {this.props.latitude}</div>
				<div>долгота: {this.props.longitude}</div>
				<div>регион: {this.props.region}</div>
				<div>ч. пояс: {this.props.time_zone}</div>
			</div>
		)
	}
}
export default Cards