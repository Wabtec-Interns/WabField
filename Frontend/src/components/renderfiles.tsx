import React from 'react'

const renderfiles = (data) => {
    const { files } = data;
    if (!files) return null;

    const decryptFiles = (encrypted: string): string => {
        const base64String = encrypted.split(",");
       // Separa o header (com mime type) e o payload base64
       const parts = encrypted.split(",");
       if (parts.length !== 2) return encrypted; // não está no formato esperado
       
       const header = parts[0];  // exemplo: "data:image/png;base64"
       const base64Data = parts[1];
       // Simulação de desencriptação: decodifica e re-encoda o payload
       const decodedData = atob(base64Data);
       // Se aqui fosse preciso aplicar alguma transformação extra, este seria o lugar
       const reEncodedData = btoa(decodedData);
       // Retorna a Data URL reconstituída
       return `${header},${reEncodedData}`;
    }

    return (
      <div className="mt-6">
        {files.image && files.image.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Imagens Enviadas</h3>
            <div className="flex flex-wrap gap-4">
              {files.image.map((imgSrc: string, index: number) => (
                <img
                  key={index}
                  src={decryptFiles(imgSrc)}
                  alt={`Imagem ${index + 1}`}
                  className="w-32 h-auto rounded"
                />
              ))}
            </div>
          </div>
        )}
        {files.video && files.video.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Vídeos Enviados</h3>
            <div className="flex flex-wrap gap-4">
              {files.video.map((videoSrc: string, index: number) => (
                <video key={index} controls className="w-32 rounded">
                  <source src={decryptFiles(videoSrc)} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              ))}
            </div>
          </div>
        )}
        {files.file && files.file.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Arquivos Enviados</h3>
            <ul className="list-disc ml-5">
              {files.file.map((fileData: string, index: number) => (
                <li key={index}>
                  <a href={decryptFiles(fileData)} download={`arquivo_${index + 1}`}>
                    Download do Arquivo {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
};


export default renderfiles