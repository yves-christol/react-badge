import React from 'react';
import Badge from './Badge';

export default ({ name }) => 
  <div>Hello
    <Badge 
      background='sable'
      partition='parti'
      partitionColor='or'
    />
    <Badge 
      background='gules'
      partition='arlequin'
      partitionColor='argent'
    />
    <Badge 
      background='azure'
      partition='ecartelesautoir'
      partitionColor='sinople'
    />
  </div>;
