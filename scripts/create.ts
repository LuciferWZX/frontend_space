import * as process from 'process';
const parseArgs = (processArgs: string[]) => {
  const args = processArgs.slice(2, processArgs.length);
  if (args.length === 0) {
    console.error('The package name cannot be empty!');
    return;
  }
  if (args.length > 3) {
    console.error('The package name cannot be empty!');
  }
};
console.log('*：start create');
parseArgs(process.argv);
