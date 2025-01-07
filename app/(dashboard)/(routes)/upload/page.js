"use client";

import React, { useState } from 'react';
import UploadForm from './_components/UploadForm';
import { app } from '../../../../firebaseConfig';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '../../../../app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

function Upload() {
    const storage = getStorage(app);
    const db = getFirestore(app);
    const { user } = useUser(); // Correct invocation of useUser
    const [progress, setProgress] = useState(0);
    const router = useRouter(); // Correctly initialize useRouter

    const upLoadFile = (file) => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        const metadata = { contentType: file.type };
        const imageRef = ref(storage, 'file-upload/' + file.name);

        const uploadTask = uploadBytesResumable(imageRef, file, metadata);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Update progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress.toFixed(2) + '% done');
                setProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
            },
            () => {
                // On successful upload, save info to Firestore
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at:", downloadURL);
                    saveInfo(file, downloadURL);
                });
            }
        );
    };

    const saveInfo = async (file, fileUrl) => {
        const docId = generateRandomString(12); // Example unique document ID

        const data = {
            fileName: file?.name,
            fileSize: file?.size,
            fileType: file?.type,
            fileUrl: fileUrl,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            password: '', // Placeholder password
            shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
        };

        try {
            await setDoc(doc(db, "uploadedFile", docId), data);
            console.log(`Document added with ID: ${docId}`);
            router.push(`/filepreview/${docId}`); // Navigate to the new path
        } catch (error) {
            console.error("Error saving info:", error);
        }
    };

    return (
        <div className="p-5 px-8 md:px-28">
            <h2 className="text-[20px] text-center m-5">
                Start <strong className="text-primary">Uploading</strong> Files and <strong className="text-primary">Share</strong> it
            </h2>
            <UploadForm uploadBtnClick={(file) => upLoadFile(file)} progress={progress} />
        </div>
    );
}

export default Upload;
