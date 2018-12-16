import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { increment, decrement, add, substract } from '../../actions/counter';
import { storeResult, deleteResult } from '../../actions/results';

class Counter extends Component {
	state = {
		counter: 0
	}

	render() {
		// console.log(this.props.count)
		return (
			<div>
				<CounterOutput value={this.props.count} />
				<CounterControl label="Increment" clicked={this.props.onIncrement} />
				<CounterControl label="Decrement" clicked={() => this.props.onDecrement()} />
				<CounterControl label="Add 5" clicked={() => this.props.onAdd()} />
				<CounterControl label="Subtract 5" clicked={() => this.props.onSubstract()} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.count)}>Store Result</button>
				<ul>
					{this.props.storedResults.map((result, index) => {
						console.log('result', result);
						return (
							<li key={index} onClick={() => this.props.onDeleteResult(result.id)}>Delete Item {result.payloadResult}</li>
						)
					})}
				</ul>
			</div>
		);
	}
}

// Recive here like props the state from redux - reducers
const mapStateToProps = (state) => {
	return {
		count: state.count.counter,
		storedResults: state.results.results
	};
};

// Whitch actions to dispatch in this container
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => dispatch(increment()),
		onDecrement: () => dispatch(decrement()),
		onAdd: () => dispatch(add(5)),
		onSubstract: () => dispatch(substract(5)),
		onStoreResult: (counter) => dispatch(storeResult(counter)),
		onDeleteResult: (id) => dispatch(deleteResult(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);