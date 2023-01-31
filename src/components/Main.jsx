import Category from "./main/Category";
import MainTop from "./main/MainTop";

import img from "../images/img.jpg"
import img2 from "../images/img2.jpg"

import Cases from "./main/Cases";   
import MainContact from "./main/MainContact";

const Main = () => {
    return (  
        <div>
            <MainTop/>


            <div className="flex flex-col items-center">
                <Category uzs="56 550 000" img={img} left="true" title="Mobil ilovalarni ishlab chiqish" desc="Loyiha turiga va uning vazifalariga qarab, mahalliy, shuningdek, kross-platforma (Flutter, ReactNative) mobil ilovalarini yaratish." price="5 000" />

                <Category uzs="6 800" img={img2} left="false" title="Bozorlar, onlayn-do'konlar, taksilar, oziq-ovqat yetkazib berish va boshqalarni yaratamiz" desc="Biz chiroyli dizayn, qulay mahsulot kartalari bilan onlayn sotuvlar uchun zamonaviy ilovalar va veb-saytlarni yaratamiz, to'lov va yetkazib berish tizimlarini ulaymiz, ekvayringni o'rnatamiz, CRM va ombor ma'lumotlar bazalari bilan integratsiya qilamiz." price="600" />
            </div>


            <div className="case-txt flex flex-col items-center my-14">
                <h1 className="text-4xl text-slate-900 font-semibold">Bizning ishlarimiz</h1>
                <p className="text-lg text-slate-700">Bu yerda bizning eng yorqin ishlarimiz ko'rsatilgan</p>
            </div>
            <Cases/>
            <MainContact/>
        </div>
    );
}
 
export default Main;