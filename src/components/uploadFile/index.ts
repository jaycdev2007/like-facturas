import { Upload } from "upload-js";


const upload = Upload({ apiKey: "free" });

export async function onFileSelected(event:any) {
    const [ file ]    = event.target.files;
    const { fileUrl } = await upload.uploadFile(file);
  }