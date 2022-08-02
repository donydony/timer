const args = process.argv.slice(2);

const timer = function(timers) {
  if (timers.length === 0) {
    return;
  }
  for (let i of timers) {
    let num = Number(i);
    if (num >= 0) {
      setTimeout(() => {process.stdout.write('\x07');}, num * 1000);
    }
  }
} 

timer(args);