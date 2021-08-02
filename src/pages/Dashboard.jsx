import * as React from "react";

import { useLocalization } from "@progress/kendo-react-intl";

import { Grid, Column, ColumnMenu } from "./../components/Grid";
import {
  FullNameCell,
  FlagCell,
  OnlineCell,
  RatingCell,
  EngagementCell,
  CurrencyCell,
} from "./../components/GridCells";

import { employees } from "./../resources/employees";

const Dashboard = () => {
  const [data, setData] = React.useState(employees);
  const localizationService = useLocalization();

  return (
    <div id="Dashboard" className="dashboard-page main-content">
      <div className="card-container grid">
        <div className="card-component">
          <Grid
            data={data}
            style={{ height: 600 }}
            onDataChange={(data) => setData(data)}
            showGlobalFilter={true}
          >
            <Column
              field={"fullName"}
              title={localizationService.toLanguageString("custom.contactName")}
              columnMenu={ColumnMenu}
              width={230}
              cell={FullNameCell}
            />
            <Column
              field={"jobTitle"}
              title={localizationService.toLanguageString("custom.jobTitle")}
              columnMenu={ColumnMenu}
              width={230}
            />
            <Column
              field={"country"}
              title={localizationService.toLanguageString("custom.country")}
              columnMenu={ColumnMenu}
              width={100}
              cell={FlagCell}
            />
            <Column
              field={"isOnline"}
              title={localizationService.toLanguageString("custom.status")}
              columnMenu={ColumnMenu}
              width={100}
              cell={OnlineCell}
              filter={"boolean"}
            />
            <Column
              title={localizationService.toLanguageString("custom.performance")}
              groupable={false}
            >
              <Column
                field={"rating"}
                title={localizationService.toLanguageString("custom.rating")}
                columnMenu={ColumnMenu}
                width={110}
                cell={RatingCell}
                filter={"numeric"}
              />
              <Column
                field={"target"}
                title={localizationService.toLanguageString(
                  "custom.engagement"
                )}
                columnMenu={ColumnMenu}
                width={200}
                cell={EngagementCell}
                filter={"numeric"}
              />
              <Column
                field={"budget"}
                title={localizationService.toLanguageString("custom.budget")}
                columnMenu={ColumnMenu}
                width={100}
                cell={CurrencyCell}
                filter={"numeric"}
              />
            </Column>
            <Column
              title={localizationService.toLanguageString("custom.contacts")}
              groupable={false}
            >
              <Column
                field={"phone"}
                title={localizationService.toLanguageString("custom.phone")}
                columnMenu={ColumnMenu}
                width={130}
              />
              <Column
                field={"address"}
                title={localizationService.toLanguageString("custom.address")}
                columnMenu={ColumnMenu}
                width={200}
              />
            </Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
