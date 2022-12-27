
import Home from "../Components/Home";
import SideBar from "../Components/SideBar";


export default function DashBoard(props){
    
    return (
        <main style={{display:'flex'}}>
            <SideBar/>
            <Home />
        </main>
    )
}