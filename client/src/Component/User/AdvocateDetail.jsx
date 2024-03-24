import React, { useState } from 'react';
import defaultImage from '../../Assets/Icon/image.png';
import { useLocation } from 'react-router-dom';
const AdvocateDetail = () => {


    const [selectedTab, setSelectedTab] = useState('expertise');


    
    const { state } = useLocation();
    const { advocateName, price, description, datePosted, location, imageUrl, tags, rating } = state;

    console.log(advocateName, price, description, datePosted, location, imageUrl, tags, rating);
    const renderStars = () => {
        console.log('Rating:', rating);
        const totalStars = 5;
        const filledStars = Math.round(rating);
        const emptyStars = totalStars - filledStars;

        console.log('Filled stars:', filledStars);
        console.log('Empty stars:', emptyStars);

        return (
            <>
                {[...Array(filledStars)].map((_, index) => (
                    <span key={index} className="text-yellow-500 bg-transparent">★</span>
                ))}
                {[...Array(emptyStars)].map((_, index) => (
                    <span key={index} className="text-gray-500 bg-transparent">★</span>
                ))}
            </>
        );
    };

    return (
        <div className='grid md:grid-cols-3 min-h-screen h-full m-2 justify-center items-center md:w-screen'>
            <div className='col-span-1 md:col-span-1 h-screen md:w-full sm:w-screen px-6'>
                <div className='flex justify-center items-center h-[80%]'>
                    <div className='bg-slate-400 w-full h-80 min-h-64 min-w-64 flex items-center justify-center rounded-lg'>
                        <img
                            src={imageUrl ? imageUrl : defaultImage}
                            alt={advocateName ? advocateName : "Imported Image"}
                            className='h-10 w-10 bg-transparent'
                        />
                    </div>
                </div>
            </div>
            <div className='border-2 border-black col-span-1 md:col-span-2 h-screen w-[95%] p-5 bg-zinc-600 overflow-y-auto'>
                <div>
                    <div className="flex justify-start border-b-2 border-gray-300 pb-2">
                        <button
                            className={`px-4 py-2 focus:outline-none ${selectedTab === 'expertise' ? 'font-bold  transition ease-in-out duration-300 bg-gray-200 rounded-xl' : 'text-white'}`}
                            onClick={() => setSelectedTab('expertise')}
                        >
                            Expertise
                        </button>
                        <button
                            className={`px-4 py-2 focus:outline-none ${selectedTab === 'contact' ? 'font-bold  transition ease-in-out duration-300 bg-gray-200 rounded-xl' : 'text-white'}`}
                            onClick={() => setSelectedTab('contact')}
                        >
                            Contact
                        </button>
                    </div>
    
                    <div className="mt-4 mx-4 sm:w-[80%]">
                        {selectedTab === 'expertise' && (
    
                            <div>
                                <p> <h4>Name:</h4> {advocateName}</p> <br />
                                <p> <h4>Date:</h4>  {datePosted}</p><br />
                                <p> <h4>Location:</h4> {location}</p><br />
                                <p> <h4>Description:</h4>  {description}</p>
                                <br />
                                {/* <p> <h4>Price:</h4>  {price}/hr</p> */}
                                <br />
                                <p> <h4>Rating:</h4> {rating && renderStars()}</p>
                                <br />
                                <p className='flex flex-wrap'>  {tags.map((tag, index) => (
                                    <span key={index} className="bg-[#FAF9F6] border-2 rounded-3xl py-1 px-2 m-1 cursor-pointer">{tag}</span>
                                ))}</p>
                            </div>
                        )}
                        {selectedTab === 'contact' && (
                            <div>
                                <p>Email: </p>
                                <p>Phone: </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default AdvocateDetail;
