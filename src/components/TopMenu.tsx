import { AppBar, Avatar, Box, Tab, Tabs } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export function TopMenu () {
  const [value, setValue] = useState('LIST')
  const history = useHistory()
  const { pathname } = useLocation()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (pathname === '/list') { setValue('LIST') } else setValue('REGISTER')
  }, [pathname])


  return (

    <AppBar position={'static'} style={{ alignItems: 'center' }} >

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
            value={'REGISTER'}
            component="a"
            onClick={() => history.push('/create')}
            label={'Registrar funcionário'}/>
            <Tab
            value={'LIST'}
            component="a"
            onClick={() => history.push('/list')}
            label={'Tabelas e cálculos do IRRF'}/>

        </Tabs>
    </AppBar>

  )
}
