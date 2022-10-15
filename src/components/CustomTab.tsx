import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import ProductsTab from './ProductsTab';
import SearchResults from './SearchResults';
import TabPanel from './TabPanel';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function CustomTab() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    sx={{ textTransform: "capitalize" }}
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                    TabIndicatorProps={{ style: { background: "#12b8ff" } }}
                >
                    <Tab label="1 Product" {...a11yProps(0)} />
                    <Tab label="2 Addresses" {...a11yProps(1)} disabled />
                    <Tab label="3 Overview" {...a11yProps(2)} disabled />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <ProductsTab />
                <SearchResults />
            </TabPanel>
            <TabPanel value={value} index={1} />
            <TabPanel value={value} index={2} />
        </div>
    )
}

export default CustomTab