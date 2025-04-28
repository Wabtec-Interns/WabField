export interface ReportData {
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
  contracts?: Array<{typeContract: string, professional: string, quantity: string}>;
  activities?: Array<{activitiesType: string, activitiesExecuted: string, activitiesPerCent: string}>;
  files: {
    image: string[];
    video: string[];
    file: string[];
  };
}