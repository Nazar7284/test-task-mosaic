import React from "react";

type CompanyInfoLookProps = {
  label: string;
  value: string | number | null | undefined;
};

const CompanyInfoLook: React.FC<CompanyInfoLookProps> = ({ label, value }) => {
  return (
    <div className="my-2 flex">
      <strong>
        {label}:&nbsp;<span className="font-normal">{value || "N/A"}</span>
      </strong>
    </div>
  );
};

export default CompanyInfoLook;
