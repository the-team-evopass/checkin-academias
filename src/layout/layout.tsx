import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/sidebar";
import HelloUserCard from "../components/helloUserCard/helloUserCard";  
import Searchbar from "../components/searchbar/searchbar";
export function Layout () {

    return (
        <>              
            <HelloUserCard />
            <Sidebar/>
            <Searchbar />
            <Outlet/>
        </>
    )

}