// app/[docId]/page.js
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
import Link from "next/link";

export default async function FileDownloadPage({ params }) {
  const db = getFirestore(app);
  const { docId } = params;

  const docRef = doc(db, "uploadedFile", docId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        404: File not found
      </div>
    );
  }

  const data = docSnap.data();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">{data.fileName}</h1>
      <p className="mb-2 text-sm text-gray-500">
        Uploaded by: {data.userName} ({data.userEmail})
      </p>
      <p className="mb-2">File Type: {data.fileType}</p>
      <p className="mb-6">Size: {(data.fileSize / (1024 * 1024)).toFixed(2)} MB</p>

      <a
        href={data.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download/View File
      </a>
    </div>
  );
}
