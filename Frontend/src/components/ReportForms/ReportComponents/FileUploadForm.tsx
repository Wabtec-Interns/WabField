

import React, { useState } from "react";
import "./FileUploadForm.css"; // Certifique-se de criar e importar o arquivo CSS

function FileUploadForm() {
  const [files, setFiles] = useState({ image: [], video: [], file: [] });

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles(prevFiles => ({
      ...prevFiles,
      [name]: [...prevFiles[name], ...Array.from(selectedFiles)]
    }));
  };

  interface FileListState {
    image: File[];
    video: File[];
    file: File[];
  }

  interface FileUploadEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { name: keyof FileListState; files: FileList | null };
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(files).forEach((key) => {
      const fileKey = key as keyof FileListState;
      files[fileKey].forEach((file) => {
        formData.append(fileKey, file);
      });
    });

    try {
      const response = await fetch("URL_DO_SEU_BACKEND", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Arquivos enviados com sucesso!");
      } else {
        alert("Falha ao enviar os arquivos.");
      }
    } catch (error) {
      console.error("Erro ao enviar os arquivos:", error);
      alert("Erro ao enviar os arquivos.");
    }
  };

  return (
    <form className="file-upload-form" onSubmit={handleSubmit}>
    <div className="upload-section">
      <label htmlFor="image-upload" className="upload-label">
        <span className="upload-icon">📁</span>
        <span className="upload-text">Selecione uma imagem</span>
      </label>
      <input type="file" id="image-upload" name="image" accept="image/*" multiple onChange={handleFileChange} />
      <div className="file-count">Imagens selecionadas: {files.image.length}</div>
    </div>
    <div className="upload-section">
      <label htmlFor="video-upload" className="upload-label">
        <span className="upload-icon">🎥</span>
        <span className="upload-text">Selecione um vídeo</span>
      </label>
      <input type="file" id="video-upload" name="video" accept="video/*" multiple onChange={handleFileChange} />
      <div className="file-count">Vídeos selecionados: {files.video.length}</div>
    </div>
    <div className="upload-section">
      <label htmlFor="file-upload" className="upload-label">
        <span className="upload-icon">📄</span>
        <span className="upload-text">Selecione um arquivo</span>
      </label>
      <input type="file" id="file-upload" name="file" accept="*/*" multiple onChange={handleFileChange} />
      <div className="file-count">Arquivos selecionados: {files.file.length}</div>
    </div>
  </form>
  );
}

export default FileUploadForm;