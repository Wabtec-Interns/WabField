import React from 'react'

export default function renderFileFromBase64(base64String: string) {
    const blob = fetch(base64).then((res) => res.blob());
  const url = URL.createObjectURL(blob);
  return (
    <a href={url} download={`file.${fileType.split("/")[1]}`} target="_blank" rel="noopener noreferrer">
      Baixar arquivo
    </a>
  );
}
