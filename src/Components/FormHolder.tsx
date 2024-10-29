import  react, { ReactNode } from "react";

function FormHolder({children}:{children:ReactNode}){
    return(
        <section className="form bg-pastel-blue w-full h-screen flex justify-center items-center ">
            <div className="form-container sm:w-6/12 w-10/12 bg-white sm:h-7/12 flex items-center justify-center rounded-lg p-2 h-min-auto">
                <div className="flex w-full h-full sm:flex-row flex-col ">
                    {children}
                </div>
               
            </div>     
        </section>
    )
}
export default FormHolder;
