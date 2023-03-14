import { Box } from '@mui/material'
import React from 'react'
import BreakdownChart from '../../cmps/breakdown-chart'
import Header from '../../cmps/header'

function Breakdown() {

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Breakdown" subtitle='Breakdown of Sales By Category'/>
        <Box mt="40px" height="75vh">
            <BreakdownChart />
        </Box>
    </Box>
  )
}

export default Breakdown