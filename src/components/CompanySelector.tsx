import React from "react";

interface CompanySelectorProps {
  index: number;
  companyIndex: number;
  companies: any[];
  onChange: (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const CompanySelector: React.FC<CompanySelectorProps> = ({
  index,
  companyIndex,
  companies,
  onChange,
}) => {
  return (
    <select
      defaultValue={companyIndex}
      onChange={(event) => onChange(index, event)}
      className="p-2 border border-gray-700 rounded-md focus:border-blue-500"
    >
      {companies.map((company, idx) => (
        <option key={idx} value={idx} className="focus:bg-red-500">
          {company.ticker}
        </option>
      ))}
    </select>
  );
};

export default CompanySelector;
