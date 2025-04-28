import React from 'react'

const renderfiles = (data) => {
    const { files } = data;
    if (!files) return null;

    return (
      <div className="mt-6">
        {files.image && files.image.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Imagens Enviadas</h3>
            <div className="flex flex-wrap gap-4">
              {files.image.map((imgSrc: string, index: number) => (
                <img key={index} src={imgSrc} alt={`Imagem ${index + 1}`} className="w-32 h-auto rounded" />
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
                  <source src={videoSrc} type="video/mp4" />
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
                  <a href={fileData} download={`arquivo_${index + 1}`}>
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