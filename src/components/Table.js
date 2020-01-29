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
  Box,
  Button
} from '@material-ui/core';
import { solver, merge } from "../solver";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const styles = theme => ({
  box: {
    margin: '20px 0 0 20px'
  },
  title: {
    padding: '10px 0'
  },
  formula: {
    padding: '20px 0',
    fontStyle: 'italic',
  },
  table: {
    width: 350,
    '& th': {
      paddingLeft: 0,
    },
  },
  input: {
    width: 120
  },
  btn: {
    color: 'white',
    backgroundColor: '#009432',
    '&:hover': {
      backgroundColor: '#007210',
    },
  }
});

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataShowed: false,
    }
    this.refreshData = this.refreshData.bind(this);
  }

  refreshData(symbol, value) {
    this.setState({dataShowed: false});
    value=value.replace(',', '.');
    if(/^[0-9(.*)]*$/g.test(value) && value) {
      const arr = solver(this.props.item.formula, symbol, value);
      const merged = merge(arr, this.state.data);
      this.setState({ data: merged });
    }
  }

  render() {
  const { classes } = this.props;

  return (
  <Box className={classes.box}>
    {this.props.item ? (
    <>
    <Typography className={classes.title} variant="h5">{this.props.item.name}</Typography>
    <Typography className={classes.formula} variant="h5">
      <InlineMath math={this.props.item.latex} />
    </Typography>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow border={1}>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.item.formula.split("=")[1].match(/[a-z]/g).map((symbol, i) =>
          this.props.item.formula.split("=")[1].match(/[a-z]/g).indexOf(symbol) === i ? (
            <TableRow key={symbol} border={1}>
              <TableCell component="th" scope="row">
                {symbol}
              </TableCell>
              <TableCell align="right">
                <TextField
                  // id={symbol}
                  className={classes.input}
                  label={`Podaj ${symbol}`}
                  variant="outlined"
                  size="small"
                  onChange={(e) => this.refreshData(symbol, e.target.value)}
                />
              </TableCell>
            </TableRow>
          ) : (<></>) )}
          <TableRow>
            <TableCell colSpan={2} align="center">
              <Button
                className={classes.btn}
                size="large"
                onClick={() => {this.setState({dataShowed: true})}}
              >OBLICZ</Button>
            </TableCell>
          </TableRow>
          {this.props.item.formula.split("=")[0].match(/[a-z]/g).map(symbol => (
            <TableRow key={symbol} border={1}>
              <TableCell component="th" scope="row">
                {symbol}
              </TableCell>
              <TableCell align="right">
                {this.state.dataShowed ? eval(this.state.data.join("")) : "0"}
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