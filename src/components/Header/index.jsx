import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SwapVert from '@material-ui/icons/SwapVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  headerStyle: {
    backgroundColor: '#323232',
    padding: '16px',
    color: '#fefefe',
  },
  swapButton: {
    color: '#fefefe',
    width: '26px',
    height: '36px',
    marginLeft: '12px',
    borderRadius: '5px',
  }
}



class Header extends Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <Button
              style={{ color : '#fefefe' }}
            >
              BACK
            </Button>
          </Grid>
          <Grid item style={{ textAlign : 'right' }} xs={6}>
            <Button
              style={{ color : '#fefefe' }}
              onClick={this.handleClick}
            >
              <ExpandMore />
              EUR
            </Button>

            <Menu
              id="simple-menu"
              style={{
                transform : 'translateY(50px)',
              }}
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>EUR</MenuItem>
              <MenuItem onClick={this.handleClose}>GBP</MenuItem>
              <MenuItem onClick={this.handleClose}>USD</MenuItem>
            </Menu>

          </Grid>
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

      </div>
    );
  }
}

export default withStyles(styles)(Header);
