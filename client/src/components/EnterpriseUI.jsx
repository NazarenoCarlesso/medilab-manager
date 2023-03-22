import React from 'react'
import { Divider, Grid, Paper, Typography } from '@mui/material'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import MasksIcon from '@mui/icons-material/Masks'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import EngineeringIcon from '@mui/icons-material/Engineering'

export default function EnterpriseUI() {
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center"
            sx={{ minHeight: 450, background: 'linear-gradient(293deg,#5CE1E6  0%, #071b4b 100%)' }}>
            <Typography variant="h4" fontWeight={700} sx={{ fontFamily: 'Raleway', margin: 4, color: 'white' }}>
                Medilab Manager es la mejor solución para tu laboratorio
            </Typography>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginBottom: '30px' }}>
                <Paper sx={{ width: 240, height: 250, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <BloodtypeIcon sx={{ padding: '1px', marginRight: '2px' }} /> Para pacientes
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway', }}>
                        Si usted es paciente, puede consultar los resultados de sus análisis y la historia de sus atenciones a traves de nuestro sitio web.
                        desde la comodidad de su hogar.
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 250, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <MasksIcon sx={{ padding: '1px', marginRight: '2px' }} /> Desde casa
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway'}}>
                        Brindamos una respuesta confiable, ágil y oportuna, es por ello que contamos con unidades móviles y un buen sistema de transporte de muestras y la entrega de resultados.
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 250, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <AnalyticsIcon sx={{ padding: '1px', marginRight: '2px' }} /> Para laboratorios
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway'}}>
                        Si usted es cliente, puede consultar los resultados de sus análisis y la historia de sus atenciones a traves de nuestro sitio web.
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 250, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <EngineeringIcon sx={{ padding: '1px', marginRight: '2px' }} /> Soporte técnico
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway'}}>
                        Contamos con personal altamente calificado, la cual podrá atender sus dudas e inquitudes al adquirir nuestro software de laboratorio
                        de análisis clínicos.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}