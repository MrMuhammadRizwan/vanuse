import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';

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
const SignupModal = ({open,onSignUp,handleOpenLoginModal, handleClose}) => {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [confirmPassword, setConfirmPassword] = React.useState(null);
    const [phoneNumber, setPhoneNumber] = React.useState(null);

    const onSignUpClick = () => {
        onSignUp(email,password,phoneNumber)
    }

    return ( <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        
    >
        <Fade in={open}>
            <Box sx={style} className="signup-modal">
                <Typography id="transition-modal-title" variant="h6" component="h2">
                <CloseIcon className="cross-icon" onClick={handleClose} />
                    <div className="card-heading mb-28">
                        <h2 className="mb-18">Sign up</h2>
                        <p className="mb-28">Already have an account? <a className="cursor-pointer" onClick={handleOpenLoginModal}> Login here</a></p>
                    </div>
                </Typography>
                <Box id="transition-modal-description" sx={{ mt: 2 }}>
                    <Box  className="main-div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TextField
                            className="input"
                            label="First Name"
                            type="text"
                            sx={{ marginRight: 'auto'}}
                        />
                        <TextField
                            className="input"
                            label="Last Name"
                            type="text"
                        />                            
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            label="Email"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="text"
                            sx={{ width: '100%'}}
                        />                            
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FormControl fullWidth className="age" sx={{marginBottom: '32px', marginRight: '20px'}}>
                            <InputLabel id="demo-simple-select-label">Ext</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="44"
                                required
                            >
                                <MenuItem value={'+44'} selected>+44</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <TextField
                            className="input"
                            required
                            label="Phone"
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                            type="number"
                            sx={{width: '100%'}}
                        />  
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            sx={{ width: '100%'}}
                        />                         
                    </Box>
                    <Box>
                        <TextField
                            className="input"
                            required
                            label="Confirm Password"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            type="password"
                            sx={{ width: '100%', marginBottom: '13px !important'}}
                        />                            
                    </Box>
                </Box>
                <Box className="termsPolicy" sx={{textAlign: 'center'}}>
                    By clicking “Sign Up” you agree to our <a type='button' className='cursor-pointer'> Terms of Service </a> as well as our <a type='button' className='cursor-pointer'> Privacy Policy</a>
                </Box>
                <Button type="button" onClick={onSignUpClick} disabled={(email && phoneNumber && password && password === confirmPassword) ? false : true} className="signup-btn">
                    Sign Up
                </Button>
            </Box>
        </Fade>
    </Modal> );
}


// This is for the asterisk color

// overrides: {
//     MuiFormLabel: {
//         asterisk: {
//             color: '#31b7b7',
//             '&$error': {
//                 color: '#31b7b7'
//             },
//         }
//     }
// }
export default SignupModal;