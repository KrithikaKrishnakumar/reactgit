const Student =(props)=>{
    return(
        <>
        <table border="5px" align="center" height="100" width="250">
            <tr>
                <td><b>Name</b></td>
                    <td>{props.name}</td>
                    
            </tr>
            <tr>
                <td><b>Roll.Num</b></td>
                    <td>{props.roll}</td>
                    
            </tr>
            <tr>
                <td><b>Gender</b></td>
                    <td>{props.gender}</td>
                    
            </tr>        
            <tr>
                <td><b>Age</b></td>
                    <td>{props.age}</td>
                    
                    </tr>
        </table>
        </>
    );
}
export default Student