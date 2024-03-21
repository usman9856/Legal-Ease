import React, { useState } from "react";
import dump from "../../Assets/Icon/delete.png";
import edit from "../../Assets/Icon/edit.png";
import { useNavigate } from "react-router-dom";



export default function EditUser() {

    const navigate = useNavigate();



    const [data, setData] = useState([
        { id: 1, Name: 'Carolyn Jimenez', Email: 'ga@tasas.nf', User: 'advocate', dateCreated: '16/09/2023', actions: null },
        { id: 2, Name: 'Lucinda Fernandez', Email: 'woju@jiwa.pa', User: 'user', dateCreated: '09/03/2023', actions: null },
        { id: 3, Name: 'Jose Briggs', Email: 'joggaawe@pumavwe.dm', User: 'user', dateCreated: '18/08/2023', actions: null },
        { id: 4, Name: 'Daisy Todd', Email: 'nabisjo@vuojza.ba', User: 'advocate', dateCreated: '20/08/2023', actions: null },
        { id: 5, Name: 'Edgar Morris', Email: 'cumozvan@mi.wf', User: 'user', dateCreated: '27/09/2023', actions: null },
        { id: 6, Name: 'Randall Craig', Email: 'vo@tul.fi', User: 'admin', dateCreated: '24/12/2023', actions: null },
        { id: 7, Name: 'Sue Flores', Email: 'gi@utuso.nf', User: 'advocate', dateCreated: '15/04/2023', actions: null },
        { id: 8, Name: 'Alexander Vega', Email: 'fawi@fupelaju.gq', User: 'admin', dateCreated: '15/03/2023', actions: null },
        { id: 9, Name: 'Ryan Williamson', Email: 'muf@bavuhuwi.id', User: 'advocate', dateCreated: '29/09/2023', actions: null },
        { id: 10, Name: 'Jon Reyes', Email: 'dekhaz@ejipin.pl', User: 'advocate', dateCreated: '10/11/2023', actions: null },
    ]);


    const [selectedData, setSelectedData] = useState([]);

    const handleDelete = (row) => {
        // Implement delete logic
        const selectedRow = data.find(item => item.id === row.id);
        setSelectedData([selectedRow]); // Wrap the selected row in an array
        console.log("Data Delete", selectedRow); // Log the selected row
    }

    const handleAddUser =()=> {
        navigate('/SignupAdmin')
    }

    const handleEdit = (row) => {
        const selectedRow = data.find(item => item.id === row.id);
        setSelectedData([selectedRow]); // Wrap the selected row in an array
        navigate('/CreateAccountAdmin', { state: { selectedRow } }); // Pass state object directly
        console.log("Data Edit", selectedRow); // Log the selected row
    }

    return (
        <>
            <center className="m-10">
                <div className="flex justify-end items-end w-[80%] p-5">
                    <button className="border-2 border-gray-400 w-32 rounded-2xl bg-yellow-500 px-3" onClick={handleAddUser}>Add User</button>
                </div>
            </center>
            <h1 className="mx-20 my-10 text-center text-4xl text-white font-mono">User Management</h1>
            <div className="m-5 min-h-screen h-full flex justify-center sm:w-full flex-col items-center">

                <div className="w-full sm:w-auto md:w-auto lg:w-auto">
                    <table className="border-2 w-full">
                        <thead>
                            <tr>
                                <th className="w-1/6">Sr</th>
                                <th className="w-1/6">Name</th>
                                <th className="w-1/6">Email</th>
                                <th className="w-1/6">User</th>
                                <th className="w-1/6">Date Signup</th>
                                <th className="w-1/6">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    <td className="w-1/6">{row.id}</td>
                                    <td className="w-1/6">{row.Name}</td>
                                    <td className="w-1/6">{row.Email}</td>
                                    <td className="w-1/6">{row.User}</td>
                                    <td className="w-1/6">{row.dateCreated}</td>
                                    <td className="w-1/6">
                                        <div className="flex flex-row items-center justify-center">
                                            <button onClick={() => handleEdit(row)}>
                                                <img src={edit} alt="edit" title="Edit" className="w-6 h-6 mx-2 bg-[#f0f8ff]" />
                                            </button>
                                            <button onClick={() => handleDelete(row)}>
                                                <img src={dump} alt="delete" title="Delete" className="w-6 h-6 mx-2 bg-[#f0f8ff]" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
