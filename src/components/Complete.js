import React from 'react';
import { connect } from 'react-redux';
import { formulas } from '../redux/actions';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fade, withStyles } from '@material-ui/core/styles';
import { mainList } from '../mainList';

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
});

class Complete extends React.Component {
  constructor(props) {
    super(props);
    this.setFormula = this.setFormula.bind(this);
  }

  setFormula = (e, value) => {
    const item = mainList.find(el => {
      return el.name === value;
    });
    console.log(item);
    this.props.dispatch(formulas(item));
  };

  render(){
    return (
      <Autocomplete
        id="combo-box-demo"
        autoHighlight={true}
        options={mainList}
        getOptionLabel={option => option.name}
        style={{width: 300}}
        onInputChange={this.setFormula}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            fullWidth
          />
        )}
      />
  );}
}

export default connect(formulas)( withStyles(styles)(Complete) );