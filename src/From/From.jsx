import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import Paper from '../paper/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { paperFormAction } from '../services/PaperForm/paperForm';

const FormStructure = () => {

    const dispatch = useDispatch();

    const { paperFormLoading, paperFormData, paperFormError } = useSelector((state) => state?.paperFormReducer);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(paperFormAction());
    }, []);

    console.log(paperFormLoading, paperFormData, paperFormError);

    let paperDetails = 
    {
        paper_code: 'AUDIT',
        paper_form_id: 'paper-1001',
	    paper_number: 'paper-1001-Original',
        paper_activation: true,
        paper_created_by: 'Admin',
        paper_header: {
            paper_header_bg_color: '#3b5998',
            paper_title: 'Bank of America Audit Form',
            paper_title_fontsize: '22px',
            paper_title_fontweight: '600',
            paper_title_color: '#f7f7f7',
            paper_title_width: '85%',
            paper_button_bg_color: '#ffffff',
            paper_button_fontsize: '16px',
            paper_button_fontweight: '500',
            paper_button_color: '#3b5998',
	    },
    }

  return (
    <>
    <Button onClick={handleOpen}>Open Form</Button>
    <>
        <Paper open={open} paperDetails={!paperFormLoading ? paperFormData : [] } handleClose={handleClose} handleSave={() => {}}/>
    </>
    </>
  )
}

export default FormStructure;