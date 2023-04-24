

window.addEventListener('DOMContentLoaded', () => {


  })
/*
var child = require('child_process').execFile;
var executablePath = "C:\\Users\\Usuario\\Desktop\\GLPI-AGENT\\nomequip.ps1";

child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});


const { PowerShell } = require('node-powershell')

let ps = new PowerShell({
	executionPolicy: 'Bypass',
	noProfile: true,
})

const getLG = PowerShell.command`Get-LocalGroup`

const hey = ps
	.invoke(getLG)
	.then((output) => {
		console.log(output)
		ps.dispose()
	})
	.catch((err) => {
		console.log(err)
		ps.dispose()
	})

console.log(hey)
*/ 