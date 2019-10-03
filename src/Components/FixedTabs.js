import React from 'react';
import { Tab, Tabs, TabHeading, Text, StyleProvider, Content } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import AppStyles from '../global';
import CardResource from '../Components/Cards/CardResource';

const FixedTabs = ( { tabs, contentTabOne, contentTabTwo } ) => {
    return(
        <StyleProvider style={getTheme(material)}>
            <Content>
                <Tabs>
                    <Tab heading={<TabHeading><Text>{tabs.tab1}</Text></TabHeading>} style={{paddingBottom: 16, backgroundColor: AppStyles.colour.background}}>
                        {contentTabOne}
                    </Tab>
                    <Tab heading={<TabHeading><Text>{tabs.tab2}</Text></TabHeading>} style={{backgroundColor: AppStyles.colour.background}}>
                        {contentTabTwo}
                    </Tab>
                </Tabs>
            </Content>
        </StyleProvider>
    )
}

export default FixedTabs;