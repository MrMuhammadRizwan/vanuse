import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const SignupModal = ({open,onSignUp,handleOpenLoginModal}) => {
    return ( <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        
    >
        <Fade in={open}>
            <Box sx={style} className="signup-modal">
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    <div className="card-heading mb-28">
                        <h2 className="mb-18">Sign up</h2>
                        <p className="mb-28">Already have an account? <a className="cursor-pointer" onClick={handleOpenLoginModal}> Login here</a></p>
                    </div>
                </Typography>
                <Box id="transition-modal-description" sx={{ mt: 2 }}>
                    <Box  className="main-div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            className="input"
                            required
                            label="First Name"
                            type="text"
                            sx={{ marginRight: '20px'}}
                        />
                        <TextField
                            className="input"
                            required
                            label="Last Name"
                            type="text"
                        />                            
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Email"
                            type="text"
                            sx={{ width: '100%'}}
                        />                            
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FormControl fullWidth className="age" sx={{marginBottom: '32px', marginRight: '20px'}}>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="44"
                            >
                                <MenuItem value={10}>70</MenuItem>
                                <MenuItem value={20}>50</MenuItem>
                                <MenuItem value={30}>70</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <TextField
                            className="input"
                            required
                            label="Password"
                            type="number"
                            sx={{width: '100%'}}
                        />  
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Password"
                            type="password"
                            sx={{ width: '100%'}}
                        />                         
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Confirm Password"
                            type="password"
                            sx={{ width: '100%', marginBottom: '13px !important'}}
                        />                            
                    </Box>
                </Box>
                <Box className="termsPolicy" sx={{textAlign: 'center'}}>
                    By clicking “Sign Up” you agree to our <a> Terms of Service </a> as well as our <a> Privacy Policy</a>
                </Box>
                <Button type="button" onClick={onSignUp} className="signup-btn">
                    Sign Up
                </Button>
            </Box>
        </Fade>
    </Modal> );
}
 
export default SignupModal;