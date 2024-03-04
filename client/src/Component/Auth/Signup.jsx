import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import back_button from "../../Assets/Icon/left-arrow.png"
// Step 1: Email and Password
const Step1 = ({ onNext  }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <hr className="my-10" />
            <br />
            <p className="text-white mb-4">Already a member? <a href="/Signup" className="text-blue-500">LOGIN!</a></p>
            <br />
            <br />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Next</button>
        </form>
    );
};

const Step2 = ({ onNext }) => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [nicNumber, setNicNumber] = useState("");
    const [contactDetail, setContactDetail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext({ fullName, dob, nicNumber, contactDetail });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="h-[80%] mb-8">
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="fullName">Full Name</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
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
                    <label className="block text-white mb-2" htmlFor="contactDetail">Contact Detail</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="text" id="contactDetail" name="contactDetail" value={contactDetail} onChange={(e) => setContactDetail(e.target.value)} />
                </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Next</button>
        </form>
    );
};

// Step 3: Profile Image Upload
const Step3 = ({ onSubmit }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(image);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="h-[275px] mb-8">

                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="profileImage">Profile Image</label>
                    <input className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500" type="file" id="profileImage" name="profileImage" onChange={handleImageChange} />
                </div>
            </div>
            <br />
                <p className="text-white mb-4">You can add the image later on as well</p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
        </form>
    );
};

const Register = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const handleRegister =()=>{
        navigate('/HomePage')
    }
    const handleNext = (data) => {
        // Logic to handle data and navigate to next step
        setStep(step + 1);
    };
    const handlePrevious = (data) => {
        // Logic to handle data and navigate to next step
        if(step !==1){
            setStep(step - 1);
        }
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="flex flex-col border border-solid p-14 rounded-2xl w-[400px] h-[550px] relative">
                    <div onClick={handlePrevious}><img src={back_button} alt="back" className="w-8 h-8 mt-[-30px]"/></div>
                    <center><h2 className="text-white text-2xl mb-4">REGISTER NOW!</h2></center>
                    {step === 1 && <Step1 onNext={handleNext} />}
                    {step === 2 && <Step2 onNext={handleNext} />}
                    {step === 3 && <Step3 onNext={ handleRegister} />}
                    <div className="absolute bottom-4 right-4 text-white">{step}/3</div>
                </div>
            </div>
        </>
    );
};

export default Register;
