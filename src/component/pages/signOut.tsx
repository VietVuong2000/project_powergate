import { Paper, Box, Typography, Button } from "@mui/material"
import Avatar from '@mui/material/Avatar';

const SignOut = () =>{
    return(
        <Paper elevation={0} style={{display: 'flex', flexDirection: 'column'}}>
            <Box>
            
              <Avatar>V</Avatar>
          
            <Typography>Việt Vương</Typography>
            </Box>
            <Box>
            <Typography>Research and Development again</Typography>
            </Box>
            <Button variant="contained">Sign Out</Button>
        </Paper>
    )
}
export default SignOut