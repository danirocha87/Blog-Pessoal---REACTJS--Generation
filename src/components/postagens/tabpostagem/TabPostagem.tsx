import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
      setValue(newValue);
  }
return (
  <>
    <TabContext value={value}>
      <AppBar position="static">
        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
          <Tab  className='cor' label="Todas as postagens" value="1"/>
          <Tab className='cor' label="Sobre-nós" value="2" />
        </Tabs>
      </AppBar>
      <TabPanel value="1" >
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <ListaPostagem />
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <div className='box-sobre'>
        <div className= 'conteudo-sobre'>

        <Typography variant="h5" gutterBottom component="h5" align="center" className="titulo">Nosso Lema de VIDA</Typography>
        <Typography variant="body1" gutterBottom  align="justify">Epitáfio - Devia ter amado mais
Ter chorado mais
Ter visto o sol nascer
Devia ter arriscado mais
E até errado mais
Ter feito o que eu queria fazer
Queria ter aceitado
As pessoas como elas são
Cada um sabe a alegria
E a dor que traz no coração
O acaso vai me proteger
Enquanto eu andar distraído
O acaso vai me proteger
Enquanto eu andar
Devia ter complicado menos
Trabalhado menos
Ter visto o sol se pôr
Devia ter me importado menos
Com problemas pequenos
Ter morrido de amor
Queria ter aceitado
A vida como ela é
A cada um cabe alegrias
E a tristeza que vier
O acaso vai me proteger
Enquanto eu andar distraído
O acaso vai me proteger
Enquanto eu andar
O acaso vai me proteger
Enquanto eu andar distraído
O acaso vai me proteger
Enquanto eu andar
Devia ter complicado menos
Trabalhado menos
Ter visto o sol se pôr</Typography>
        </div>
        </div>
      </TabPanel>
    </TabContext>
  </>
  );
}
export default TabPostagem;