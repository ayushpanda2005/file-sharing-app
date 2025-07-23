"use client";


import { app } from '../../../../../firebaseConfig';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'; // Ensure updateDoc is imported
import { ArrowLeftSquare } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import FileInfo from './_components/FileInfo';
import FileShareForm from './_components/FileShareForm';

function Page({ params: paramsPromise }) {
    const params = React.use(paramsPromise); // Unwrap params Promise
    const db = getFirestore(app);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const getFileInfo = useCallback(async () => {
        if (!params?.fileId) return;

        try {
            const docRef = doc(db, "uploadedFile", params.fileId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setFile(docSnap.data());
            } else {
                setError("File not found.");
            }
        } catch (err) {
            setError("Failed to fetch file information.");
            console.error("Error fetching document:", err);
        }
    }, [params?.fileId, db]);

    useEffect(() => {
        getFileInfo();
    }, [getFileInfo]);

    const onPasswordSave = async (password) => {
        try {
            console.log("Attempting to save password:", password);

            if (!params?.fileId) {
                console.error("Missing fileId in params.");
                alert("File ID is missing. Cannot save password.");
                return;
            }

            const docRef = doc(db, "uploadedFile", params.fileId);

            await updateDoc(docRef, {
                password, // Add or update the password field
            });

            console.log("Password successfully saved to Firestore!");
            alert("Password saved successfully.");
        } catch (error) {
            console.error("Error saving password:", error.message);
            alert(`Failed to save password: ${error.message}`);
        }
    };

    return (
        <div className="py-10 px-20">
            <Link href="/upload" className="flex gap-3">
                <ArrowLeftSquare /> Go to Upload
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {file ? (
                    <>
                        <FileInfo file={file} />
                        <FileShareForm file={file} onPasswordSave={onPasswordSave} />
                    </>
                ) : (
                    <div className="text-red-500">{error || "Loading file information..."}</div>
                )}
            </div>
        </div>
    );
}


export default Page;
