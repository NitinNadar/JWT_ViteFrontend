import { Box, Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"

const Paper = (props) => {
  return (
    <>
        <Dialog 
            fullScreen 
            open={props?.open} 
        >
            <DialogTitle 
                sx={{
                    backgroundColor: '#3b5998', 
                    display: 'flex', 
                    justifyContent:'space-between', 
                    alignItems: 'center'
                }}
            >
                <Typography 
                    sx={{ 
                        fontSize: '22px', 
                        fontWeight: '600', 
                        color: '#f7f7f7',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '85%',
                        maxWidth: '85%'
                    }}
                >
                    Bank of America Audit Form
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
                                backgroundColor: '#ffffff', 
                                textTransform: 'none'
                                }} 
                            onClick={() => {}}
                        >
                            <Typography
                                sx={{ 
                                    fontSize: '16px', 
                                    fontWeight: '500', 
                                    color: '#3b5998',
                                }}
                            >
                                Save
                            </Typography>
                        </Button>
                        <Button 
                            sx={{
                                backgroundColor: '#ffffff', 
                                textTransform: 'none'
                                }} 
                            onClick={props?.handleClose}
                        >
                            <Typography
                                sx={{ 
                                    fontSize: '16px', 
                                    fontWeight: '500', 
                                    color: '#3b5998',
                                }}
                            >
                                Close
                            </Typography>
                        </Button>
                </Box>
            </DialogTitle>
            <DialogContent>

            </DialogContent>
        </Dialog>
    </>
  )
}

export default Paper