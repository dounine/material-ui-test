import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

function RaisedButtons(props) {
	const classes = props.classes;
	function buttonClick() {
		console.log('hello');
	}
	return (
			<Button onClick={buttonClick} raised className={classes.button}>
				Default
			</Button>
	);
}

RaisedButtons.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);