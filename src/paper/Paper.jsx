import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"
import FormAccordion from "../From/FormAccordion"
import { ExpandMore } from "@mui/icons-material"

const Paper = (props) => {
  return (
    <>
        <Dialog 
            fullScreen 
            open={props?.open} 
        >
            <DialogTitle 
                sx={{
                    backgroundColor: props?.paperDetails?.paper_header?.paper_header_bg_color, 
                    display: 'flex', 
                    justifyContent:'space-between', 
                    alignItems: 'center'
                }}
            >
                <Typography 
                    sx={{ 
                        fontSize: props?.paperDetails?.paper_header?.paper_title_fontsize, 
                        fontWeight: props?.paperDetails?.paper_header?.paper_title_fontweight, 
                        color: props?.paperDetails?.paper_header?.paper_title_color,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: props?.paperDetails?.paper_header?.paper_title_width,
                        maxWidth: props?.paperDetails?.paper_header?.paper_title_width
                    }}
                >
                    {props?.paperDetails?.paper_header?.paper_title}
                </Typography>
                <Box 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'row',
                        width: '15%',
                        alignItems: 'flex-end',
                        justifyContent: 'space-evenly'
                        }}
                    >
                        <Button 
                            sx={{
                                backgroundColor: props?.paperDetails?.paper_header?.paper_button_bg_color, 
                                textTransform: 'none'
                                }} 
                            onClick={() => props?.handleSave()}
                        >
                            <Typography
                                sx={{ 
                                    fontSize: props?.paperDetails?.paper_header?.paper_button_fontsize, 
                                    fontWeight: props?.paperDetails?.paper_header?.paper_button_fontweight, 
                                    color: props?.paperDetails?.paper_header?.paper_button_color,
                                }}
                            >
                                Save
                            </Typography>
                        </Button>
                        <Button 
                            sx={{
                                backgroundColor: props?.paperDetails?.paper_header?.paper_button_bg_color, 
                                textTransform: 'none'
                                }} 
                            onClick={() => props?.handleClose()}
                        >
                            <Typography
                                sx={{ 
                                    fontSize: props?.paperDetails?.paper_header?.paper_button_fontsize, 
                                    fontWeight: props?.paperDetails?.paper_header?.paper_button_fontweight, 
                                    color: props?.paperDetails?.paper_header?.paper_button_color,
                                }}
                            >
                                Close
                            </Typography>
                        </Button>
                </Box>
            </DialogTitle>
            <DialogContent>
            <Accordion sx={{backgroundColor: 'white', border: '2px solid #e0e0e0', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)'}}>
                <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>New Form Structure Main</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default Paper