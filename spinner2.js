
const spinnerArr = ['|', '/', '-','\\','|', '/','-','\\','|' ];

let time = 100;
for(const char of spinnerArr){
    setTimeout(()=> process.stdout.write(`\r${char}`),time);
    time += 200;
}