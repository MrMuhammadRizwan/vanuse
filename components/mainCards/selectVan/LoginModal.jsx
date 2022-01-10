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

const LoginModal = ({open,onLogin,handleOpenSignUpModal}) => {
    return (  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        
    >
        <Fade in={open}>
            <Box sx={style} className="signup-modal">
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    <div className="card-heading mb-81">
                        <h2 className="mb-18">Welcome Back</h2>
                        <p>Don't have an account? <a className="cursor-pointer" onClick={handleOpenSignUpModal} > Sign Up here</a></p>
                    </div>
                </Typography>
                <Box id="transition-modal-description" sx={{ mt: 2 }}>
                   
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Email"
                            type="text"
                            sx={{ width: '100%'}}
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
                     
                </Box>
                <Box className="termsPolicy" sx={{textAlign: 'center'}}>
                    
                </Box>
                <Button className="signup-btn login-btn" onClick={onLogin}>
                    Login
                </Button>
                <Box className="forgot-password" onClick={onLogin}>
                    Forgot Password?
                </Box>
            </Box>
        </Fade>
    </Modal> );
}
 
export default LoginModal;