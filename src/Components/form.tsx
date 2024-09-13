import { FormEvent, ReactNode, useState } from "react";
import FormHolder from "./FormHolder";
import SideBar from "./Sidebar";
import Section1 from "./SectionUno";
import Section2 from "./Step2"
import Section3 from "./step3";
import Section4 from "./step4";
import { MultiStep } from "../MultiStep"; // Import useMultiStep from MultiStep



 type formData = {
     firstname : string,
     email : string,
     phonenumber: string,
 }
 const INITIAL_DATA: formData = {
     firstname : "",
     email : "",
     phonenumber: "",
 }
 function Form({}: { children?: ReactNode }) {
    const [data, setData] = useState(INITIAL_DATA);
  
    function updateFields(fields: Partial<formData>) {
      setData((prev) => {
        return { ...prev, ...fields };
      });
    }
    
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = MultiStep([ // Corrected useMultiStep import
         <Section1 firstName={""} {...data} updateFields={updateFields} />,
         <Section2/>,
        <Section3/>,
        <Section4/>,
    ]);
    const stepTracer = currentStepIndex + 1;
     if (stepTracer == 1) {
     name[1].style.Color = "red";
     }

    function onSubmit(e : FormEvent){
        console.log('form submittedd')
        e.preventDefault()
        if (!isLastStep) return next()
            alert('submitted finally');
        // handle form submission here
    }
    function ControlBtn(){
        return(
            <>
            <div className="buttons w-full align-center  flex ">
                <div className="flex justify-end w-11/12 gap-2 ">
                    {!isFirstStep && <button className="bg-purplish-blue text-white p-3 w-28 font-bold capitalize rounded-lg" onClick={back} type="button">back</button>}
                    <button type="submit" className="bg-purplish-blue text-white p-3 w-28 font-bold capitalize rounded-lg " 
                    >{isLastStep ? "Finish" : "Next"}</button>
                </div>
            </div>
            </>
        )
    }
    return (
        <> 
            <FormHolder>
                <SideBar />
                <div className="flex flex-col w-full ">
                    <form onSubmit={onSubmit} className="h-full flex flex-col justify-center w-full">
                        {step}
                        <ControlBtn/>
                        <span>{stepTracer } / {steps.length}</span>
                    </form>
                </div>   
            </FormHolder>   
        </>
    );
}

export default Form;