import React  from 'react';
import { connect } from "react-redux";
import { formulas } from "../redux/actions";
import { withStyles } from '@material-ui/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from '@material-ui/core';

const styles = {
  box: {
    margin: '20px 0 0 20px'
  },
  title: {
    padding: '10px 0'
  },
  table: {
    width: 250,
    '& th': {
      paddingLeft: 0,
    }
  },
};

function createData(symbol, value) {
  return { symbol, value };
}

const rows = [
  createData('s=', 123),
  createData('t=', 45)
];

class DataTable extends React.Component {
  render() {
  const { classes } = this.props;
  return (
  <Box className={classes.box}>
    <Typography className={classes.title} variant="h4">Data Table</Typography>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow border={1}>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.symbol} border={1}>
              <TableCell component="th" scope="row">
                {row.symbol}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {this.props.formula}
  </Box>
  );}
}

const mapStateToProps = (state) => ({
  formula: state.formula,
})

export default connect(mapStateToProps)( withStyles(styles)(DataTable) );