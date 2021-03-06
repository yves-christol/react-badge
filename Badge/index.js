import React from 'react';
import { getColor, getColorComp } from './colors.js';
import { getPartition } from './partitions.js';
import { getPiece } from './pieces.js';
import { getTransfo } from './dispos.js';
import { getMeuble } from './meubles.js';

const shield = 'M 0,0 m -12,-12 h24 v12 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 z';

// Badge component - represents a single svg shield
// props should contain :
// background: String
// partition: String
// partitionColor: String
// piece: String
// pieceColor: String
// meubles: [{name: String, dispo: String, color: String}, ...]

const Badge = (props) => (
  <svg viewBox="-13 -13 26 29">
    <defs>
      <radialGradient id="grad" gradientUnits="userSpaceOnUse" cx="-4" cy="-4" r="20">
        <stop stopColor='#fff' stopOpacity='0.31' offset='0%'/>
        <stop stopColor='#fff' stopOpacity='0.25' offset='19%'/>
        <stop stopColor='#6b6b6b' stopOpacity='0.12' offset='60%'/>
        <stop stopColor='#000' stopOpacity='0.12' offset='100%'/>
      </radialGradient>
    </defs>
    <path d={shield} style={{fill: getColor(props.background), strokeWidth: '0'}} />
    {props.partition ? 
      <path d={getPartition(props.partition)}  style={{fill: getColor(props.partitionColor)}} />
    : ''}
    {props.partition ? 
      <path d={getPiece(props.piece)}  style={{fill: getColor(props.pieceColor)}} />
    : ''}
    {props.meubles ? props.meubles.map((m) =>
      <path key={m.dispo} d={getMeuble(m.name)}
        style={{fill: getColor(m.color), stroke: getColorComp(m.color), strokeWidth: '0.3'}}
        transform={getTransfo(m.dispo, 0)}
      />) :
      ''
    }
    < path d={shield}
      style={{fill: 'url(#grad)', stroke: '#000', strokeWidth: '0.3'}}
    />
  </svg>
);

export default Badge;