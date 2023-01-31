import FormContact from "../FormContact";
import Btn2 from "../UI/Btn2"
import { useState } from "react"
import Modal from "../UI/Modal"

const MainTop = () => {

    const [open, setOpen] = useState(false)

    return (  
        <div className="main-top flex justify-around items-start mt-2 gap-2">
            {open ? <Modal open={setOpen}>
                <FormContact/>
            </Modal> : ''}
            <div className="main-top-div flex flex-col gap-6 mt-20">
                <div className="main-top-div-top flex flex-col gap-3">
                    <h1 className="text-5xl max-w-xl title">Mobil ilovalar, veb-saytlar, <span className="text-slate-600">bozorlar, UX/UI dizaynlar ishlab chiqamiz</span></h1>
                    <p className="text-slate-800 text-2xl main-top-desc">Texnik yordam ko'rsatamiz.</p>
                </div>
                <Btn2>
                    <p onClick={() => setOpen(true)} className="w-fit px-6 py-3 cursor-pointer text-slate-100">Loyihani muhokama qilish</p>
                </Btn2>
            </div>
            <div className="main-top-contact bg-gray-100 border shadow-2xl rounded-xl px-16 py-8">
                <FormContact/>
            </div>
        </div>
    );
}
 
export default MainTop;