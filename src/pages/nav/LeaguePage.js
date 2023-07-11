import Page from '../../components/Page';
import {Accordion, AccordionSummary, AccordionDetails, Icon} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import LeagueAccordion from "../../components/LeagueAccordion";
import {useEffect, useState} from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import Firebase from '../../components/firebase/Firebase';

const league_info = require ( "../../Leagues")
const leagues = league_info.leagues;

export default function LeaguePage() {



  return(
      <Page>
          <h1>Leagues</h1>
          {Object.keys(leagues).map((league) => (
            <div key = {league}>
              {LeagueAccordion(leagues[league])}
            </div>
          ))}
      </Page>
    );
};