import { Component } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button } from "@material-ui/core";
import history from './History';

function createData(name, techStacks, link) {
    return { name, techStacks, link  };
}

const rows = [
    createData('Test Screen', 'ReactJS', 'UnderConstrcution'),
    createData('Pricing Component', 'ReactJS','Pricing' )
];

export default class SampleComponents extends Component {

    render() {
        return (
            <div style={{ height: 400, width: '80%' }}>

                <TableContainer >
                    <Table sx={{ minWidth: 650 }} style={{ border: 'solid 1px black' }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Screen Name</TableCell>
                                <TableCell align="right">Tech Stack</TableCell>
                                <TableCell align="right">Link to Demo</TableCell>                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.techStacks}</TableCell>
                                    <TableCell align="right"> 
                                     <Button class="btn btn-success" variant="contained" onClick={() => history.push(row.link)}>Demo Click</Button>
                                     </TableCell>
                                   
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>


        );
    }
}