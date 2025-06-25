
import React, { useState, useEffect } from 'react';

export default function LiveScoreboard() {
  const [score, setScore] = useState({
    teamA: 'Team A',
    teamB: 'Team B',
    runs: 120,
    wickets: 3,
    overs: '14.2',
    batsmen: [
      { name: 'Ankit', runs: 45, balls: 30 },
      { name: 'Aditya', runs: 20, balls: 18 }
    ],
    bowler: { name: 'Saurav', overs: '3.2', runs: 20, wickets: 1 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => ({
        ...prev,
        runs: prev.runs + 1,
        overs: (parseFloat(prev.overs) + 0.1).toFixed(1)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>CricWave Live Scoreboard</h1>
      <div style={{ fontSize: 20, marginBottom: 8 }}>
        {score.teamA} vs {score.teamB}
      </div>
      <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>
        {score.runs}/{score.wickets} ({score.overs} ov)
      </div>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 20 }}>Batsmen</h2>
        {score.batsmen.map((batsman, i) => (
          <div key={i}>{batsman.name}: {batsman.runs} ({batsman.balls})</div>
        ))}
      </div>
      <div>
        <h2 style={{ fontSize: 20 }}>Current Bowler</h2>
        <div>{score.bowler.name}: {score.bowler.overs} overs, {score.bowler.runs} runs, {score.bowler.wickets} wickets</div>
      </div>
    </div>
  );
}
