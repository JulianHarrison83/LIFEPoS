import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SwapVert from '@material-ui/icons/SwapVert';
import ExpandMore from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  headerStyle: {
    display: 'grid',
    backgroundColor: '#323232',
    padding: '16px',
    color: '#fefefe',
  },
  swapButton: {
    color: '#fefefe',
    width: '26px',
    height: '36px',
    marginLeft: '12px',
    borderRadius: '45px',
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <Button
              style={{ color : '#fefefe' }}>
              BACK
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              style={{ color : '#fefefe' }}
            >
              <ExpandMore />
              EUR
            </Button>
          </Grid>
          <Grid
            style={{ textAlign: 'center' }}
            item
            xs={12}
          >
            <h1
              style={{
                fontWeight : '300',
                color : '#13DAC6' }}
              >
              €49.99
            </h1>
            <div>
              <h4 style={{ fontWeight : '500' }}>
                LIFE 2,500,000
                <Button
                  className={classes.swapButton}
                >
                  <SwapVert />
                </Button>
              </h4>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
