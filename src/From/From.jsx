import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'
import FormAccordion from './FormAccordion';

const FormStructure = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <div style={{marginTop: "80px"}}>
    <Button onClick={handleOpen}>Open Form</Button>
    <Dialog fullScreen open={open}>
        <DialogTitle sx={{backgroundColor: 'yellow'}}>
            Form Structure
            <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
            <FormAccordion/>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default FormStructure;