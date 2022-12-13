class AirlineForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Lname: '',
			confNumber: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		//waiting time
		alert('You have submitted the form. Name:' + event.target.Lname.value + 'CNumber:' + event.target.confNumber.value)
		airlineRender();
	}


	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>
						Last Name:
						<input
							name="Lname"
							type="string"
							value={this.state.Lname}
							onChange={this.handleInputChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Flight Confirmation Number:
						<input
							name="confNumber"
							type="string"
							value={this.state.confNumber}
							onChange={this.handleInputChange}
						/>
					</label>
				</div>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}


class ProductList extends React.Component {

	render() {
		const productComponents = Seed.products.map((product) => (
			<Product
				id={product.id}
				title={product.title}
				locations={product.locations}
				url={product.url}
				dates={product.dates}
				airline={product.airline}
				hasCheckedIn={product.hasCheckedIn}
			/>
		));
		return (
			<div className='ui unstackable items'>
				{productComponents}
			</div>
		);
	}
}



class Product extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {

		let result = confirm('Are you sure you want to register AutoCheckIn for this flight?');
		if (result == true) {
			//add waiting time
			//change hasCheckedIn status? might be already in the southwest API
	
			alert('You have successfully registered.');
		}
	}

	refresh() {
		this.setState({});
	}

	render() {
		if (this.props.hasCheckedIn == false ) {
			return (
				<div className='item'>
					<div className='left aligned content'>
						<div className='header'>
							<i className='plane icon' />
							<a href={this.props.url}>
								{this.props.title}
							</a>
						</div>
						<div className='description'>
							{this.props.dates}
							<p>
								{this.props.locations}
							</p>
						</div>
						<div className='extra'>
							<span>Airline: {this.props.airline}</span>

						</div>
					</div>
					<div className='right aligned content'>
						<button onClick={this.handleClick} type="button">Register for AutoCheckin</button>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className='item'>
					<div className='left aligned content'>
						<div className='header'>
							<i className='plane icon' />
							<a href={this.props.url}>
								{this.props.title}
							</a>
						</div>
						<div className='description'>
							{this.props.dates}
							<p>
								{this.props.locations}
							</p>
						</div>
						<div className='extra'>
							<span>Airline: {this.props.airline}</span>

						</div>
					</div>
					<div className='right aligned content'>
						<button type="button">You have already registered</button>
					</div>
				</div>
			);
		}
	}
}
ReactDOM.render(
	<AirlineForm />,
	document.getElementById('form')
);

function airlineRender() {
	ReactDOM.render(
		<ProductList />,
		document.getElementById('content')
	);
}