import {Card , makeStyles , Tooltip, Typography} from "@material-ui/core";


const useStyle = makeStyles({
    img : {
        height : 300,
        width : "100%",
        borderRadius : 5,
        
        
        
    }
})


const Character = ({ item }) => {
    const classes = useStyle();
    return(
        <Card>
            <Tooltip title = {
                <>
                    <Typography > Name: {item.name}</Typography>
                    <Typography > DOB: {item.birthday}</Typography>
                    <Typography > Occupation: {item.occupation}</Typography>
                    <Typography > Status: {item.status}</Typography>
                    <Typography > Nickname: {item.nickname}</Typography>
                    <Typography > Actor: {item.portrayed}</Typography>
                    <Typography > Seasons Appearence: {item.appearance}</Typography>
                    
                </>
            }>
            <img src={item.img} className = {classes.img} alt = "chareacter" />
            </Tooltip>
        </Card>
    )
}
export default Character;