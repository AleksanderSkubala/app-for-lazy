import React from 'react';
import { connect } from 'react-redux';
import { formulas } from '../redux/actions';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { fade, withStyles } from '@material-ui/core/styles';
import { mainList } from '../_mainList';

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
  input: {
    minWidth: 300,
    '& input': {
      padding: theme.spacing(1, 1, 1, 7),
      width: '100%',
    }
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
    this.props.dispatch(formulas(item));
  };

  render(){
    const { classes } = this.props;

    return (
      <Autocomplete
        id="combo-box-search"
        className={classes.search}
        autoHighlight={true}
        groupBy={option => option.category}
        options={mainList}
        getOptionLabel={option => option.name}
        onInputChange={this.setFormula}
        renderInput={params => (
          <TextField
            className={classes.input}
            {...params}
            fullWidth
            variant="outlined"
            size="small"
          />
        )}
      />
  );}
}

export default connect(formulas)( withStyles(styles)(Complete) );