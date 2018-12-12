import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle : {
    borderRadius: '45px',
    width: '100%',
    height: '72px',
    fontSize: '18px',
  }
}


class CustomButton extends Component {
  render() {
    const { classes, buttontext, onClick, color } = this.props;
    return (
      <Grid item xs={8}>
        <Button
          style={{
            backgroundColor: this.props.color
          }}
          className={classes.buttonStyle}
          buttontext={buttontext}
          onClick={onClick}
        >
          {buttontext}
        </Button>
      </Grid>
    )
  }
};


CustomButton.propTypes = {
  onClick: PropTypes.func,
  buttontext: PropTypes.string,

};

export default withStyles(styles)(CustomButton);
