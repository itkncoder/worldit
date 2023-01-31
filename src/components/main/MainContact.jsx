import FormContact from "../FormContact"

const MainContact = () => {
    return (  
        <div>
            <div className="flex justify-around items-start my-20 gap-2">
                <div className="main-contact-texts flex flex-col gap-6 mt-32">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl max-w-xl title">So'rov qoldiring, biz siz bilan bog'lanamiz.</h1>
                    </div>
                </div>
                <div className="form-top-div-input bg-gray-100 border shadow-2xl rounded-xl px-16 py-8">
                    <FormContact/>
                </div>
            </div>
        </div>
    );
}
 
export default MainContact;