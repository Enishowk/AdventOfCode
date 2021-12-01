const fs = require('fs');
const { exec } = require('child_process');
const { performance } = require('perf_hooks');

const execFile = (folder, file) => {
    const start = performance.now();
    exec(`node ${folder}/${file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        const perf = performance.now() - start;
        console.log(
            `${file}: ${stdout.replace(/\n|\r/g, '')} in ${perf.toFixed(2)} ms`
        );
    });
};

try {
    const [AAAA, dd] = process.argv.slice(2);
    if (!AAAA || !dd) {
        throw new Error('One param is missing : year, day');
    }
    const folder = `${AAAA}/day${dd}`;

    const files = fs.readdirSync(folder);
    const jsFiles = files.filter((file) => file.split('.').pop() === 'js');

    jsFiles.forEach((file) => execFile(folder, file));
} catch (error) {
    console.log(error.message);
}
