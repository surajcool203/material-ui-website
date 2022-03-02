import { Box, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@material-ui/core';
import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';



const Add = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,

    };


    const [open, setopen] = useState(false);

    const [openAlert, setopenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setopenAlert(false);
    };

    return (
        <Box position="fixed" sx={{ bottom: 10, right: 50 }}  >
            <Tooltip describeChild title="Add" onClick={() => setopen(true)}>
                <Fab
                    color="secondary"
                    sx={{
                        position: 'absolute',
                        bottom: (theme) => theme.spacing(2),
                        right: (theme) => theme.spacing(2),
                    }}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Box component="form" sx={style}>
                    <TextField id="standard-basic" label="Title" variant="standard" style={{ width: "50%" }} size='small' />

                    <br />

                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Tell your story...."
                        style={{ width: "100%" }} size='small' />
                    <br />
                    <TextField select label="Visibility" value="public" >
                        <MenuItem value="public" size='small'>Public</MenuItem>
                        <MenuItem value="private" size='small'>Private</MenuItem>
                        <MenuItem value="unlisted" size='small'>Unlisted</MenuItem>
                    </TextField>
                    <br />
                    <FormLabel id="demo-radio-buttons-group-label">Who can comment?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Everyone"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio size='small' />} label="Everyone" />
                        <FormControlLabel value="male" control={<Radio size='small' />} label="My friends" />
                        <FormControlLabel value="other" control={<Radio size='small' />} label="Nobody" />
                    </RadioGroup>

                    <br />

                    <Button variant="outlined" color='primary' sx={{ mr: 2 }} onClick={() => setopenAlert(true)}> Create</Button>
                    <Button variant="outlined" color='secondary' onClick={() => setopen(false)}> Cancel</Button>

                </Box>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </Box >
    );
};

export default Add;