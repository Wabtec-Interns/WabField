import React from 'react'
import { useLocation } from 'react-router-dom';

// Supondo que os dados cheguem por props ou contexto, aqui é um exemplo:
interface ReportData {
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
  // Adicione outros campos necessários...
}

const ReportDetailedView: React.FC = () => {
    const {state} = useLocation();
    const data = state as ReportData;
  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 mb-4 rounded">
        <h1 className="text-xl font-bold">Relatório Detalhado</h1>
        <p className="text-sm">Wabtec Corporation</p>
        <div className="mt-2">
          <span className="mr-4">Status: {data.status}</span>
          <span className="mr-4">Condição de Trabalho: {data.workCondition}</span>
          <span>Tipo de Visita: {data.type}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Condição de Tempo (por período)</h2>
        <p>{data.weatherCondition}</p>
        {/* Adicione aqui outros campos e seções conforme necessário */}
      </main>
    </div>
  )
}

export default ReportDetailedView