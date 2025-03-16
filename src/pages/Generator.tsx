import { useEffect, useState } from "react";
import AgreementForm from "@/components/AgreementForm";
import AgreementPreview from "@/components/AgreementPreview";

const Generator = () => {
  const [agreementText, setAgreementText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAgreementGenerated = (text: string) => {
    setAgreementText(text);
    // Scroll to preview after generation
    setTimeout(() => {
      const previewElement = document.getElementById("agreement-preview");
      previewElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="page-transition min-h-screen pt-24 pb-16 px-4 font-elegant">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Create Your Rental Agreement
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to generate a customized rental agreement
            that meets your needs.
          </p>
        </div>

        <div className="space-y-10">
          <AgreementForm onAgreementGenerated={handleAgreementGenerated} />

          <div id="agreement-preview">
            <AgreementPreview agreementText={agreementText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
