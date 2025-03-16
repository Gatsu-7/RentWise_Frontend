
import { z } from "zod";

// Form schema using Zod
export const formSchema = z.object({
  // Party Information
  landlordName: z.string().min(2, { message: "Landlord name is required" }),
  landlordAddress: z.string().min(5, { message: "Landlord address is required" }),
  landlordPhone: z.string().min(10, { message: "Valid phone number is required" }),
  landlordEmail: z.string().email({ message: "Valid email is required" }),
  tenantName: z.string().min(2, { message: "Tenant name is required" }),
  tenantAddress: z.string().min(5, { message: "Tenant address is required" }),
  tenantPhone: z.string().min(10, { message: "Valid phone number is required" }),
  tenantEmail: z.string().email({ message: "Valid email is required" }),
  
  // Property Details
  propertyAddress: z.string().min(5, { message: "Property address is required" }),
  propertyType: z.string().min(1, { message: "Property type is required" }),
  state: z.string().min(1, { message: "State is required" }), // Added state validation
  
  // Rent Details
  monthlyRent: z.coerce.number().min(1, { message: "Monthly rent must be greater than 0" }),
  rentDueDate: z.string().min(1, { message: "Rent due date is required" }),
  paymentMethods: z.array(z.string()).min(1, { message: "Select at least one payment method" }),
  securityDeposit: z.coerce.number().min(0, { message: "Security deposit must be a valid amount" }),
  advanceRent: z.coerce.number().optional(),
  
  // Agreement Duration
  startDate: z.date({ required_error: "Start date is required" }),
  endDate: z.date({ required_error: "End date is required" }),
  leaseDuration: z.string().min(1, { message: "Lease duration is required" }),
  renewalClause: z.string().min(1, { message: "Please specify if renewal is allowed" }),
  renewalDetails: z.string().optional(),
  
  // Termination Terms
  noticePeriod: z.string().min(1, { message: "Notice period is required" }),
  lockInPeriod: z.string().min(1, { message: "Lock-in period is required" }),
  holdoverClause: z.string().min(1, { message: "Please specify holdover terms" }),
  holdoverDetails: z.string().optional(),
  
  // Restrictions
  sublettingAllowed: z.string().min(1, { message: "Please specify if subletting is allowed" }),
  petPolicy: z.string().min(1, { message: "Pet policy is required" }),
  guestStayDuration: z.string().min(1, { message: "Guest stay duration is required" }),
  propertyUse: z.string().min(1, { message: "Property use is required" }),
  inspectionNotice: z.string().min(1, { message: "Inspection notice period is required" }),
  
  // Additional
  customClauses: z.string().optional(),
});

export type FormSchemaType = z.infer<typeof formSchema>;

export const defaultValues = {
  landlordName: "",
  landlordAddress: "",
  landlordPhone: "",
  landlordEmail: "",
  tenantName: "",
  tenantAddress: "",
  tenantPhone: "",
  tenantEmail: "",
  propertyAddress: "",
  propertyType: "Flat",
  state: "", // Added default value for state
  monthlyRent: undefined,
  rentDueDate: "1st",
  paymentMethods: [],
  securityDeposit: undefined,
  advanceRent: undefined,
  leaseDuration: "11 months",
  renewalClause: "Yes",
  renewalDetails: "",
  noticePeriod: "2 months",
  lockInPeriod: "6 months",
  holdoverClause: "Yes",
  holdoverDetails: "",
  sublettingAllowed: "No",
  petPolicy: "No",
  guestStayDuration: "",
  propertyUse: "Residential Use Only",
  inspectionNotice: "24-hour notice",
  customClauses: "",
};
