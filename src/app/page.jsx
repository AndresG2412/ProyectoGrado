import Image from "next/image";
import img1 from "@/app/imgs/imgpitalito.png";
import servicios from "@/app/imgs/Serv-disponibles.png";
import Boton from "./components/Boton";

export default function Home() {
	return (
		<>
            <h1 className="font-semibold text-2xl text-center mt-44">La calidad total a su servicio</h1>
            <h1 style={{ fontFamily: "'Inknut Antiqua', serif" }} className="font-bold text-8xl text-center mt-6">AEROTRANS</h1>

            <div className="relative w-full mt-24">
                <Image src={img1} alt="Rectangulo_1" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mr-10">
                        <p className="font-bold text-3xl my-6">Con muchos servicios</p>
                        <p className="font-bold text-3xl my-6">disponibles para cada</p>
                        <p className="font-bold text-3xl my-6">necesidad y con seguridad</p>
                    </div>
                    <Image src={servicios} alt="servicios" className="ml-10"/>
                </div>
            </div>

            <div className="w-full text-center my-36">
                <div>
                    <Boton titulo={"TAXIS"}/>
                    <Boton titulo={"BUSES"}/>
                    <Boton titulo={"CAMIONETAS"}/>
                </div>

                <div className="w-1/3 border-[3px] border-black h-72 rounded-xl mt-8 mx-auto">

                </div>
            </div>
        </>
	);
}
