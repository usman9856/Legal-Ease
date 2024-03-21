import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom





export default function EditAccountAdmin() {
    const location = useLocation();
    const { selectedRow } = location.state;
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        // Log the fetched data when the component mounts
        console.log("Fetched Data:", selectedRow);

        // You can also perform any other data fetching logic here
        // For example, fetch additional data based on the selectedRow

        // Remember to clean up any subscriptions or timers if needed
        return () => {
            // Cleanup code if necessary
        };
    }, [selectedRow]);
    const [step, setStep] = useState(0); // State to manage current step
    const [userType, setUserType] = useState("admin"); // State to store user's userType

    const handleSave = () => {
        // Handle save action here
        console.log("Profile Created!");
    };

    const onNext = () => {
        setStep(step + 1); // Move to next step
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <Step0 onNext={onNext} />;
            case 1:
                return <Step1 onNext={onNext} />;
            case 2:
                return <Step2 onNext={onNext} />;
            case 3:
                return <Step3 onNext={onNext} />;
            case 4:
                return <Step4 onSubmit={handleSave} />;
            default:
                return null;
        }
    };

    if (userType === 'admin') {
        return (
            <div className="m-20 border-4 border-black h-full">
                <center>
                    <h1 className="text-3xl font-mono text-slate-300 m-4">Admin Profile Management</h1>
                </center>
                <div className="flex flex-col p-10 justify-center">
                    {renderStep()}
                    <center>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-80 " onClick={handleSave}>
                            Save
                        </button>
                    </center>
                </div>
            </div>
        );
    } else {
        return (
            <center>
                <h1 className="m-10 p-10 text-3xl text-white min-h-screen">You do not have the right credentials to access this point</h1>
            </center>
        )
    }








    const Step0 = ({ onNext }) => {
        const [image, setImage] = useState("");
    
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImage(reader.result);
            };
    
            if (file) {
                reader.readAsDataURL(file);
            }
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onNext();
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-white mb-2">Upload Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="mb-4"
                    />
                    {image && (
                        <img src={image} alt="Uploaded" className="w-32 h-32 object-cover mb-4" />
                    )}
                    {/* <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Next
                        </button> */}
                </div>
            </form>
        );
    };
    const Step1 = ({ onNext, email: initialEmail, password: initialPassword, confirmPassword: initialConfirmPassword }) => {
        const [email, setEmail] = useState(initialEmail || selectedRow.email || "");
        const [password, setPassword] = useState(initialPassword || "");
        const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword || "");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onNext({ email, password, confirmPassword });
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your email"
                    />
    
                    <label htmlFor="password" className="block text-white mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your password"
                    />
    
                    <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Confirm your password"
                    />
                </div>
            </form>
        );
    };
    const Step2 = ({ onNext, name: initialName, dob: initialDob, nicNumber: initialNicNumber, contact: initialContact, gender: initialGender }) => {
        const [name, setName] = useState(initialName || selectedRow.name || "");
        const [dob, setDob] = useState(initialDob || selectedRow.dob || "");
        const [nicNumber, setNicNumber] = useState(initialNicNumber || selectedRow.nicNumber || "");
        const [contact, setContact] = useState(initialContact || selectedRow.contact || "");
        const [gender, setGender] = useState(initialGender || selectedRow.gender || "");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onNext({ name, dob, nicNumber, contact, gender });
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your name"
                    />
    
                    <label htmlFor="dob" className="block text-white mb-2">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                    />
    
                    <label htmlFor="nicNumber" className="block text-white mb-2">NIC Number</label>
                    <input
                        type="text"
                        id="nicNumber"
                        name="nicNumber"
                        value={nicNumber}
                        onChange={(e) => setNicNumber(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your NIC number"
                    />
    
                    <label htmlFor="contact" className="block text-white mb-2">Contact Detail</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your contact detail"
                    />
    
                    <label htmlFor="gender" className="block text-white mb-2">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </form>
        );
    };
    const Step4 = ({ onSubmit, specialization: initialSpecialization, experience: initialExperience, barLicenseNo: initialBarLicenseNo }) => {
        const [specialization, setSpecialization] = useState(initialSpecialization || selectedRow.specialization || "");
        const [experience, setExperience] = useState(initialExperience || selectedRow.experience || "");
        const [barLicenseNo, setBarLicenseNo] = useState(initialBarLicenseNo || selectedRow.barLicenseNo || "");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit({ specialization, experience, barLicenseNo });
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="specialization" className="block text-white mb-2">Specialization</label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        value={specialization}
                        onChange={(e) => setSpecialization(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your specialization"
                    />
    
                    <label htmlFor="experience" className="block text-white mb-2">Experience</label>
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your experience"
                    />
    
                    <label htmlFor="barLicenseNo" className="block text-white mb-2">Bar License Number</label>
                    <input
                        type="text"
                        id="barLicenseNo"
                        name="barLicenseNo"
                        value={barLicenseNo}
                        onChange={(e) => setBarLicenseNo(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your bar license number"
                    />
                </div>
            </form>
        );
    };
    const Step3 = ({ onNext, country: initialCountry, city: initialCity }) => {
        const [country, setCountry] = useState(initialCountry || selectedRow.country || "");
        const [city, setCity] = useState(initialCity || selectedRow.city || "");
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onNext({ country, city, userType }); // Pass userType to onNext function
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-white mb-2">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your country"
                    />
    
                    <label htmlFor="city" className="block text-white mb-2">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                        placeholder="Enter your city"
                    />
    
                    {/* Multiple-choice option field */}
                    <label htmlFor="userType" className="block text-white mb-2">Are you a user or advocate?</label>
                    <select
                        id="userType"
                        name="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        className="block w-full p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 mb-4"
                    >
                        <option value="">Select one</option>
                        <option value="user">User</option>
                        <option value="advocate">Advocate</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
    
            </form>
        );
    };
}
