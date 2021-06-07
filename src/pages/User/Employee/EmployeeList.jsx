import React, { useState, useEffect } from 'react'
import EmployeeService from "../../../services/employeeService";
import { Table, Header, Icon, Button } from "semantic-ui-react";

export default function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.getEmployees().then((result) => setEmployees(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h2">
                <Icon name="list" />
                <Header.Content>Employee List</Header.Content>
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
                    {employees.map((employee) => (
                        <Table.Row key={employee.id}>
                            <Table.Cell>{employee.firstName}</Table.Cell>
                            <Table.Cell>{employee.lastName}</Table.Cell>
                            <Table.Cell>{employee.email}</Table.Cell>
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
