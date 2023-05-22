function Teams (props){
    return(
        <div><center>
            <table border="2px"> 


            <p><tr><td>{props.player}</td><td>{props.teamName}</td><td> {props.score}</td></tr></p>
            </table></center>
        </div>

    );
}
export default Teams;