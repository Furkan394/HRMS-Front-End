import React from "react";
import { Grid } from 'semantic-ui-react';
import SideBar from "./SideBar";
import Section from "./Section";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Section />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
