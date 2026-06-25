export interface LeadType {
  name: string;
  email: string;
  phone: string;
  company?: string;
  requirement: string;

  emailSent?: boolean;
  emailOpened?: boolean;
  linkClicked?: boolean;

  createdAt?: Date;
}