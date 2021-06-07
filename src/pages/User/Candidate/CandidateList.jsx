import React, { useState, useEffect } from 'react'
import CandidateService from "../../../services/candidateService";
import { Table, Header, Icon, Button, Menu } from "semantic-ui-react";

export default function CandidateList() {

    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then((result) => setCandidates(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h2">
                <Icon name="list" />
                <Header.Content>Candidate List</Header.Content>
            </Header>
            <Table color="blue" key="blue" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.firstName}</Table.Cell>
                            <Table.Cell>{candidate.lastName}</Table.Cell>
                            <Table.Cell>{candidate.email}</Table.Cell>
                            <Table.Cell>
                                <Button>View</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
