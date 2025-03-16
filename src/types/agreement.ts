
export type PaymentMethod = "Bank Transfer" | "UPI" | "Cash";
export type PropertyType = "Flat" | "Independent House" | "Villa" | "PG/Hostel" | "Commercial Space" | "Other";
export type LeaseDuration = "11 months" | "12 months" | "24 months" | "36 months" | "Other";
export type NoticePeriod = "1 month" | "2 months" | "3 months";
export type LockInPeriod = "No lock-in" | "3 months" | "6 months" | "12 months";
export type RentDueDate = "1st" | "5th" | "10th" | "15th" | "Last day";
export type InspectionNotice = "24-hour notice" | "48-hour notice" | "72-hour notice";
export type PropertyUse = "Residential Use Only" | "Commercial Prohibited" | "Mixed Use";
export type YesNo = "Yes" | "No";

export interface AgreementFormData {
  // Party Information
  landlordName: string;
  landlordAddress: string;
  landlordPhone: string;
  landlordEmail: string;
  tenantName: string;
  tenantAddress: string;
  tenantPhone: string;
  tenantEmail: string;
  
  // Property Details
  propertyAddress: string;
  propertyType: PropertyType;
  state: string; // Added the missing state property
  
  // Rent Details
  monthlyRent: number;
  rentDueDate: RentDueDate;
  paymentMethods: PaymentMethod[];
  securityDeposit: number;
  advanceRent?: number;
  
  // Agreement Duration
  startDate: Date;
  endDate: Date;
  leaseDuration: LeaseDuration;
  renewalClause: YesNo;
  renewalDetails?: string;
  
  // Termination Terms
  noticePeriod: NoticePeriod;
  lockInPeriod: LockInPeriod;
  holdoverClause: YesNo;
  holdoverDetails?: string;
  
  // Restrictions
  sublettingAllowed: YesNo;
  petPolicy: YesNo;
  guestStayDuration: string;
  propertyUse: PropertyUse;
  inspectionNotice: InspectionNotice;
  
  // Additional
  customClauses?: string;
}
