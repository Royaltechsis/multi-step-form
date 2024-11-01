import  { ReactElement, useState } from "react";
//pulse labs
export function MultiStep(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next(){
        setCurrentStepIndex((i) => {
            if (i >= steps.length - 1) return i;
            return i + 1;
          });
    }
    function back(){
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
          });
    }
    function goTo(index:number){
        setCurrentStepIndex(index);

    }
    function reset(){
        setCurrentStepIndex(0) 
    }
        
    return{
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0 ,
        isLastStep: currentStepIndex === steps.length - 1,
        islastForm: currentStepIndex === steps.length - 2,
        reset,
        goTo,
        next,
        back,
    }
}