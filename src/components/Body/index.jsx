import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Calculator from '../Calculator/index';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  bodyStyle: {
    background: '#323232'
  }
}

class Body extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} className={classes.bodyStyle}>
        <Calculator />
      </Grid>
    );
  }
}

export default withStyles(styles)(Body);
