import React, { useState } from "react";
import "./FileUploadForm.css";

interface FileUploadFormProps {
  formData: any; // Substitua "any" pelo tipo correto, se disponível
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const FileUploadForm: React.FC<FileUploadFormProps> = ({ formData, setFormData }) => {
  const [files, setFiles] = useState({ image: [], video: [], file: [] });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    const promises = fileArray.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((base64Files) => {
        setFiles((prevFiles) => ({
          ...prevFiles,
          [name]: [...prevFiles[name], ...base64Files],
        }));

        // Atualizar o estado principal do formulário
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          files: {
            ...prevFormData.files,
            [name]: [...(prevFormData.files?.[name] || []), ...base64Files],
          },
        }));
      })
      .catch((error) => console.error("Erro ao converter arquivos para base64:", error));
  };

  return (
    <form className="file-upload-form">
      <div className="upload-section">
        <label htmlFor="image-upload" className="upload-label">
          <span className="upload-icon">📁</span>
          <span className="upload-text">Selecione uma imagem</span>
        </label>
        <input
          type="file"
          id="image-upload"
          name="image"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
        <div className="file-count">Imagens selecionadas: {files.image.length}</div>
      </div>
      <div className="upload-section">
        <label htmlFor="video-upload" className="upload-label">
          <span className="upload-icon">🎥</span>
          <span className="upload-text">Selecione um vídeo</span>
        </label>
        <input
          type="file"
          id="video-upload"
          name="video"
          accept="video/*"
          multiple
          onChange={handleFileChange}
        />
        <div className="file-count">Vídeos selecionados: {files.video.length}</div>
      </div>
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-label">
          <span className="upload-icon">📄</span>
          <span className="upload-text">Selecione um arquivo</span>
        </label>
        <input
          type="file"
          id="file-upload"
          name="file"
          accept="*/*"
          multiple
          onChange={handleFileChange}
        />
        <div className="file-count">Arquivos selecionados: {files.file.length}</div>
      </div>
    </form>
  );
};

export default FileUploadForm;