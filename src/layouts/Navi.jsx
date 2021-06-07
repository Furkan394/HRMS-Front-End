import React from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu fixed="top" size='large'>
                <Container>
                    <Menu.Item>
                        <Icon name="universal access" size="large"/>
                        HRMS
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="home" size="large"/>
                        Home
                        
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="announcement" size="large"/>
                        Job Advertisement
                    </Menu.Item>
                    <Menu.Item>
                        <Icon name="building" size="large"/>
                        Employers
                    </Menu.Item>
                    
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button.Group>
                                <Button primary>Sign In</Button>
                                <Button.Or />
                                <Button positive>Sign Up</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}
