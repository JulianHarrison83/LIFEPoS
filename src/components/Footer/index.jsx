import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomButton from '../CustomButton/index';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  headerStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    background: '#323232',
  }
}

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} className={classes.headerStyle}>
        <CustomButton
          buttontext={'NEXT'}
          color={'#13DAC6'}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
