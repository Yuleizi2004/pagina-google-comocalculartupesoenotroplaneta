function Calcular(){
	//Declarar Variables
	var Mas,GravedadP,GravedadT,Pes;
	//Recuperar los valores de las cajas de texto
	Mas=parseFloat(document.getElementById("Mas").value);
	GravedadP=parseFloat(document.getElementById("GravedadP").value);
	GravedadT=parseFloat(document.getElementById("GravedadT").value);
    //Realizar las operaciones
    Pes=(Mas*GravedadP)/GravedadT;
    //Mostrar el resultado en las cajas de texto
    document.getElementById("Pes").value=Pes;
}
function Borrar(){
	document.getElementById("Mas").value="";
	document.getElementById("GravedadP").value="";
	document.getElementById("GravedadT").value="";
	document.getElementById("Pes").value="";
}