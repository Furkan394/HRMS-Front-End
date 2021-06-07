import React from 'react';
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from "../pages/User/Candidate/CandidateList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import JobTitleList from "../pages/JobAdvertisement/JobTitleList";

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={13}>
                        <CandidateList/>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={13}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={13}>
                        <JobAdvertisementList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobTitleList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    );
}
