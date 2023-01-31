const Btn2 = (props) => {
    return (  
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 w-fit hover:-translate-y-0.5 transition-all shadow-lg rounded-md">
            {props.children}
        </div>
    );
}
 
export default Btn2;