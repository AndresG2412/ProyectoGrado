export default function Boton({titulo}) {
    return(
        <>
            <button class="mx-2 font-bold relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
                {titulo}
            </button>
        </>
    );
}