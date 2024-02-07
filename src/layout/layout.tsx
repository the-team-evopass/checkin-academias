import { Outlet } from "react-router-dom"
import { Sidebar } from "../components/sidebar/sidebar";
import HelloUserCard from "../components/helloUserCard/helloUserCard";

export function Layout () {

    return (
        <>  
            <HelloUserCard />
            <Sidebar/>
            <Outlet/>
        </>
    )

}