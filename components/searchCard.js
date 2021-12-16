import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const SearchCard = () => {
  return (
    <div className='banner-card'>
        <div className='map'>Map Here</div>
        <div className='card-content'>
          <h2>Need help with a move?</h2>
          <p>Book on demand or a pre-scheduled van.</p>
          <div className='card-form'>
            <Paper
              component="form"
              sx={{ p: '2px 4px', mb:'30px', display: 'flex', alignItems: 'center', width: '100%', background:'#F7F7FC', boxShadow:'none'}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="icon">
                <Brightness1Icon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter pickup address"
                inputProps={{ 'aria-label': 'Enter pickup address' }}
              />
            </Paper>
            <Paper
              component="form"
              sx={{ p: '2px 4px', mb:'50px', display: 'flex', alignItems: 'center', width: '100%', background:'#F7F7FC', boxShadow:'none'}}
            >
              <IconButton sx={{ p: '10px' }} aria-label="icon">
                <AddLocationAltIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter destination address"
                inputProps={{ 'aria-label': 'Enter destination address' }}
              />
            </Paper>
          </div>
          <div className='card-buttons'>
            <Button
              key={'Request Now'}
              className="darkbutton"
              sx={{ mb:'16px' }}
            >
              Request Now
            </Button>
            <Button
              key={'Schedule Later'}
              className="lightbutton"
            >
              Schedule Later
            </Button>
          </div>
        </div>
    </div>
  );
};
export default SearchCard;