import { Card } from '@mui/material';
import { borderRadius } from '@mui/system';
import Page from '../components/Page';
import styled from '@emotion/styled';

const brandSrc = "/assets/BirdFirstYaffle.svg";
const imgStyle = {
    float:'center',
    display: 'block',
    paddingTop:'2%',
    paddingBottom:'2%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const cardStyle = {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default function HomePage() {
    return(
        <Page>
            <Card elevation={1} style={cardStyle}>
                <img style={imgStyle} src={brandSrc} alt='Yaffle' />
            </Card>
            <h2>Welcome to Yaffle - the fantasy football app that nobody asked for.</h2>
            <p>Yaffle is a simple game of football prediction. You're tested on your current knowledge of football by 
              predicting which club will win in 8 distinct leagues around Europe. For every point your selected teams earn 
              in their league, you also earn a point on the Yaffle leaderboard. Anyone can join the game at any point in the 
              football season, however, <strong> you only gain points from teams after your selection is made,</strong> so it's optimal to 
              join the game before the football season begins.</p>
            <p>The game is deliberately designed to be 'light touch'. Unlike Fantasy Football games, once you have set up your teams you can 
                sit back and watch yourself move up (or maybe down) the leaderboard for the rest of the season if you don't want to spend too 
                much time managing your teams. It is possible to win Yaffle if you chose this strategy, however if you want to try to improve 
                your performance, you will be able to by getting the opportunity to substitute your teams throughout the season.</p>
            <h3>Has this been done before?</h3>
            <p>My dad Des Oates has created, managed and ran yaffle since (at least) 2009, however the last season ran was in 2016. 
                <a href="http://yaffle-2016.appspot.com/">The website is still (barely) up and running.</a> I (Matthew) have decided to inherit it from him and bring it 
                back to life. </p>
            <h3>How can I win Yaffle?</h3>
            <p>Once you have chosen your 8 teams, you will appear on the Yaffle leaderboard. Your total points score on the Yaffle 
                leaderboard is the sum of all your teams current points total in their respective leagues.
                The winner is the player with the most points at the end of the season when all leagues have been completed. 
                Play-offs are not counted for Yaffle.</p>
            <h3>How much does it cost?</h3>
            <p>An entry fee of £10 is applied. All of this money goes towards the prize fund.</p>
            <h3>What can I win?</h3>
            <p>The cash pool is usually split between the top 3 finishers on the Leaderboard at the end of the season. 
                It depends on how many players we have but usually the prize fund is split as follows: </p>
                <li>1st: 65% of the prize fund</li>
                <li>2nd: 25% of the prize fund</li>
                <li>3rd: 10% of the prize fund</li>
            <h3>How do I join?</h3>
            <p>Register by clicking the top right button. You will be asked to register and select your eight teams, once you've done that, you're in. In the mean 
                time, you can follow Yaffle twitter at <a href='https://twitter.com/yaffle2010'>@yaffle2010</a>.
            </p>

      </Page>
      );
}