import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

const styles = {
  digitStyle : {
    width: '72px',
    height: '72px',
    margin: '4px 12px 4px 12px',
    background: 'rgba(255,255,255,.10)',
    color: '#ffffff',
  }
}


class Digit extends Component {
  render() {
    const { classes, value, buttonchar, onClick, theme, textcolor, width } = this.props;
    return (
      <IconButton
        style={{
          backgroundColor: this.props.color,
          color: this.props.textcolor
        }}
        className={classes.digitStyle}
        buttonchar={buttonchar}
        onClick={onClick}
        theme={theme}
        value={value}
        textcolor={textcolor}
        width={width}
      >
        {buttonchar}
      </IconButton>
    )
  }
};


Digit.propTypes = {
  buttonchar: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string,
};

export default withStyles(styles)(Digit);
