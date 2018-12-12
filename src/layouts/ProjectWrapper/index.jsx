import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/index';
import Body from '../../components/Body/index';
import Footer from '../../components/Footer/index';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  wrapper: {
    fontFamily: 'Roboto',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    overflowX: 'hidden',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#E4E4E4',
  }
}

class ProjectWrapper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <Grid
          item
          style={{
            maxWidth: '450px',
            boxShadow : '0px 0px 19px 8px rgba(0,0,0,0.17)'
          }}
          xs={12}
        >


          <Header />
          <Body />
          <Footer />


        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectWrapper);
