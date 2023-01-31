import FormContact from "../FormContact"

const Modal = (props) => {
    return (  
        <div className="z-50 blurred-modal w-full top-0 fixed left-0 h-full">
            <div className="modal-div fixed mt-80 left-1/2 py-10 px-20 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center rounded-lg shadow-lg border top-4 z-40 bg-gray-100">
                <div className="flex justify-center items-center flex-col">
                    <FormContact/>
                </div>
                <i onClick={() => {props.open(false)}} className="cursor-pointer p-2 absolute top-5 left-5 z-50 fa-solid fa-xmark"></i>
            </div>
        </div>
    );
}
 
export default Modal;