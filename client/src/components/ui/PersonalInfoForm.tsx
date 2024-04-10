import React from 'react';
import Input from './Input';

const PersonalInfoForm = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
            <h1 className="text-4xl font-bold mb-8">Let's get started!</h1>
            <p className="text-xl mb-4">Confirm your first and last name</p>
            <div className="flex space-x-4">
                <Input placeholder="Enter your first name" type={''} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                }} />
                <Input placeholder="Enter your last name" type={''} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                }} />
            </div>
            <div className="mt-8">
                <p className="text-xl mb-4">Email</p>
                <Input placeholder="Enter your email" type={''} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                }} />
            </div>
            <div className="mt-8">
                <p className="text-xl mb-4">Password</p>
                <Input type="password" placeholder="Enter your password" value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                }} />
            </div>
            <div className="mt-8">
                <p className="text-xl mb-4">Upload Resume</p>
                <input type="file" className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 dark:text-white bg-transparent shadow-md ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:outline-none focus:ring-blue-500 sm:text-sm sm:leading-6" />
            </div>
            <div className="flex mt-8 justify-between w-full">
                <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700">
                    Next Step
                </button>
                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400">
                    Skip this step
                </button>
            </div>
        </div>
    );
};
export default PersonalInfoForm;