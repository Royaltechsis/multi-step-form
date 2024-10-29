import  react, { useState } from "react";
import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

function Step2() {
  const [isYearly, setIsYearly] = useState(false); // For managing billing cycle
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null); // For tracking selected plan

  // ToggleSwitch component placed inside Step2
  function ToggleSwitch() {
    function handleToggle() {
      setIsYearly((prev) => !prev); // toggle between true and false
    }

    return (
      <div className="flex items-center gap-2">
        <span className={`${!isYearly ? "text-marine-blue font-bold" : "text-gray-400"}`}>
          Monthly
        </span>
<label className="switch">
  <input type="checkbox" checked={isYearly} onChange={handleToggle}  />
  <span className="slider"></span>
</label>
        <span className={`${isYearly ? "text-marine-blue font-bold" : "text-gray-400"}`}>
          Yearly
        </span>
      </div>
    );
  }

  // Dynamic pricing based on billing cycle
  const sitems = [
    {
      icon: IconArcade,
      title: "Arcade",
      monthlyAmount: "$10/month",
      yearlyAmount: "$100/year",
    },
    {
      icon: IconAdvanced,
      title: "Advanced",
      monthlyAmount: "$15/month",
      yearlyAmount: "$150/year",
    },
    {
      icon: IconPro,
      title: "Pro",
      monthlyAmount: "$20/month",
      yearlyAmount: "$200/year",
    }
  ];

  // Sitem component for each radio card
  function Sitem({
    icon,
    title,
    amount,
    selected,
    onClick
  }: {
    icon: string;
    title: string;
    amount: string;
    selected: boolean;
    onClick: () => void;
  }) {
    return (
      <div
        className={`item h-36 flex flex-col border-2 p-2 w-28 rounded-lg justify-between cursor-pointer ${
          selected ? "border-blue-500 bg-blue-100" : "border-gray-300"
        }`}
        onClick={onClick}
      >
        <input type="radio" checked={selected} readOnly required className="hidden"/>
        <div className="icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
        <span>
          <h4>{title}</h4>
          <p>{amount}</p>
        </span>
      </div>
    );
  }

  return (
    <div className="flex w-full p-4 items-center justify-center">
      <div className="flex flex-col gap-3">
        <span className="flex flex-col gap-1">
          <h1 className="text-marine-blue text-3xl font-bold capitalize">Select Your Plan</h1>
          <p className="font-semibold text-xs text-cool-gray">You have the option of monthly or yearly billing.</p>
        </span>

        {/* Toggle Switch directly inside Step2 */}
        <ToggleSwitch />

        <div className="items flex items-center justify-evenly w-full gap-5">
          {sitems.map((item, index) => (
            <Sitem
              key={index}
              icon={item.icon}
              title={item.title}
              amount={isYearly ? item.yearlyAmount : item.monthlyAmount}
              selected={selectedPlan === item.title}
              onClick={() => setSelectedPlan(item.title)} // Set selected plan
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Step2;
