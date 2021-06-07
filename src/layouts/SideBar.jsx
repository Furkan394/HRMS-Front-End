import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu icon="table" pointing vertical size="tiny">
                <Menu.Item
                    name='JobPositions'
                >
                    <Icon name="announcement" />
                        Job Positions
                </Menu.Item>

                <Menu.Item
                    name='Candidates'
                >
                    <Icon name="user" />
                        Candidates
                        </Menu.Item>
                <Menu.Item
                    name='Employers'
                >
                    <Icon name="user" />
                    Employers
                </Menu.Item>
            </Menu>
        </div>
    );
}
