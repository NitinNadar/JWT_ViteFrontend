import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useState } from 'react'
import Paper from '../paper/Paper';

const FormStructure = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
    <Button onClick={handleOpen}>Open Form</Button>
    <>
        <Paper open={open} handleClose={handleClose}/>
    </>
    </>
  )
}

export default FormStructure;