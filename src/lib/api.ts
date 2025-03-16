interface AgreementFormData {
  tenantName: string;
  landlordName: string;
  monthlyRent: number;
  state: string;
  customClauses?: string;
}

// // Mock function to generate agreement (in a real app, this would call your Flask backend)
// export const generateAgreement = async (formData: AgreementFormData): Promise<string> => {
//   // In a real implementation, you would call your Flask API
//   // return fetch('http://your-flask-api.com/generate_agreement', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify(formData)
//   // }).then(res => res.text());

//   // For demo purposes, we'll simulate a network request and return a mock agreement
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const agreement = generateMockAgreement(formData);
//       resolve(agreement);
//     }, 1500); // Simulate network delay
//   });
// };

// // Mock function to download PDF (in a real app, this would call your Flask backend)
// export const downloadPdf = async (agreementText: string): Promise<void> => {
//   // In a real implementation, you would call your Flask API
//   // return fetch('http://your-flask-api.com/download_pdf', {
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({ agreementText })
//   // }).then(res => res.blob())
//   //   .then(blob => {
//   //     const url = window.URL.createObjectURL(blob);
//   //     const a = document.createElement('a');
//   //     a.href = url;
//   //     a.download = 'rental_agreement.pdf';
//   //     document.body.appendChild(a);
//   //     a.click();
//   //     window.URL.revokeObjectURL(url);
//   //   });

//   // For demo purposes, we'll create a text file containing the agreement
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const blob = new Blob([agreementText], { type: 'application/pdf' });
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'rental_agreement.pdf';
//       document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//       document.body.removeChild(a);
//       resolve();
//     }, 1000); // Simulate network delay
//   });
// };

// // Helper function to generate a mock agreement for demo purposes
// function generateMockAgreement(formData: AgreementFormData): string {
//   const currentDate = new Date().toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   let agreement = `RESIDENTIAL LEASE AGREEMENT

// THIS LEASE AGREEMENT (hereinafter referred to as the "Agreement") made and entered into this ${currentDate}, by and between ${formData.landlordName} (hereinafter referred to as "Landlord") and ${formData.tenantName} (hereinafter referred to as "Tenant").

// WITNESSETH:

// WHEREAS, Landlord is the fee owner of certain real property being, lying and situated in ${formData.state}, such real property having a street address of [PROPERTY ADDRESS].

// WHEREAS, Landlord desires to lease the Premises to Tenant upon the terms and conditions as contained herein; and

// WHEREAS, Tenant desires to lease the Premises from Landlord on the terms and conditions as contained herein;

// NOW, THEREFORE, for and in consideration of the sum of ${formData.monthlyRent} DOLLARS ($${formData.monthlyRent}), the covenants and obligations contained herein and other good and valuable consideration, the receipt and sufficiency of which is hereby acknowledged, the parties hereto hereby agree as follows:

// 1. TERM. Landlord leases to Tenant and Tenant leases from Landlord the above described Premises together with any and all appurtenances thereto, for a term of 12 months, such term beginning on [START DATE] and ending on [END DATE].

// 2. RENT. The total rent for the term hereof is the sum of $${formData.monthlyRent * 12} DOLLARS, payable on the 1st day of each month of the term, in equal installments of $${formData.monthlyRent} DOLLARS first installment to be paid upon the due execution of this Agreement, the second installment to be paid on [FIRST PAYMENT DATE].

// 3. SECURITY DEPOSIT. Upon the due execution of this Agreement, Tenant shall deposit with Landlord the sum of $${formData.monthlyRent} DOLLARS receipt of which is hereby acknowledged by Landlord, as security for any damage caused to the Premises during the term hereof.

// 4. USE OF PREMISES. The Premises shall be used and occupied by Tenant and Tenant's immediate family, exclusively, as a private single-family dwelling, and no part of the Premises shall be used at any time during the term of this Agreement by Tenant for the purpose of carrying on any business, profession, or trade of any kind, or for any purpose other than as a private single-family dwelling.

// 5. CONDITION OF PREMISES. Tenant stipulates, represents and warrants that Tenant has examined the Premises, and that they are at the time of this Lease in good order, repair, and in a safe, clean and tenantable condition.

// 6. ASSIGNMENT AND SUB-LETTING. Tenant shall not assign this Agreement, or sub-let or grant any license to use the Premises or any part thereof without the prior written consent of Landlord.`;

//   // Add custom clauses if provided
//   if (formData.customClauses && formData.customClauses.trim()) {
//     agreement += `

// ADDITIONAL CLAUSES:

// ${formData.customClauses}`;
//   }

//   agreement += `

// IN WITNESS WHEREOF, the parties have caused this Agreement to be executed on the day and year first above written.

// _______________________
// ${formData.landlordName}, Landlord

// _______________________
// ${formData.tenantName}, Tenant`;

//   return agreement;
// }

// import { AgreementFormData } from "@/types/agreement";

// // 2
import axios from "axios";

const API_BASE_URL = "https://rentwise-backend-3.onrender.com/"; // Change this if deployed

export const generateAgreement = async (
  formData: AgreementFormData
): Promise<string> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/generate-agreement`,
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data.agreementText; // Assuming backend returns JSON { agreementText: "..." }
  } catch (error) {
    console.error("Error generating agreement:", error);
    throw error;
  }
};

export const downloadPdf = async (agreementText: string): Promise<void> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/download-pdf`,
      { agreementText },
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement("a");
    a.href = url;
    a.download = "rental_agreement.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error downloading agreement PDF:", error);
    throw error;
  }
};
// export const downloadPdf = async (formData: {
//   tenantName: string;
//   landlordName: string;
//   propertyAddress: string;
//   rentalAmount: string;
//   leaseDuration: string;
//   agreementText: string;
// }) => {
//   const response = await fetch("http://localhost:5000/download-pdf", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to generate PDF");
//   }

//   // Create a blob from the response data
//   const blob = await response.blob();
//   const url = window.URL.createObjectURL(blob);

//   // Create a download link
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "rental_agreement.pdf";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   window.URL.revokeObjectURL(url);
// };
