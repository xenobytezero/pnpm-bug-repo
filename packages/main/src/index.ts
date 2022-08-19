import { tryGetPathToModule } from '@mypkg/support';

console.log('Find Lodash...');
console.log(require.resolve('lodash'));
console.log(tryGetPathToModule('lodash'));

console.log('Find Workpsace Pkg..');
console.log(require.resolve('@mypkg/alt'));
console.log(tryGetPathToModule('@mypkg/alt'));
