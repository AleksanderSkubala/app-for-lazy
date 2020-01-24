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
  Box
} from '@material-ui/core';
import { mainList } from '../mainList';

const styles = theme => ({
  box: {
    margin: '20px 0 0 20px'
  },
  title: {
    padding: '10px 0'
  },
  table: {
    width: 400,
    '& th': {
      paddingLeft: 0,
    }
  },
});

class DataTable extends React.Component {
  render() {
  const { classes } = this.props;
  console.log(this.props);
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
        {this.props.item ? (
          <TableRow key={this.props.item.name} border={1}>
            <TableCell component="th" scope="row">
              {this.props.item.name}
            </TableCell>
            <TableCell align="right">{this.props.item.formula}</TableCell>
          </TableRow>
        ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );}
}

const mapStateToProps = (state) => ({
  item: state.formula,
})

export default connect(mapStateToProps)( withStyles(styles)(DataTable) );