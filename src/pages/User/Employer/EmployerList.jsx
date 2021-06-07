import React, {useState, useEffect} from 'react'
import EmployerService from "../../../services/employerService";
import { Table, Header, Icon, Button, Menu } from "semantic-ui-react";

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then((result) => setEmployers(result.data.data));
    },[]);

    return (
        <div>
            <Header as="h2">
                <Icon name="list" />
                <Header.Content>Employer List</Header.Content>
            </Header>
            <Table color="blue" key="blue" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {employers.map((employer) => (
                        <Table.Row key={employer.id}>
                            <Table.Cell>{employer.companyName}</Table.Cell>
                            <Table.Cell>{employer.webAddress}</Table.Cell>
                            <Table.Cell>{employer.email}</Table.Cell>
                            <Table.Cell>{employer.phoneNumber}</Table.Cell>
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
