import { AppBar, Avatar, Box, Container, Tab, Tabs, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

interface IHeaderProps {}


export function TopMenu(props: IHeaderProps): JSX.Element {
    
    const [value, setValue] = useState(0)
    const history = useHistory()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        console.log(newValue, 'newValue')
        setValue(newValue)
      }

    return (
    
    <AppBar position={'static'} style={{alignItems: 'center'}} >
        
        <Box margin={'15px'}>
        <Avatar alt='logo' src={`${process.env.PUBLIC_URL}/LogoCircle.png`}/>
        </Box>

        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='secondary'
        centered
        >
            <Tab
            component="a"
            onClick={() => history.push('/create')} 
            label={'Registrar funcionário'}/>
            <Tab
            component="a"
            onClick={() => history.push('/list')}
            label={'Tabelas e cálculos do IRRF'}/>
        
        </Tabs>
    </AppBar>

        )
}