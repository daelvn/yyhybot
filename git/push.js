const { exec } = require("child_process");

exec("git config pull.rebase false", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

exec('git config --global user.email "daelvn@gmail.com"', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

exec('git config --global user.name "Dáel Muñiz"', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

exec("git add .", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

exec("git commit -m 'Cloud push'", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});

exec("git push origin main --force", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }
  console.log(`${stdout}`);
});
