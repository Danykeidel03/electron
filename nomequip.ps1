<#
$nom = hostname
$equipo = "`"$($nom)`""
write-host $equipo#>
$ruta = $PSScriptRoot+'/salida.txt'
hostname | Out-File $ruta