import { Apple,Pizza,IceCream,Dessert,Tractor,BusFront,Bus,CarTaxiFront,Angry,Frown,Meh,Smile,Cake,CandyCane,Candy,Cookie }
 from "lucide-react";
const Icon=()=>
{
    return (
        <>
        <table border="5px" width="300" height="250">
            <tr>
                <td><Apple /></td>
                <td><Pizza strokeWidth={2.25} /></td>
                <td><IceCream strokeWidth={1.5} /></td>
                <td><Dessert strokeWidth={1.5} /></td>
            </tr>
            <tr>
                <td><Tractor strokeWidth={1.5} /></td>
                <td><BusFront strokeWidth={1.5} /></td>
                <td><Bus strokeWidth={1.5} /></td>
                <td><CarTaxiFront strokeWidth={1.5} /></td>
            </tr>
            <tr>
                <td><Angry strokeWidth={1.5} /></td>
                <td><Frown strokeWidth={1.5} /></td>
                <td><Meh strokeWidth={1.5} /></td>
                <td><Smile strokeWidth={1.5} /></td>
            </tr>
            <tr>
                <td><Cake strokeWidth={1.5} /></td>
                <td><CandyCane strokeWidth={1.5} /></td>
                <td><Candy strokeWidth={1.5} /></td>
                <td><Cookie strokeWidth={1.5} /></td>
            </tr>
            </table>
        </>
    )
}
export default Icon;