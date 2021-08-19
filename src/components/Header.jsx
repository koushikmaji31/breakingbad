import { AppBar, Toolbar , makeStyles, Box, InputBase} from '@material-ui/core';
import { borderRadius, width } from '@material-ui/system';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/logo.png';

const useStyle = makeStyles({
    header:{
        background: '#808099' 
    },
    image:{
        width:100
    },
    searchbox:{
        width :300,
        backgroundColor : "rgba(255,255,255,0.7)",
        marginLeft : 100,
        borderRadius : 7,
        position : 'relative'
    },
    inputbox:{
        color : '#000',
        marginLeft : 45
    },
    searchicon:{
        position : "absolute",
        marginLeft: 7,
        top: 4,
        color: "#000",
        
    }
})

const Header = ({getText}) => {
    const classes = useStyle();
    return(
        <AppBar className = {classes.header} position= 'static'>
            <Toolbar>
                <img className={classes.image} src={logo} alt="logo"/>
                <Box className = {classes.searchbox}>
                    <box>
                        <SearchIcon
                        className = {classes.searchicon}/>
                    </box>
                    <InputBase 
                        placeholder = "Search for Characters"
                        autoFocus

                        classes = {{root : classes.inputbox}}
                        onChange = {(e) => getText(e.target.value)}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
