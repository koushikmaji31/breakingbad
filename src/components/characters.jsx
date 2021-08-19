import Character from './character';
import {Grid, GridListTileBar, Box} from '@material-ui/core';



const Characters = ({data}) => {
    return(
        <Box style = {{margin:200}}>
            <Grid container spacing = {4}>
                {
                    data.map(item =>(
                        <Grid item xs={3}>
                            <Character key={item.char_id} item = {item} />
                        </Grid> 
                    ))
                }
            </Grid>
        </Box>
    )
}
export default Characters;