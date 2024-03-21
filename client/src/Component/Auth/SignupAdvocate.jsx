import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back_button from "../../Assets/Icon/left-arrow.png"
// Step 1: Email and Password


const Step1 = ({ onNext }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="email">Email</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="password">Password</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="password">Confirm Password</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="password" id="confirm password" name="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <hr className="my-8" />
            <p className="text-white mb-4">Already a member? <a href="/Signup" className="text-blue-500">LOGIN!</a></p>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Next</button>
        </form>
    );
};

const Step2 = ({ onNext }) => {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [nicNumber, setNicNumber] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ name, dob, nicNumber, contact, gender });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="h-[80%] mb-8">
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">Name</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="dob">Date of Birth</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="nicNumber">NIC Number</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="nicNumber" name="nicNumber" value={nicNumber} onChange={(e) => setNicNumber(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="contact">Contact Detail</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="gender">Gender</label>
                    <select className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Next</button>
        </form>
    );
};

// Step 3: Profile Image Upload

const Step3 = ({ onNext }) => {
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ country, city }); // Pass the form data to the onNext function
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="country">Country</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="city">City</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <hr className="my-10" />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Next</button>
        </form>
    );
};



const Step4 = ({ onSubmit }) => {
    const [specialization, setSpecialization] = useState("");
    const [experience, setExperience] = useState("");
    const [barLicenseNo, setBarLicenseNo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ specialization, experience, barLicenseNo });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="specialization">Specialization</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="specialization" name="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="experience">Experience</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="experience" name="experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="barLicenseNo">Bar License Number</label>
                <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="barLicenseNo" name="barLicenseNo" value={barLicenseNo} onChange={(e) => setBarLicenseNo(e.target.value)} />
            </div>
            <hr className="my-10" />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </form>
    );
};

const RegisterAdvocate = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const handleRegister = () => {
        navigate('/HomePage')
    }
    const handleNext = (data) => {
        // Logic to handle data and navigate to next step
        setStep(step + 1);
    };
    const handlePrevious = (data) => {
        // Logic to handle data and navigate to next step
        if (step !== 1) {
            setStep(step - 1);
        }
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center my-16">
                <div className="flex flex-col border border-solid p-14 rounded-2xl w-[400px] h-fit  relative">
                    <div onClick={handlePrevious}><img src={back_button} alt="back" className="w-8 h-8 mt-[-30px]" /></div>
                    <center><h2 className="text-white text-2xl mb-4">REGISTER NOW!</h2></center>
                    {step === 1 && <Step1 onNext={handleNext} />}
                    {step === 2 && <Step2 onNext={handleNext} />}
                    {step === 3 && <Step3 onNext={handleNext} />}
                    {step === 4 && <Step4 onSubmit={handleRegister} />}
                    <div className="absolute bottom-4 right-4 text-white">{step}/4</div>
                </div>
            </div>
        </>
    );
};

export default RegisterAdvocate;
