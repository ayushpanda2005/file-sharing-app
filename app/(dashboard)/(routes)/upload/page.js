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
    const { user } = useUser();
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const [fileDocId,setFileDocId] = useState()

    const upLoadFile = (file) => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        // Commented out Firebase upload logic
        const metadata = { contentType: file.type };
        const imageRef = ref(storage, 'file-upload/' + file.name);

        const uploadTask = uploadBytesResumable(imageRef, file, metadata);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress.toFixed(2) + '% done');
                setProgress(progress);
            },
            (error) => {
                console.error("Upload failed:", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at:", downloadURL);
                    saveInfo(file, downloadURL);
                });
            }
        );

        // Temporary simulation of progress for UI
        console.log("Simulating upload...");
        setProgress(100);
        saveInfo(file, "https://example.com/dummy-url"); // Simulated URL
    };

 const saveInfo = async (file, fileUrl, setFileDocId) => {
  const docId = generateRandomString(12);

  const data = {
    fileName: file?.name,
    fileSize: file?.size,
    fileType: file?.type,
    fileUrl: fileUrl,
    userEmail: user?.primaryEmailAddress?.emailAddress,
    userName: user?.fullName,
    password: '',
    shortUrl: process.env.NEXT_PUBLIC_BASE_URL + docId,
  };

  try {
    await setDoc(doc(db, "uploadedFile", docId), data);
    console.log(`Saved info with doc ID: ${docId}`);

    // ✅ Store the docId in state
    // setFileDocId(docId);

    router.push(`/file-preview/${docId}`);
  } catch (error) {
    console.error("Error saving info:", error);
  }
};

// useEffect(()=>{

// })



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

