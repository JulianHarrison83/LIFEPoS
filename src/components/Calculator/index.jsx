import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Digit from '../Digit/index';

class Calculator extends Component {
  constructor() {
    super(props)
      this.state = {
        operations: [],
    }
  }

  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
        >
          <Digit
            buttonchar={'C'}
            color={"#a5a6a7"}
            textcolor={'#323232'}
            value={'c'}
          />
          <Digit
            buttonchar={'CA'}
            color={'#a5a6a7'}
            textcolor={'#323232'}
            value={'ca'}
          />
          <Digit
            buttonchar={'%'}
            color={'#a5a6a7'}
            textcolor={'#323232'}
            value={'%'}
          />
          <Digit
            buttonchar={'/'}
            textcolor={'#323232'}
            color={'#00BCA2'}
            value={'/'}
          />
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Digit
            buttonchar={'7'}
            value={'7'}
          />
          <Digit
            buttonchar={'8'}
            value={'8'}
          />
          <Digit
            buttonchar={'9'}
            value={'9'}
          />
          <Digit
            buttonchar={'*'}
            textcolor={'#323232'}
            color={'#00BCA2'}
            value={'*'}
          />
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Digit
            buttonchar={'4'}
            value={'4'}
          />
          <Digit
            buttonchar={'5'}
            value={'5'}
          />
          <Digit
            buttonchar={'6'}
            value={'6'}
          />
          <Digit
            buttonchar={'-'}
            textcolor={'#323232'}
            color={'#00BCA2'}
            value={'-'}
          />
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Digit
            buttonchar={'1'}
            value={'1'}
          />
          <Digit
            buttonchar={'2'}
            value={'2'}
          />
          <Digit
            buttonchar={'3'}
            value={'3'}
          />
          <Digit
            buttonchar={'+'}
            textcolor={'#323232'}
            color={'#00BCA2'}
            value={'+'}
          />
        </Grid>
        <Grid
          container
          justify="center"
        >
          <Digit
            buttonchar={'00'}
            value={'00'}
          />
          <Digit
            buttonchar={'0'}
            value={'0'}
          />
          <Digit
            buttonchar={'.'}
            value={'.'}
          />
          <Digit
            buttonchar={'='}
            textcolor={'#323232'}
            color={'#00BCA2'}
            value={'='}
          />
        </Grid>
      </div>
    );
  }
}

export default Calculator;