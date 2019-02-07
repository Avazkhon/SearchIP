import React from 'react';

let innerObj = [];
class Geolacation extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			object: {
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
			},
			value: "",
			oldRequests: false

		}
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleStorge = this.handleStorge.bind(this);
		this.handleOldRequests = this.handleOldRequests.bind(this);
	}


	handleClick () {
		const url = "https://api.2ip.ua/geo.json?ip="+this.state.value;
		const xhr = new XMLHttpRequest();
		xhr.open("GET",  url, true)

		xhr.onreadystatechange = ()=>{
			if(xhr.readyState === XMLHttpRequest.DONE) {
				let obj = JSON.parse(xhr.response)
				obj.date = new Date();
				innerObj.push(obj)
	           this.setState(() => ({
	           	  object: {
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
				 }

			    }));
	           localStorage.setItem("localObj", JSON.stringify(innerObj)) 
			}
		}
		xhr.send()
	}

	currentRequest(obj) {
		return (
			<div className="currentRequestInner" >
				<div>город: {obj.city}</div>
				<div>страна {obj.country}</div>
				<div>аббревиатура: {obj.country_code}</div>
				<div>IP: {obj.ip}</div>
				<div>ширина: {obj.latitude}</div>
				<div>долгота: {obj.longitude}</div>
				<div>ч. пояс: {obj.time_zone}</div>
			</div>
		)
	}
	
  	handleChange(event) {
  		let inputValue = localStorage.getItem('inputValue')
  		console.log(inputValue)
  		this.setState({ value: inputValue })
  		localStorage.setItem("inputValue", this.state.value);
 		this.setState({value: event.target.value});

  	}

  	handleOldRequests() {
  		this.setState(()=>({
  			oldRequests: !this.state.oldRequests
  		}))
  		console.log("handleOldRequests",this.state.oldRequests)
  	}

  	handleStorge () {
  		let obj = JSON.parse(localStorage.getItem('localObj'));

  		if(obj!== null && !this.state.oldRequests) {

  			let getObj = obj.map((item)=>{
		  		return(
					<div className="storyInner" key={item.date}>
						<div>дата: {item.date}</div>
						<div>город: {item.city}</div>
						<div>страна: {item.country}</div>
						<div>аббревиатура: {item.country_code}</div>
						<div>IP: {item.ip}</div>
						<div>ширина: {item.latitude}</div>
						<div>долгота: {item.longitude}</div>
						<div>ч. пояс: {item.time_zone}</div>
					</div>
		  		)
	  		})
  			return getObj;
  		}
  		return null
  	}

	render () {
		return (
			<div className="geolacation" >
				<div className="tools" >
					<div className="button">
						<input type="button" className="btn" onClick={this.handleClick} value="узнать свой адрес"  />
						<input type="button" className="btn"  value="скрить старые запросы" onClick={this.handleOldRequests}/>
					</div>
					<div className="searche" >
						<input type="number" className="btn" name="urlIP" placeholder="введите IP" value={this.state.value} onChange={this.handleChange} />
						<input type="button" className="btn" value="найти" onClick={this.handleClick } />
					</div>
				</div>
				<div className="currentRequest">
					{ this.currentRequest(this.state.object) }
				</div>
				<div className="story">
					{ this.handleStorge() }
				</div>
			 </div>
		)
	}
}

export default Geolacation