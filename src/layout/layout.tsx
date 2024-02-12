import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/sidebar";
import HelloUserCard from "../components/helloUserCard/helloUserCard";  
import Searchbar from "../components/searchbar/searchbar";
import CheckInHistoryCard from "../components/checkInHistoryCard/checkInHistoryCard";
export function Layout () {

    return (
        <>              
           <CheckInHistoryCard />
            <HelloUserCard />
            <Sidebar/>
            <Searchbar />
            <Outlet/>
        </>
    )

}