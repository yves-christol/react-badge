const partitions = [
  ['none', { path: ''} ],
  ['parti', { path: 'M 0,-12 h12 v12 C 12,10 0,15 0,15 z'} ],
  ['partizigzag', { path: 'M 0,-12 h12 v12 C 12,10 0,15 0,15 l -3,-2 l 6,-2 l -6,-2 l 6,-2 l -6, -2 l 6,-2 l -6,-2 l 6,-2 l -6,-2 l 6,-2 l -6,-2 l 6,-2 l -6,-2 z'} ],
  ['partieclair', { path: 'M 0,-12 h12 v12 C 12,10 0,15 0,15 l 3,-16 l -6,4 z'} ],
  ['partiondule', { path: 'M 0,-12 h12 v12 C 12,10 0,15 0,15 v -2 a 2,2 0 0,1 0,-4 a 2,2 0 0,0 0,-4 a 2,2 0 0,1 0,-4 a 2,2 0 0,0 0,-4 a 2,2 0 0,1 0,-4 a 2,2 0 0,0 0,-4 z'} ],
  ['coupe', { path: 'M -12,-0 h24 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 z'} ],
  ['coupezigzag', { path: 'M 12,0 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 l 2,-3 l 2,6 l 2,-6 l 2,6 l 2,-6 l 2,6 l 2,-6 l 2,6 l 2,-6 l 2,6 l 2,-6 z'} ],
  ['coupevague', { path: 'M 12,0 C 12,10 0,15 0,15 C 0,15, -12,10 -12,0 a 3,3 1 0,0 3,-2 a 3,3 1 0,0 6,0 a 3,3 1 0,0 6,0 a 3,3 1 0,0 6,0 a 3,3 1 0,0 3,2 z'} ],
  ['tranche', { path: 'M -12 -12 L -11.89 -12 L 8.69 8.58 C 5.14 12.86 0 15 0 15 C 0 15 -12 10 -12 0 Z'} ],
  ['taille', { path: 'M 12 -12 L 11.89 -12 L -8.69 8.58 C -5.14 12.86 0 15 0 15 C 0 15 12 10 12 0 Z'} ],
  ['ecartele', { path: 'M 0 -11.96 L 0 0.04 L -12 0.04 C -12 0.03 -12 0.01 -12 0 L -12 -11.96 Z M 0.03 0.03 L 12 0.03 C 11.98 9.72 0.69 14.7 0.03 14.99 Z'} ],
  ['ecartelesautoir', { path: 'M 0 0 L -8.64 8.64 C -10.54 6.37 -12 3.49 -12 0 L -12 -12 Z M 0 0 L 12 -12 L 12 0 C 12 3.49 10.54 6.37 8.64 8.64 Z'} ],
  ['gironne', { path: 'M 0 0 L -12 -12 L 0 -12 Z M 0 0 L 12 -12 L 12 0 Z M 0.02 0 L 8.65 8.63 C 5.23 12.72 0.37 14.84 0.02 14.99 Z M 0 0 L -8.64 8.64 C -10.54 6.37 -12 3.49 -12 0 Z'} ],
  ['equipole', { path: 'M -4 -4 L -12 -4 L -12 -12 L -4 -12 Z M 11.95 -4 L 3.95 -4 L 3.95 -12 L 11.95 -12 Z M -4 -3.98 L 4 -3.98 L 4 4 L 11.33 4 C 9.94 8.02 6.67 10.94 4 12.75 L 4 4.02 L -3.99 4.02 L -3.99 12.76 C -6.68 10.94 -9.97 8 -11.35 3.95 L -4 3.95 Z'} ],
  ['echiquete', { path: 'M -5.96 -6 L -11.96 -6 L -11.96 -12 L -5.96 -12 Z M 6 -6 L 0 -6 L 0 -12 L 6 -12 Z M -6 -5.99 L 0 -5.99 L 0 0 L 6 0 L 6 6 L 0 6 L 0 0.01 L -6 0.01 Z M 6 -6 L 12 -6 L 12 0 L 6 0 Z M -6.03 0 L -6.03 6 L -10.45 6 C -11.39 4.25 -12 2.25 -12 0 Z M -6 6 L 0 6 L 0 12 L -5.05 12 C -5.37 11.76 -5.68 11.51 -6 11.25 Z M 6 6 L 10.45 6 C 9.3 8.13 7.65 9.88 6 11.25 Z M 0 12 L 5.05 12 C 2.4 14 0 15 0 15 Z'} ],
  ['arlequin', { path: 'M -8 -12 L -4 -8 L -8 -4 L -12 -8 Z M 0 -11.99 L 4 -7.99 L 0 -3.99 L -4 -7.99 Z M 8 -12 L 12 -8 L 8 -4 L 4 -8 Z M -8 -4 L -4 0 L -8 4 L -12 0 Z M 0 -3.99 L 4 0.01 L 0 4.01 L -4 0.01 Z M 8 -4 L 12 0 L 8 4 L 4 0 Z M -8 4 L -4 8 L -6.67 10.67 C -8.01 9.46 -9.31 8 -10.29 6.29 Z M 0 4.01 L 4 8.01 L 0 12.01 L -4 8.01 Z M -0.02 12 L 1.98 14 C 0.8 14.67 0 15 0 15 C 0 15 -0.81 14.66 -2.01 13.99 Z M 8 4 L 10.29 6.29 C 9.31 8 8.01 9.46 6.67 10.67 L 4 8 Z'} ],
]

const partitionMap = new Map(partitions);

export function randomPartition() {
  return partitions[Math.floor(Math.random() * partitions.length)][0];
}

export function getPartition(name) {
  return name ? partitionMap.get(name).path : '';
}

export function getPartitions() {
  return partitions;
}