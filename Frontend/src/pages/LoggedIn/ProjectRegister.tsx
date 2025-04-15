import React, { useState, useEffect } from 'react';

type ProjectFormData = {
  id: number;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
};

const ProjectRegister = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    id: 0,
    name: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    console.log("Carregando dados do formulário de obras...");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("projectData", JSON.stringify(formData));
    alert('Obra registrada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block mb-1 font-semibold">ID da Obra</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Nome da Obra</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Localização</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Data de Início</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Data de Término</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="border border-gray-300 rounded w-full p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
        Registrar Obra
      </button>
    </form>
  );
};

export default ProjectRegister;