 import React  from "react";

type UserData = {
    firstName: string;
    email: string;
    phonenumber: string;
};

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};

function Section1({
    firstName,
    email,
    phonenumber,
    updateFields,
}: UserFormProps) {
    return (
        <>
            <div className="w-full items-center flex justify-center">
                <div className="w-11/12 flex flex-col items-center justify-evenly p-4 gap-5">
                    <span className="flex flex-col gap-2">
                        <h1 className="capitalize text-marine-blue font-bold sm:text-3xl text-xl ">
                            Personal Information
                        </h1>
                        <p className="text-light-gray capitalize sm:text-lg text-xs">
                            Please provide your name, email address, and phone number
                        </p>
                    </span>
                    <div className="flex flex-col w-full gap-4">
                        <span>
                            <label
                                htmlFor="name"
                                className="text-xs text-marine-blue font-bold uppercase"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={firstName}
                                name="name"
                                id="name"
                                className="w-full p-2 border-2 border-gray-500 rounded"
                                required
                                onChange={(e) => updateFields({ firstName: e.target.value })}
                            />
                        </span>
                        <span>
                            <label
                                htmlFor="email"
                                className="text-xs text-marine-blue font-bold uppercase"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                id="email"
                                className="w-full p-2 border-2 border-gray-500 rounded"
                                required
                                onChange={(e) => updateFields({ email: e.target.value })}
                            />
                        </span>
                        <span>
                            <label
                                htmlFor="contact"
                                className="text-xs text-marine-blue font-bold uppercase"
                            >
                                Phone Number
                            </label>
                            <input
                                type="number"
                                value={phonenumber}
                                name="contact"
                                id="contact"
                                className="w-full p-2 border-2 border-gray-500 rounded"
                                required
                                onChange={(e) => updateFields({ phonenumber: e.target.value })}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section1;