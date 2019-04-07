// basic react component starting template
import React, { Component } from 'react';
import Counter from './Counter'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';





class SimpleComponent extends Component {
    render() {
        return (
    <Grid container spacing={24} justify="space-between" >

        <Grid item xs={1}>

        </Grid>
        <Grid item xs={10}>
          <Paper style={{padding : 20, marginTop: 20}} ></Paper>
        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={1}>

        </Grid>
        <Grid item xs={3}>
        <Button style={{marginRight : 20}} variant="contained" >
        Default
        </Button>
        <Button style={{marginRight : 20}} variant="contained" >
        Default
        </Button>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={3}>
        <Button style={{marginRight : 20}} variant="contained" >
        Default
        </Button>
        <Button style={{marginRight : 20}} variant="contained" >
        Default
        </Button>
        </Grid>
        <Grid item xs={1}>

        </Grid>

      </Grid>
        );
    }
}

export default SimpleComponent;