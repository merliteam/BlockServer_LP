import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ServerCreationWizard from "@/Components/ServerCreationWizard/ServerCreationWizard";
import { Server } from "http";

export default function Comenzar(){
    return(
        <div className="min-h-screen">
            <Header/>
            <ServerCreationWizard/>
            <Footer/>
        </div>
    )
}