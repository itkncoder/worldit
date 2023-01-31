import { useState } from "react";
import Modal from "../UI/Modal"
import error from "../../images/error.png"

const ServiceCard = (props) => {

    const [open, setOpen] = useState(false)

    return (  
        <div className="relative service-card w-3/12">
            {open ? <Modal open={setOpen}/> : ''}
            <div onClick={() => {props.error ? setOpen(false) : setOpen(true)}} className={props.bg + " hover:ring hover:ring-4 hover:ring-gray-600 card-service transition-all duration-300 cursor-pointer shadow-xl rounded-xl py-8 px-8 w-full flex flex-col justify-between h-96"}>
                <div className="flex flex-col gap-3">
                    <h1 className="text-slate-200 text-2xl font-semibold">{props.title}</h1>
                    <p className="text-slate-200 max-w-screen-sm">{props.desc}</p> 
                </div>
                <div class="group flex relative">
                    <span class="text-xl text-gray-200 px-2 py-1 flex flex-col items-center">{props.price} $ dan boshlab</span>
                    <span class="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute left-2 -translate-y-12 opacity-0 m-4 w-max mx-auto py-2 px-3">{props.uzs} uzs</span>
                </div> 
            </div>
            {props.error ?  <><img className="first-error absolute error top-10" src={error} alt="error"/> <img className="secodn-error absolute error top-32" src={error} alt="error"/></> : ''}
        </div>
    );
}
 
export default ServiceCard;