
import React, { useState } from 'react';
import right_arrow from "../../Assets/Icon/right-arrow.png";
import download from "../../Assets/Icon/download.png";
import dump from "../../Assets/Icon/delete.png";
import edit from "../../Assets/Icon/edit.png";
import { useUserStatus, useLoginStatus } from '../Auth/UserStatus';


function SimpleDropdown({ title, content }) {

    const userType = useUserStatus() // fetch user type from API

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleDownload = () => {} ;
    const handleEdit = () => {} ;
    const handleDelete = () => {}   ;

    return (
        <div className="m-4">
            <div className='flex flex-row justify-between items-center border-b-2 w-[80vw] py-2 bg-slate-500' >

                <div className='flex flex-row bg-transparent cursor-pointer' onClick={toggleDropdown}>
                    <img src={right_arrow} alt="arrow right" className={`w-10 h-10 mx-2 bg-transparent transition-transform duration-500 transform ${isOpen ? 'rotate-90' : ''}`} />
                    <h1 className="bg-transparent text-3xl">{title}</h1>
                </div>
                <div className='flex items-end justify-end mx-5'>
                    <img src={download} alt="download" title='Download' className={`w-6 h-6  bg-transparent mx-3 hover:cursor-pointer`} onClick={handleDownload} />
                    {userType === 'admin' && (<>
                        <img src={edit} alt="edit" title='Edit' className={`w-6 h-6  bg-transparent mx-3 hover:cursor-pointer`} onClick={handleEdit} />
                        <img src={dump} alt="dump" title='Delete' className={`w-6 h-6  bg-transparent mx-3 hover:cursor-pointer`} onClick={handleDelete} />
                    </>)}
                </div>
            </div>
            {isOpen && (
                <center>
                    <div className="flex flex-col justify-start items-start  p-4 w-[78vw] bg-slate-500 transition-opacity duration-500 ease-in-out">
                        <p className='text-justify bg-transparent text-2xl'>
                            {content}
                        </p>

                    </div>
                </center>
            )}
        </div>
    );



}

export default SimpleDropdown;
