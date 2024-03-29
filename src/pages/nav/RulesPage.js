import { Card, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Page from '../../components/Page';
import {styles} from '../../styles/styles';

export default function RulesPage() {

    return(
      <Page>
              <br />
            <Card style={styles.card}>
            <Typography variant="h4">Rules.</Typography>
            <br />
            <Typography variant= "body1">The rules are simple: Register, select your 8 clubs, and wait. In the January transfer window, when you realise you're 
              actually pretty poor at predicting winners, then you can substitute out as many of your teams as you wish.
            </Typography>
            <br />
              <img style={styles.img} src="./assets/VARref.gif"></img>
            </Card>
            <br />
            <Card className="wrapper" style={styles.card} width={"70%"}>
            <Typography variant='h6'><u>The 8 Leagues</u></Typography>
              <Box className="row"style={styles.row}>
                <Box className="column" style={styles.column}>
                  <ul>Premier League</ul>
                  <ul>Ligue 1 </ul>
                  <ul>Serie A</ul>
                  <ul>Scottish Premiership</ul>
                </Box>
                <Box className="column"style={styles.column}>
                  <ul>English Championship </ul>
                  <ul>Bundesliga</ul>
                  <ul>La Liga</ul>
                  <ul>Scottish Championship</ul>
                </Box>
              </Box>
            </Card>
          </Page>
      );
}