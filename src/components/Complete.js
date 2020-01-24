import React from 'react';
import { connect } from 'react-redux';
import { formulas } from '../redux/actions';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fade, makeStyles } from '@material-ui/core/styles';

const mainList = [
  {name: 'prędkość w ruchu po okręgu'},
  {name: 'prędkość Żyda'},
];

/*const styles = makeStyles(theme => ({
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
}));*/

class Complete extends React.Component {
  constructor(props) {
    super(props);
    this.setFormula = this.setFormula.bind(this);
    console.log(props);
  }

  setFormula = (e) => {
    this.props.dispatch(formulas(e.target.value));
  };

  render(){
    return (
      <Autocomplete
        id="combo-box-demo"
        options={mainList}
        getOptionLabel={option => option.name}
        style={{width: 300}}
        onInputChange={this.setFormula}
        renderInput={params => (
          <TextField {...params} variant="outlined" fullWidth onChange={this.setFormula}/>
        )}
      />
  );}
}

export default connect(formulas)(Complete);