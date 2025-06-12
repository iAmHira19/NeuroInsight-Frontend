export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  status: 'Stable' | 'Warning' | 'Critical';
  lastReading: string;
  readings: EEGReading[];
}

export interface EEGReading {
  id: string;
  timestamp: string;
  value: number;
  patientId: string;
}

export interface AnalysisResult {
  id: string;
  fileId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  result?: {
    prediction: string;
    confidence: number;
    patterns: string[];
  };
  createdAt: string;
}

export interface DashboardStats {
  totalPatients: number;
  activeMonitoring: number;
  alertsToday: number;
  analysisComplete: number;
}

export interface EducationalResource {
  id: string;
  title: string;
  type: 'Video' | 'Documentation' | 'Workshop';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  content: string;
}