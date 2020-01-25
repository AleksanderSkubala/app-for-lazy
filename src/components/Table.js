import React  from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box
} from '@material-ui/core';

const styles = theme => ({
  box: {
    margin: '20px 0 0 20px'
  },
  title: {
    padding: '10px 0'
  },
  formula: {
    fontStyle: 'italic'
  },
  table: {
    width: 350,
    '& th': {
      paddingLeft: 0,
    },
  },
});

class DataTable extends React.Component {
  render() {
  const { classes } = this.props;

  return (
  <Box className={classes.box}>
    {this.props.item ? (
    <>
    <Typography className={classes.title} variant="h4">{this.props.item.name}</Typography>
    <Typography className={classes.formula} variant="h6">{this.props.item.formula}</Typography>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow border={1}>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.item.formula.split("=")[1].match(/[a-z]/g).map(symbol => (
            <TableRow key={symbol} border={1}>
              <TableCell component="th" scope="row">
                {symbol}
              </TableCell>
              <TableCell align="right">
                <TextField
                  id={symbol}
                  label={`Podaj ${symbol}`}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
          {this.props.item.formula.split("=")[0].match(/[a-z]/g).map(symbol => (
            <TableRow key={symbol} border={1}>
              <TableCell component="th" scope="row">
                {symbol}
              </TableCell>
              <TableCell align="right">
                {symbol}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    ) : (
      <Typography className={classes.title} variant="h4">Wyszukaj wzór</Typography>
    )}
  </Box>
  );}
}

const mapStateToProps = (state) => ({
  item: state.formula,
})

export default connect(mapStateToProps)( withStyles(styles)(DataTable) );