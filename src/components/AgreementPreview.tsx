// import { useEffect, useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Loader2 } from "lucide-react";
// import { downloadPdf } from "@/lib/api";
// import { toast } from "sonner";

// interface AgreementPreviewProps {
//   agreementText: string;
// }

// const AgreementPreview = ({ agreementText }: AgreementPreviewProps) => {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animation when component mounts or agreement changes
//     setIsVisible(false);
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [agreementText]);

//   const handleDownload = async () => {
//     if (!agreementText) return;

//     setIsDownloading(true);
//     try {
//       await downloadPdf(agreementText);
//       toast.success("PDF downloaded successfully");
//     } catch (error) {
//       console.error("Error downloading PDF:", error);
//       toast.error("Failed to download PDF. Please try again.");
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   if (!agreementText) {
//     return null;
//   }

//   return (
//     <div
//       className={`transition-opacity duration-500 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       <Card className="glass-panel mt-8 w-full max-w-3xl mx-auto">
//         <CardContent className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-medium">Agreement Preview</h3>
//             <Button
//               onClick={handleDownload}
//               disabled={isDownloading}
//               className="flex items-center gap-2"
//             >
//               {isDownloading ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   Downloading...
//                 </>
//               ) : (
//                 <>
//                   <Download className="h-4 w-4" />
//                   Download as PDF
//                 </>
//               )}
//             </Button>
//           </div>

//           <div className="bg-white dark:bg-gray-900 border rounded-md p-6 max-h-[60vh] overflow-y-auto">
//             <div className="prose prose-sm dark:prose-invert max-w-none">
//               {agreementText.split("\n").map((paragraph, index) => (
//                 <p key={index} className="mb-4">
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AgreementPreview;
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { downloadPdf } from "@/lib/api";
import { toast } from "sonner";

interface AgreementPreviewProps {
  agreementText: string;
}

const AgreementPreview = ({ agreementText }: AgreementPreviewProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts or agreement changes
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [agreementText]);

  const handleDownload = async () => {
    if (!agreementText) return;

    setIsDownloading(true);
    try {
      await downloadPdf(agreementText);
      toast.success("PDF downloaded successfully");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      toast.error("Failed to download PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  if (!agreementText) {
    return null;
  }

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Card className="glass-panel mt-8 w-full max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-medium">Agreement Preview</h3>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-2"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  Download as PDF
                </>
              )}
            </Button>
          </div>

          {/* FIX: Render the agreement properly as HTML */}
          <div className="bg-white dark:bg-gray-900 border rounded-md p-6 max-h-[60vh] overflow-y-auto">
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: agreementText }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgreementPreview;
