import { Tabs } from '@mantine/core'
import type { NextPage } from 'next'
import React from 'react';
import HeaderTabs, { HeaderTabStrings } from '../components/Header'


const Home: NextPage = (): JSX.Element => {
    // So what'll happen here is this active tab will be set in this component
    // and purely cosmeticaly be updated for the header
    // But really tab switching will be done here
    const [activeTab, setActiveTab] = React.useState<HeaderTabStrings>("Home")

    const tabsWithPanels = [
        {
            tab: 'Home',
            component: (
                <div>Home Panel</div>
            )
        },
        {
            tab: '2v2 Leader Board',
            component: (
                <div>2v2 Panel</div>
            )
        },
        {
            tab: '3v3 Leader Board',
            component: (
                <div>3v3 Panel</div>
            )
        }
    ]

    const renderPanel = (): JSX.Element => {
        return tabsWithPanels
            .find(tab => tab.tab === activeTab)?.component ??
            (<div>Component Not found</div>)
    }

    return (
        <div>
            {/* Perhaps make a hook to handle view switching here */}
            {/* Consider importing my library @ritterg/mini-machina */}
            <HeaderTabs
                tabInfo={tabsWithPanels}
                user={{ name: "Ritter Gustave", image: "" }}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {renderPanel()}
        </div>
    )
}

export default Home
