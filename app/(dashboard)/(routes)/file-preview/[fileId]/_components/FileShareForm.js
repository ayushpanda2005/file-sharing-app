import GlobalApi from '../../../../../_utils/GlobalApi';
import { Copy, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs' ;



function FileShareForm({ file, onPasswordSave }) {
    const {user} = useUser() ;
    const [isPasswordEnable, setIsPasswordEnable] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);
    const onCopyClick=()=>{
        navigator.clipboard.writeText(file.shortUrl)
       
    }
   
    const sendEmail = ()=>{
        const data={
            emailToSend:email,
            userName:user?.fullName,
            fileName:file.fileName,
            fileSize:file.fileSize,
            fileType:file.fileType,
            shortUrl:file.shortUrl
    
        }
        GlobalApi.SendEmail(data).then(resp=>{
            console.log(resp);
           
        })
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(file.shortUrl);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    const handleSendEmail = () => {
        if (!email) {
            alert("Please enter an email address.");
            return;
        }
        // You can integrate an email sending API here
        alert(`File shared with ${email}`);
    };

    return (
        file && (
            <div className="flex flex-col gap-4 p-4 border rounded-md shadow-md">
                {/* Short URL Copy Bar */}
                <div>
                    <label className="text-sm text-gray-500">Short URL</label>
                    <div className="flex items-center gap-2 mt-1">
                        <input
                            type="text"
                            value={file.shortUrl}
                            readOnly
                            className="flex-1 p-2 border rounded-md text-gray-700 bg-gray-100 outline-none"
                        />
                        <button
                            onClick={handleCopy}
                            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            <Copy size={18} onClick={()=>onCopyClick()}/>
                        </button>
                    </div>
                    {copySuccess && (
                        <p className="mt-1 text-xs text-green-500">Copied to clipboard!</p>
                    )}
                </div>

                {/* Enable Password */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        onChange={(e) => setIsPasswordEnable(e.target.checked)}
                        checked={isPasswordEnable}
                    />
                    <label className="text-sm">Enable Password?</label>
                </div>
                {isPasswordEnable && (
                    <div className="flex items-center gap-2">
                        <input
                            type="password"
                            placeholder="Set a password"
                            className="flex-1 p-2 border rounded-md outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            disabled={password.length < 3}
                            onClick={() => onPasswordSave(password)}
                        >
                            Save
                        </button>
                    </div>
                )}

                {/* Send Email */}
                <div>
                    <label className="text-sm text-gray-500">Share via Email</label>
                    <div className="flex items-center gap-2 mt-1">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="flex-1 p-2 border rounded-md outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={()=>sendEmail()}
                            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default FileShareForm;
