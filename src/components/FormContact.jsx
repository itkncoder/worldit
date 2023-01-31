import Btn1 from "./UI/Btn1";
import { useForm } from "react-hook-form";

import { useState } from "react";
import axios from 'axios'

const FormContact = () => {

    const [name, setName] = useState("");
    const [tel, setTel] = useState('')
    const [tg, setTg] = useState('')

    const [messageObj, setMessageObj] = useState('')

    const [done, setDone] = useState(false)

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        if(data.name) {
            const TOKEN = '5934954439:AAFwT8qbnTI9WvGUK2SAmlEvLI833ojqkZE'
            const CHAT_ID = '-1001859809768'
            const URL_API = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'

            let message = `<b>Заявка с сайта</b>\n`
            message += `<b>Имя отправителя: ${data.name}</b>\n`
            message += `<b>Номер отправителя: ${data.tel}</b>\n`
            message += `<b>Телеграм юзернейм отправителя: ${data.tg}</b>`
            

            await axios.post(URL_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            }, setName(''), setTel(""), setTg('')).then(() => {
                setDone(true)
                setTimeout(() => setDone(false), 2000)
            })
        }
    };

    return (  
        <form onSubmit={handleSubmit(onSubmit)} className="form-inputs flex w-full justify-center items-center flex-col py-14 gap-6">
            <div className="flex justify-center items-center flex-col gap-2">

                <h1 className={done ? 
                "text-center text-green-800 form-title text-3xl font-semibold tracking-wider form-title1 text-center" 
                : "form-title text-3xl font-semibold tracking-wider form-title1 text-center text-slate-900"}>{done ? "Qabul qilindi!" : "So'rov qoldiring"}</h1>

                <p className="text-center w-fit text-slate-800 form-desc">Biz siz bilan bog'lanamiz, <br/> loyiha muhokamasi uchun</p>
            </div>
            <div className="inputs flex justify-center items-center w-full flex-col gap-4">
                <input value={name} onInput={(e) => {setName(e.target.value)}} {...register("name")} className="w-full text-sm text-slate-500 outline-none focus:ring ring-slate-300 text-center py-3 px-10 rounded border-slate-300 border" type="text" placeholder="Ism"/>
                <input value={tel} onInput={(e) => {setTel(e.target.value)}} {...register("tel")} className="w-full text-sm text-slate-500 outline-none focus:ring ring-slate-300 text-center py-3 px-10 rounded border-slate-300 border" type="tel" placeholder="Telefon" />
                <input value={tg} onInput={(e) => {setTg(e.target.value)}} {...register("tg")} className="w-full text-sm text-slate-500 outline-none focus:ring ring-slate-300 text-center py-3 px-10 rounded border-slate-300 border" type="text" placeholder="@Telegram" />
                </div>
            <div>
                <Btn1>
                    <div>
                        <input type="submit" className="w-fit py-3 px-10 cursor-pointer text-slate-200" value="Jo'natish" />
                    </div>
                </Btn1>
            </div>
        </form>
    );
}
 
export default FormContact;