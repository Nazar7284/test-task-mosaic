import React from "react";
import CompanyInfoLook from "./CompanyInfoLook";
import CompanySelector from "./CompanySelector";

interface MosaicWindowContentProps {
  index: number;
  selectedCompanies: number[];
  companiesData: any;
  handleCompanyChange: (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const MosaicWindowContent: React.FC<MosaicWindowContentProps> = ({
  index,
  selectedCompanies,
  companiesData,
  handleCompanyChange,
}) => {
  const companyIndex = selectedCompanies[index];
  const company = companiesData[companyIndex];

  return (
    <div className="border-2 border-black h-full w-full p-4 gap-1 overflow-scroll">
      <CompanySelector
        index={index}
        companyIndex={companyIndex}
        companies={companiesData}
        onChange={handleCompanyChange}
      />
      <CompanyInfoLook label="Ticker" value={company?.ticker} />
      <CompanyInfoLook label="Name" value={company?.name} />
      <CompanyInfoLook label="Legal name" value={company?.legal_name} />
      <CompanyInfoLook label="Stock exchange" value={company?.stock_exchange} />
      <CompanyInfoLook
        label="Short description"
        value={company?.short_description}
      />
      <CompanyInfoLook
        label="Long description"
        value={company?.long_description}
      />
      <CompanyInfoLook label="Web" value={company?.company_url} />
      <CompanyInfoLook
        label="Business address"
        value={company?.business_address}
      />
      <CompanyInfoLook
        label="Entity legal Form"
        value={company?.entity_legal_form}
      />
      <CompanyInfoLook
        label="Latest filing date"
        value={company?.latest_filing_date}
      />
      <CompanyInfoLook label="Inc country" value={company?.inc_country} />
      <CompanyInfoLook label="Employees" value={company?.employess} />
      <CompanyInfoLook label="Sector" value={company?.sector} />
      <CompanyInfoLook
        label="Industry category"
        value={company?.industry_category}
      />
      <CompanyInfoLook label="Industry group" value={company?.industry_group} />
      <CompanyInfoLook
        label="First stock price date"
        value={company?.first_stock_price_date}
      />
      <CompanyInfoLook
        label="Last stock price date"
        value={company?.last_stock_price_date}
      />
      <CompanyInfoLook label="Thea enabled" value={company?.thea_enabled} />
      <CompanyInfoLook label="Legacy sector" value={company?.legacy_sector} />
      <CompanyInfoLook
        label="Legacy industry category"
        value={company?.legacy_industry_category}
      />
      <CompanyInfoLook
        label="Legacy industry group"
        value={company?.legacy_industry_group}
      />
    </div>
  );
};

export default MosaicWindowContent;
