import React from 'react';
import Badge from './Badge';

export default () => 
  <div>Hello
    <Badge 
      background='sable'
      partition='parti'
      partitionColor='or'
      piece='bordure'
      pieceColor='azure'
      meubles={[{name: 'star', dispo: 'r1', color: 'argent'}]}
    />
    <Badge 
      background='gules'
      partition='arlequin'
      partitionColor='argent'
      piece='pairle'
      pieceColor='savle'
      meubles={[
        {name: 'rond', dispo: 's1', color: 'orange'},
        {name: 'rond', dispo: 's4', color: 'rose'},
        {name: 'rond', dispo: 's6', color: 'sky'},
        {name: 'rond', dispo: 's7', color: 'sinople'},
        {name: 'rond', dispo: 'y3', color: 'or'},
        {name: 'rond', dispo: 'y4', color: 'purpure'}
      ]}
    />
    <Badge 
      background='pine'
      partition='ecartelesautoir'
      partitionColor='tenny'
      piece='bande'
      pieceColor='wine'
      meubles={[
        {name: 'manatee', dispo: 's3', color: 'argent'},
        {name: 'manatee', dispo: 's12', color: 'argent'},
        {name: 'heightstar', dispo: 'p1', color: 'fer'}
      ]}
    />
  </div>;
