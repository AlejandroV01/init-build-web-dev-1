import React from 'react'
import { useDropzone } from 'react-dropzone'
import { HiOutlineDocumentPlus } from 'react-icons/hi2'
import { IoIosDocument } from 'react-icons/io'
const FileDrop = ({ handleFileUpload }: { handleFileUpload: (newFile: File) => void }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    onDropAccepted: files => handleFileUpload(files[0]),
  })
  return (
    <div {...getRootProps({ className: 'border-2 border-dashed border-primary rounded-lg w-fit p-6 flex flex-col items-center' })}>
      {acceptedFiles.length > 0 ? (
        <div className='flex flex-col items-center'>
          <IoIosDocument size={30} />
          <h3 className='text-primary'>{acceptedFiles[0].name}</h3>
          <p className='text-sm text-foreground/75'>File Uploaded Successfully!</p>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <HiOutlineDocumentPlus size={30} />
          <h3 className='text-primary'>Upload a Resume</h3>
          <p>PDF, DOC, DOCX up to 5 MB</p>
        </div>
      )}
      <input {...getInputProps()} />
    </div>
  )
}

export default FileDrop
