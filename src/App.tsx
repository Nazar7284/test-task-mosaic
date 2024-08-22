import React, { useLayoutEffect, useState } from "react";
import { Mosaic, MosaicBranch, MosaicWindow } from "react-mosaic-component";
import { companies } from "./data/db";
import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import MosaicWindowContent from "./components/MosaicWindowContent";
import { CompanyI } from "./models/Company";

type ViewId = string;

const App = () => {
  const [companiesData, setCompaniesData] = useState<CompanyI[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([
    0, 1, 2,
  ]);

  useLayoutEffect(() => {
    setCompaniesData(companies);
  }, []);

  const handleCompanyChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const updatedCompanies = [...selectedCompanies];
    updatedCompanies[index] = parseInt(event.target.value, 10);
    setSelectedCompanies(updatedCompanies);
  };

  const CustomMosaicWindow = ({
    id,
    path,
  }: {
    id: ViewId;
    path: MosaicBranch[];
  }) => {
    // windowIndex & selectedCompanies
    // window-1
    const windowIndex = parseInt(id.split("-")[1], 10) - 1;

    return (
      <MosaicWindow<ViewId> path={path} title="Company info">
        <MosaicWindowContent
          index={windowIndex}
          selectedCompanies={selectedCompanies}
          companiesData={companiesData}
          handleCompanyChange={handleCompanyChange}
        />
      </MosaicWindow>
    );
  };

  return (
    <div className="w-full h-screen p-4">
      <Mosaic<ViewId>
        renderTile={(id, path) => <CustomMosaicWindow id={id} path={path} />}
        initialValue={{
          direction: "row",
          first: "window-1",
          second: {
            direction: "column",
            first: "window-2",
            second: "window-3",
          },
        }}
      />
    </div>
  );
};

export default App;
