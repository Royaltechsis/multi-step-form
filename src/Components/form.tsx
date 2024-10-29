import { FormEvent, ReactNode, useState } from "react";
import FormHolder from "./FormHolder";
import SideBar from "./Sidebar";
import Section1 from "./SectionUno";
import Section2 from "./Step2";
import Section3 from "./step3";
import Section4 from "./step4";
import Confirmation from "./Confirmation";
import { MultiStep } from "../MultiStep"; // Corrected import to 'useMultiStep'

type formData = {
  firstname: string;
  email: string;
  phonenumber: string;
};

const INITIAL_DATA: formData = {
  firstname: "",
  email: "",
  phonenumber: "",
};

function Form({}: { children?: ReactNode }) {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<formData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

const { steps,reset, currentStepIndex, step, isFirstStep, isLastStep, islastForm,  back, next } = MultiStep([
    <Section1 firstName={""} {...data} updateFields={updateFields} />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Confirmation />,
  ]);
   if (isLastStep){

   }
  const stepTracer = currentStepIndex + 1;

  // Corrected color update for the first step
  if (stepTracer === 1) {
    document.querySelector("step1")?.classList.add("text-red-500");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

  if (!isLastStep) return next();
    alert("Form submitted successfully!");
    reset();


  }
  

  function ControlBtn() {
    return (
      <div className="buttons w-full flex justify-end gap-2">
        {!isFirstStep && (
          <button className= { isLastStep ? "hidden" : "bg-purplish-blue text-white p-3 w-28 font-bold capitalize rounded-lg "} onClick={back} type="button">
            Back
          </button>
        )}
        <button type="submit" className="bg-purplish-blue text-white p-3 w-28 font-bold capitalize rounded-lg">
          {islastForm ? "Finish" : isLastStep? "Done" : "Next"}
        </button>
      </div>
    );
  }

  return (
    <FormHolder> 
      {!isLastStep && <SideBar />}
      
      <div className="flex flex-col w-full">
        <form onSubmit={onSubmit} className="h-full flex flex-col justify-center w-full">
          {step}
          <ControlBtn />
          <span>
            {stepTracer} / {steps.length}
          </span>
        </form>
      </div> 
    </FormHolder>
  );
}

export default Form;
