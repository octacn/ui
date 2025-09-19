"use client"

import { FileUploader } from "@/registry/src/components/file-uploader";

export default function FileUploaderDemo() {
  const handleUploadComplete = (files: File[]) => {
    console.log("Upload complete:", files);
  };

  const handleCancel = () => {
    console.log("Upload cancelled");
  };

  const handlePublish = (files: File[]) => {
    console.log("Publishing files:", files);
  };

  return (
    <FileUploader
      maxFiles={10}
      maxSize={20 * 1024 * 1024} // 20MB
      onUploadComplete={handleUploadComplete}
      onCancel={handleCancel}
      onPublish={handlePublish}
    />
  );
}
