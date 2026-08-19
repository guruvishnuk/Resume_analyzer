"use client";

import { useRef, useState } from "react";

export default function ResumeUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");

    if (file.type !== "application/pdf") {
      setSelectedFile(null);
      setError("Please select a PDF file.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setSelectedFile(null);
      setError("File size must be less than 5 MB.");
      return;
    }

    setSelectedFile(file);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="mt-6 flex min-h-56 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          {!selectedFile ? (
            <>
              <p className="font-medium text-gray-700">
                Drag & drop your resume
              </p>

              <p className="mt-2 text-sm text-gray-500">
                or choose a PDF file
              </p>

              <button
                type="button"
                onClick={openFilePicker}
                className="mt-4 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
              >
                Choose File
              </button>
            </>
          ) : (
            <>
              <p className="font-medium text-gray-900">
                {selectedFile.name}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>

              <button
                type="button"
                onClick={openFilePicker}
                className="mt-4 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Choose Another File
              </button>
            </>
          )}
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}