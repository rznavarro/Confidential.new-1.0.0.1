export interface User {
  id: string;
  name: string;
  email: string;
  role: 'CEO' | 'Supervisor' | 'Vendedor Senior' | 'Vendedor';
  accessCode: string;
  supervisor?: string;
  team?: string;
  avatar?: string;
}

export interface Team {
  id: string;
  name: string;
  supervisor: string;
  members: string[];
  color: string;
  icon: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  selectedTeam: Team | null;
  currentStep: 'login' | 'team-selection' | 'team-verification' | 'dashboard';
}

export interface Metrics {
  linkedinContacts: number;
  messagesSent: number;
  responses: number;
  personalEarnings: number;
  teamEarnings?: number;
  meetings?: number;
  sales?: number;
  dailyRevenue?: number;
  monthlyRevenue?: number;
}

export interface Deal {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  servicePrice: number;
  creationCost?: number;
  commission?: number;
  createdBy: string;
  createdAt: Date;
  status: 'pending' | 'closed' | 'cancelled';
}

export interface DealFormData {
  clientName: string;
  email: string;
  phone: string;
  servicePrice: number;
  creationCost?: number;
  commission?: number;
}

export interface Report {
  id: string;
  linkedinContacts: number;
  messagesSent: number;
  responses: number;
  meetings?: number;
  createdBy: string;
  createdAt: Date;
  period: string; // e.g., "Enero 2024", "Semana 1"
}

export interface ReportFormData {
  linkedinContacts: number;
  messagesSent: number;
  responses: number;
  meetings?: number;
  period: string;
}

export interface Goal {
  id: string;
  assignedTo: string;
  assignedBy: string;
  salesTarget: number;
  prospectingTarget: number;
  prospectingStrategy: string;
  deadline: Date;
  status: 'active' | 'completed' | 'overdue';
  createdAt: Date;
  notes?: string;
}

export interface GoalFormData {
  assignedTo: string;
  salesTarget: number;
  prospectingTarget: number;
  prospectingStrategy: string;
  deadline: string;
  notes?: string;
}
