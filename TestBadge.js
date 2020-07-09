import React from 'react';
import Badge from './Badge';

export default () => 
  <div>Hello
    <Badge 
      background='sable'
      partition='parti'
      partitionColor='or'
      piece='bordure'
      pieceColor='gules'
      meubles={[{name: 'star', dispo: 'r1', color: 'argent'}]}
    />
    <Badge 
      background='gules'
      partition='arlequin'
      partitionColor='argent'
      piece='pairle'
      pieceColor='pine'
      meubles={[
        {name: 'rond', dispo: 's1', color: 'argent'},
        {name: 'rond', dispo: 's4', color: 'argent'},
        {name: 'rond', dispo: 's6', color: 'argent'},
        {name: 'rond', dispo: 's7', color: 'argent'},
        {name: 'rond', dispo: 'y3', color: 'argent'},
        {name: 'rond', dispo: 'y4', color: 'argent'}
      ]}
    />
    <Badge 
      background='pine'
      partition='ecartelesautoir'
      partitionColor='sinople'
      piece='bande'
      pieceColor='gules'
      meubles={[
        {name: 'manatee', dispo: 's3', color: 'argent'},
        {name: 'manatee', dispo: 's12', color: 'argent'},
        {name: 'rond', dispo: 'p1', color: 'fer'}
      ]}
    />
  </div>;
