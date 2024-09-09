import logo from "@/app/imgs/logo.png";
import Image from 'next/image';


export default function Navbar(){
    return(
        <>
            <div className="z-50 fixed w-[90%] h-[70px] bg-[#D9D9D9] rounded-3xl flex justify-between items-center">
                <Image className="h-10 w-80 ml-6" src={logo} alt="Logo"/>
                <div className="flex font-semibold mr-6">
                    <a href="#" className="link mx-4 text-lg">CUENTA</a>
                    <a href="#" className="link mx-4 text-lg">POLITICAS</a>
                    <a href="#" className="link mx-4 text-lg">NOSOTROS</a>
                    <a href="#" className="link mx-4 text-lg">CONTACTO</a>
                    <a href="#" className="link mx-4 text-lg">SERVICIOS</a>
                </div>
            </div>
        </>
    );
}