function limpar() {
    document.getElementById("xA").value = "";
    document.getElementById("xB").value = "";
    document.getElementById("yA").value = "";
    document.getElementById("yB").value = "";
    document.getElementById("display").value = ""
}

function calculardistancia() {
    var xA = Number(document.getElementById("xA").value); 
    var xB = Number(document.getElementById("xB").value); 
    var yA = Number(document.getElementById("yA").value); 
    var yB = Number(document.getElementById("yB").value); 

    var primeiraparte = Math.pow((xB - xA), 2);
    var segundaparte = Math.pow((yB - yA), 2);
    var soma = primeiraparte + segundaparte;
    var resultado = Math.sqrt(soma);
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularpontomedio() {
    var xA = Number(document.getElementById("xA").value); 
    var xB = Number(document.getElementById("xB").value); 
    var yA = Number(document.getElementById("yA").value); 
    var yB = Number(document.getElementById("yB").value); 

    var primeiraparte = (xA + xB) / 2;
    var segundaparte = (yA + yB) / 2;
    document.getElementById("display").value = `PM = (${primeiraparte}, ${segundaparte})`;
}

function calcularcoeficiente(){
    var xA = Number(document.getElementById("xA").value); 
    var xB = Number(document.getElementById("xB").value); 
    var yA = Number(document.getElementById("yA").value); 
    var yB = Number(document.getElementById("yB").value); 

    var partesuperior = yA - yB;
    var parteinferior = xA - xB;  
    var m = partesuperior / parteinferior;
    document.getElementById("display").value = `m = ${m}`;
    document.getElementById("display").value = resultado.toFixed(2);
}

function calcularequacaodareta(){
    var xA = Number(document.getElementById("xA").value); 
    var xB = Number(document.getElementById("xB").value); 
    var yA = Number(document.getElementById("yA").value); 
    var yB = Number(document.getElementById("yB").value);

    var mat = [
        [xA, xB, 1, xA],
        [yA, yB, 1, yA]
    ]

    var n1 = ((-1 * mat[0][1]) * mat[1][0]);
    var x1 = ((-1 * mat[0][2]) * mat[1][1]);
    var y1 = ((-1 * mat[0][3]) * mat[1][2]);

    var n2 = mat[0][0] * mat[1][1];
    var x2 = mat[0][1] * mat[1][2];
    var y2 = mat[0][2] * mat[1][3];

    var somax = x1 + x2;
    var somay = y1 + y2;
    var soman = n1 + n2;

    somax = (somax > 0 ? `+${somax}`: somax);
    somay = (somay > 0 ? `+${somay}`: somay);
    soman = (soman > 0 ? `+${soman}`: soman);

    document.getElementById("display").value =`${somax}x ${somay}y ${soman} = 0`
    
}