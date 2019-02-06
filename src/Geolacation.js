import React from 'react';

class Geolacation extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			city: null,
			city_rus: null,
			country: null,
			country_code: null,
			country_rus: null,
			ip: null,
			latitude: null,
			longitude: null,
			region: null,
			region_rus: null,
			time_zone:	null

		}
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick () {

	console.log("get")

	const url = "https://api.2ip.ua/geo.json?ip=";
	const xhr = new XMLHttpRequest();

	xhr.open("GET",  url, true)

	xhr.onreadystatechange = ()=>{
		if(xhr.readyState === XMLHttpRequest.DONE) {
			let obj = JSON.parse(xhr.response)
           this.setState(() => ({
		      city: obj.city,
			  city_rus: obj.city_rus,
			  country: obj.country,
			  country_code: obj.country_code,
			  country_rus: obj.country_rus,
			  ip: obj.ip,
			  latitude: obj.latitude,
			  longitude: obj.longitude,
			  region: obj.region,
			  region_rus: obj.region_rus,
			  time_zone: obj.time_zone
		    }));
		}
	}
	xhr.send()

}

	render () {
		return (
			<div className="geolacation" >
				<div>
					<input type="button" onClick={this.handleClick} value="get"  />
				</div>
				<div>
					<div>{this.state.city}</div>
					<div>{this.state.city_rus}</div>
					<div>{this.state.country}</div>
					<div>{this.state.country_code}</div>
					<div>{this.state.country_rus}</div>
					<div>{this.state.ip}</div>
					<div>{this.state.latitude}</div>
					<div>{this.state.longitude}</div>
					<div>{this.state.region}</div>
					<div>{this.state.region_rus}</div>
					<div>{this.state.time_zone}</div>
				</div>
			</div>
		)
	}
}

export default Geolacation