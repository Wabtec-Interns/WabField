import React from 'react'
import { useLocation } from 'react-router-dom';

interface ReportData {
  id: number;
  status: string;
  type: string;
  morningType: string;
  morningWeather: string;
  morningWork: string;
  afternoonType: string;
  afternoonWeather: string;
  afternoonWork: string;
  nightType: string;
  nightWeather: string;
  nightWork: string;
  weatherCondition: string;
  workCondition: string;
  typeContract: string;
  directProfissional: string;
  indirectProfissional: string;
  outsourcedProfissional: string;
  professional: string;
  nameWork: string;
  responsable: string;
  company: string;
  dateBegin: string;
  hourBegin: string;
  dateEnd: string;
  hourEnd: string;
  hourRestBegin: string;
  hourRestEnd: string;
}

const ReportDetailedView: React.FC = () => {
  const data = JSON.parse(localStorage.getItem('reportData') || '{}') as ReportData;

  return (
    <div className="min-h-screen p-4">
      <header className="bg-red-600 text-white p-4 mb-4 rounded">
        <h1 className="text-xl font-bold">Relatório Detalhado</h1>
        <p className="text-sm">Wabtec Corporation</p>
        <div className="mt-2">
          <span className="mr-4">Status: {data.status}</span>
          <span className="mr-4">Condição de Trabalho: {data.workCondition}</span>
          <span>Tipo de Visita: {data.type}</span>
        </div>
      </header>

      <main className="bg-white p-4 rounded shadow space-y-6">
        <h2 className="text-lg font-semibold mb-2">Informações Gerais</h2>

        {/* Bloco para datas e horas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Data Início</h3>
            <p>Data: {data.dateBegin}</p>
            <p>Hora: {data.hourBegin}</p>
          </div>

          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Data Fim</h3>
            <p>Data: {data.dateEnd}</p>
            <p>Hora: {data.hourEnd}</p>
          </div>
        </div>

        {/* Bloco para intervalo */}
        <div className="border border-gray-200 rounded p-3">
          <h3 className="font-semibold">Intervalo</h3>
          <p>{data.hourRestBegin} - {data.hourRestEnd}</p>
        </div>

        {/* Períodos */}
        <div className="border border-gray-200 rounded p-3">
          <h2 className="text-lg font-semibold">Períodos</h2>
          <p>Manhã: Tipo: {data.morningType}, Tempo: {data.morningWeather}, Trabalho: {data.morningWork}</p>
          <p>Tarde: Tipo: {data.afternoonType}, Tempo: {data.afternoonWeather}, Trabalho: {data.afternoonWork}</p>
          <p>Noite: Tipo: {data.nightType}, Tempo: {data.nightWeather}, Trabalho: {data.nightWork}</p>
        </div>

        {/* Contratação e Profissional */}
        <div className="border border-gray-200 rounded p-3">
          <h2 className="text-lg font-semibold">Contratação e Profissional</h2>
          <p>Tipo de Contrato: {data.typeContract}</p>
          <p>Profissional Direto: {data.directProfissional}</p>
          <p>Profissional Indireto: {data.indirectProfissional}</p>
          <p>Profissional Terceirizado: {data.outsourcedProfissional}</p>
          <p>Profissional: {data.professional}</p>
        </div>

        {/* Obra e Responsável */}
        <div className="border border-gray-200 rounded p-3">
          <h2 className="text-lg font-semibold">Obra e Responsável</h2>
          <p>Nome da Obra: {data.nameWork}</p>
          <p>Responsável: {data.responsable}</p>
          <p>Empresa: {data.company}</p>
        </div>
      </main>
    </div>
  );
};

export default ReportDetailedView;