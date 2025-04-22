import React from 'react'
import  wabtecWhiteLogo  from '../../assets/WAB.D.svg'

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
  activitiesType?: string;
  activitiesExecuted?: string;
  activitiesPerCent?: string;
}

const ReportDetailedView: React.FC = () => {
  const data = JSON.parse(localStorage.getItem('reportData') || '{}') as ReportData;

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <header className="bg-red-600 text-white p-4 mb-4 rounded flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Relatório Detalhado</h1>
          <div className="mt-2">
            <span className="mr-4">Status: {data.status}</span>
            <span className="mr-4">Tipo de Relatório: {data.type}</span>
          </div>
          <div className="mt-2">
            <p>Obra: {data.nameWork} - Responsável: {data.responsable}</p>
          </div>
        </div>
        {/* Logo da empresa contratada - mantenha o elemento inalterado */}
        <div>
          <img src={wabtecWhiteLogo} alt="Logo da Empresa" className="h-12 w-auto" />
        </div>

         {/* Linha de datas */}
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
      </header>

      <main className="bg-white p-4 rounded shadow space-y-6">
        {/* Períodos (3 cards lado a lado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Manhã</h3>
            <p>Tipo: {data.morningType}</p>
            <p>Horário: {data.hourBegin}</p>
            <p>Tempo: {data.morningWeather}</p>
            <p>Trabalho: {data.morningWork}</p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Tarde</h3>
            <p>Tipo: {data.afternoonType}</p>
            <p>Horário: {/* Se houver hora específica, ajuste aqui */}</p>
            <p>Tempo: {data.afternoonWeather}</p>
            <p>Trabalho: {data.afternoonWork}</p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Noite</h3>
            <p>Tipo: {data.nightType}</p>
            <p>Horário: {data.hourEnd}</p>
            <p>Tempo: {data.nightWeather}</p>
            <p>Trabalho: {data.nightWork}</p>
          </div>
        </div>

        {/* Intervalo */}
          {/* Intervalo dividido em dois cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Início do Intervalo</h3>
            <p>{data.hourRestBegin}</p>
          </div>
          <div className="border border-gray-200 rounded p-3">
            <h3 className="font-semibold">Fim do Intervalo</h3>
            <p>{data.hourRestEnd}</p>
          </div>
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

        {/* Atividades realizadas */}
        {(data.activitiesType || data.activitiesExecuted || data.activitiesPerCent) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.activitiesType && (
              <div className="border border-gray-200 rounded p-3">
                <h3 className="font-semibold">Atividade - Tipo</h3>
                <p>{data.activitiesType}</p>
              </div>
            )}
            {data.activitiesExecuted && (
              <div className="border border-gray-200 rounded p-3">
                <h3 className="font-semibold">Atividade - Executadas</h3>
                <p>{data.activitiesExecuted}</p>
              </div>
            )}
            {data.activitiesPerCent && (
              <div className="border border-gray-200 rounded p-3">
                <h3 className="font-semibold">Atividade - Percentual</h3>
                <p>{data.activitiesPerCent}</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default ReportDetailedView;