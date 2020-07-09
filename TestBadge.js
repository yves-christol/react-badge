import React from 'react';
import Badge from './Badge';

export default ({ name }) => 
  <div>Hello
    <Badge 
      background='sable'
      partition='parti'
      partitionColor='or'
      piece='sautoir'
      pieceColor='sky'
    />
    <Badge 
      background='gules'
      partition='arlequin'
      partitionColor='argent'
      piece='gousset'
      pieceColor='wine'
    />
    <Badge 
      background='azure'
      partition='ecartelesautoir'
      partitionColor='sinople'
      piece='bande'
      pieceColor='pine'
    />
  </div>;
