"use client"

import { useCallback, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { useDropzone } from "react-dropzone"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/registry/ui/card"

interface UploadedFile {
  id: string
  file: File
  preview: string
  progress: number
  isUploading: boolean
  isComplete: boolean
}

/**
 * The props is used
 *
 * @public
 */
interface ImageUploaderProps {
  className?: string
  maxFiles?: number
  maxSize?: number
  onUploadComplete?: (files: File[]) => void
  onCancel?: () => void
  onPublish?: (files: File[]) => void
}

export const FileUploader: React.FC<ImageUploaderProps> = ({
  maxFiles = 10,
  maxSize = 20 * 1024 * 1024,
  onUploadComplete,
  onCancel,
  onPublish,
  className,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "demo-1",
      file: new File([""], "demo.jpg", { type: "image/jpeg" }),
      preview: "/images/blocks/sidebar-structure.png",
      progress: 100,
      isUploading: false,
      isComplete: true,
    },
  ])

  const simulateUpload = useCallback((fileId: string) => {
    const updateProgress = () => {
      setUploadedFiles((prev) =>
        prev.map((file) => {
          if (file.id === fileId && file.isUploading) {
            const increment = Math.random() * 15 + 5
            const newProgress = Math.min(file.progress + increment, 100)
            const isComplete = newProgress >= 100

            return {
              ...file,
              progress: newProgress,
              isUploading: !isComplete,
              isComplete,
            }
          }
          return file
        })
      )
    }

    const interval = setInterval(() => {
      setUploadedFiles((prev) => {
        const file = prev.find((f) => f.id === fileId)
        if (!file || !file.isUploading) {
          clearInterval(interval)
          return prev
        }
        updateProgress()
        return prev
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles: UploadedFile[] = acceptedFiles.map((file) => ({
        id: Math.random().toString(36),
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
        isUploading: true,
        isComplete: false,
      }))

      setUploadedFiles((prev) => {
        const filteredPrev = prev.filter((f) => !f.id.startsWith("demo-"))

        return [...newFiles, ...filteredPrev]
      })

      newFiles.forEach((file) => {
        setTimeout(() => simulateUpload(file.id), Math.random() * 500)
      })

      setTimeout(() => {
        setUploadedFiles((prev) => {
          const allFiles = prev.map((f) => f.file)
          onUploadComplete?.(allFiles)
          return prev
        })
      }, 3000)
    },
    [simulateUpload, onUploadComplete]
  )

  const removeFile = useCallback((fileId: string) => {
    setUploadedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return prev.filter((f) => f.id !== fileId)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    maxSize,
    maxFiles,
    multiple: true,
  })

  const handleCancel = () => {
    uploadedFiles.forEach((file) => {
      URL.revokeObjectURL(file.preview)
    })
    setUploadedFiles([])
    onCancel?.()
  }

  const handlePublish = () => {
    const completedFiles = uploadedFiles
      .filter((f) => f.isComplete)
      .map((f) => f.file)
    onPublish?.(completedFiles)
  }

  return (
    <Card className={cn("max-w-sm w-sm bg-surface", className)}>
      <CardHeader {...getRootProps()}>
        <motion.div
          className={cn(
            "relative border border-dashed rounded-xl py-14 text-center cursor-pointer transition-all duration-200 overflow-hidden flex flex-col items-center justify-center",
            isDragActive
              ? "border-blue-400"
              : "border-blue-400  hover:border-gray-400"
          )}
          variants={{
            initial: { x: 0, y: 0, opacity: 1 },
            hover: {
              x: 4,
              y: 6,
              opacity: 0.95,
              transition: { duration: 0.1 },
            },
            tap: {
              scale: 0.97,
              transition: { duration: 0.1 },
            },
          }}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          role="button"
          aria-label="Upload images by clicking or dragging and dropping"
        >
          <input {...getInputProps()} aria-describedby="upload-description" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10 text-muted-foreground"
          >
            <path d="M12 13v8" />
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="m8 17 4-4 4 4" />
          </svg>

          <p className="text-base text-foreground/90 tracking-tight font-inter mt-1">
            Upload Images
          </p>
          <p className="text-muted-foreground">or drag and drop</p>

          <p
            id="upload-description"
            className="text-sm text-muted-foreground mt-1"
          >
            [Max. File size: {Math.round(maxSize / (1024 * 1024))}MB]
          </p>
        </motion.div>
      </CardHeader>

      <CardContent>
        <h4 className="text-muted-foreground font-inter tracking-wide capitalize pb-2">
          Images uploaded
        </h4>
        <AnimatePresence>
          {uploadedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {uploadedFiles.map((file) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative group aspect-square size-30 rounded-md overflow-hidden shadow-sm flex-shrink-0"
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={file.preview || "/placeholder.svg"}
                        alt={`Uploaded ${file.file.name}`}
                        className="w-full h-full object-cover"
                      />
                      {file.isUploading && (
                        <div className="absolute inset-0 backdrop-blur-xs bg-foreground/1 flex items-center justify-center">
                          <div className="w-12 h-12 relative">
                            <svg
                              className="w-12 h-12 transform -rotate-90 text-white/85"
                              viewBox="0 0 36 36"
                            >
                              <path
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <motion.path
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                initial={{ strokeDasharray: "0 100" }}
                                animate={{
                                  strokeDasharray: `${file.progress} 100`,
                                }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                              />
                            </svg>

                            <p className="absolute inset-0 flex items-center justify-center text-xs text-white/90">
                              {Math.round(file.progress)}%
                            </p>
                          </div>
                        </div>
                      )}

                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: file.isComplete ? 1 : 0 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(file.id)
                        }}
                        className="absolute top-0 right-0 w-6 h-6 bg-red-500/90 flex items-center justify-center hover:bg-red-600 transition-colors"
                        aria-label={`Remove ${file.file.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="size-4 text-white/80"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {uploadedFiles.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center font-inter text-muted-foreground"
          >
            No images uploaded here
          </motion.p>
        )}
      </CardContent>

      <div className="w-full border border-dashed" />

      <CardFooter className="grid grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button onClick={handleCancel} className="w-full">
            Cancel
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePublish}
        >
          <Button
            variant={"secondary"}
            disabled={
              uploadedFiles.length === 0 ||
              uploadedFiles.some((f) => f.isUploading)
            }
            className="w-full"
          >
            Publish
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}
