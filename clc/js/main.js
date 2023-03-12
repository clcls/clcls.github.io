nFix();

/*////  variables    5310.0000000001 */
let ongl = '0.017453292519943', reOngl = '57.29577951308329', mim = '', fichour = gebi('fichour'), SCN = 'normal',
    result = gebi('result'), rLHF = [], rLHR = [], psClk = 0, num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], dvfch = gebi('dvfch'),
    div1 = gebi('fdiv'), div2 = gebi('divNum'), inp;

gebi('dvfch').oncontextmenu = (ev) => {
    ev.preventDefault();
    gebi('psSp').style.display = 'inline';
}


gebi('psSp').onclick = () => {
    navigator.clipboard.readText().then((txt) => { toFchr(txt) })
}

creatin()
function creatin() {
    //classes
    let c1 = ' btn-primary Cbtn', c2 = ' btn-success btn-ver', c3 = ' btn-info symbolBtn',

        // functions  
        f1 = 'add(', f3 = 'adCar(', f4 = 'addSymbF(', f5 = 'addSymbP(', f6 = 'retour(', f7 = 'clearing(',
        f8 = 'scNrml(', f9 = 'save(', f10 = 'toFchr(', f11 = 'addSave(', f12 = 'upRes(', f13 = 'addVrgl('

    //array function
    arF = [f1 + "'sin('", f1 + "'cos('", f1 + "'tan('", f3 + "'%'", f1 + "'abs('", f8,
    f1 + "'asin('", f1 + "'acos('", f1 + "'atan('", f1 + "'e^('", f1 + "'Ln('", f1 + "'Log('",
    f1 + "'sinh('", f1 + "'cosh('", f1 + "'tanh('", f1 + "'('", f3 + "')'", f7,
    f1 + "'&pi;'", f3 + "'^('", f1 + "'√('", f3 + "'^(-1)'", f3 + "'²'", f6,
    f1 + "'7'", f1 + "'8'", f1 + "'9'", f4 + "'÷'", f9,
    f1 + "'4'", f1 + "'5'", f1 + "'6'", f4 + "'×'", f10,
    f1 + "'1'", f1 + "'2'", f1 + "'3'", f5 + "'-'", f11,
    f1 + "'0'", f1 + "'(-'", f13, f5 + "'+'", f12,
    ///normal
    f1 + "'('", f3 + "')'", f8, f7,
    f4 + "'÷'", f4 + "'×'", f3 + "'%'", f6,
    f1 + "'7'", f1 + "'8'", f1 + "'9'", f3 + "'^(-1)'",
    f1 + "'4'", f1 + "'5'", f1 + "'6'", f5 + "'-'",
    f1 + "'1'", f1 + "'2'", f1 + "'3'", f5 + "'+'",
    f1 + "'0'", f1 + "'(-'", f13, f12],

        //class normal
        arClN = [c1, c1, c1, c1,
            c3, c3, c3, c1 + ' btn-primary2',
            c2, c2, c2, c3,
            c2, c2, c2, c3,
            c2, c2, c2, c3,
            c2, c2, c2, c3,],

        //arry classes        
        arCl = [...Array(23).keys()],//fichour.innerText = arCl


        //arry innerHtml
        arIH = ['sin', 'cos', 'tan', '%', '|x|', 'S/N',
            'asin', 'acos', 'atan', 'e<sup>x</sup>', 'Ln', 'Log',
            'sinh', 'cosh', 'tanh', '(', ')', 'C',
            '&pi;', 'y<sup>x</sup>', '√x', '1/x', 'x²', '←',
            '7', '8', '9', '÷', 'XM',
            '4', '5', '6', '×', 'RM',
            '1', '2', '3', '-', 'M+',
            '0', '-/+', '.', '+', '=',
            // normal
            '(', ')', 'N/S', 'C',
            '÷', '×', '%', '←',
            '7', '8', '9', '1/x',
            '4', '5', '6', '-',
            '1', '2', '3', '+',
            '0', '-/+', '.', '='];

    arCl.fill(c1); arCl.push(c1 + ' btn-primary2', c2, c2, c2, c3, c3, c2, c2, c2, c3, c3, c2, c2, c2, c3, c3, c2, c2, c2, c3, c3);
    arCl = arCl.concat(arClN);

    /* #################################################
    ################################################# */



    /* aficher les divs*/
    divBtn(0, 24, 'fdiv');
    divBtn(24, 44, 'divNum');

    divBtn(44, 68, 'nrmldv');
    gHist();

    /* //// function creat btn */
    function divBtn(i, fi, div) {
        div = gebi(div);
        for (; i < fi; i++) {
            div.innerHTML += '<button id="b' + i + '"   onclick="' + arF[i] + ')" ' +
                ' class="btn disabled ' + arCl[i] + ' "role="button" >' + arIH[i] + '</button>';
        }
    }
    gebi('b51').style.height = '100%';

    /* //// chek clc is normal or scientific \\\\\\ */
    if (localStorage.ScNo === 'sc') { SCN = 'sc'; }
    scNrml();


    /* /////  sev mimoir on href \\\\\\\\\\ */

    if (localStorage.getItem('mim')) {
        let mim = localStorage.mim;
        gebi('mimoir').style.color = 'black';
    }

    document.addEventListener('click', () => { gebi('psSp').style.display = 'none' });

    /*   functin of click keybord */
    addEventListener('keydown', (e) => {//e event
        e.preventDefault();
        let kc = e.keyCode, arkc = [[110, 107, 109, 106, 111, 219, 53, 8, 13],
        ['b41', 'b42', 'b37', 'b32', 'b27', 'b16', 'b15', 'b23', 'b43']];
        if ((kc > 95) && (kc < 106)) { add(kc - 96); }
        for (let i = 0; i < arkc[0].length; i++) { if (kc === arkc[0][i]) { gebi(arkc[1][i]).click(); } }
    })
    setTimeout(() => {
        gebi('clVu').innerHTML += '<iframe src="https://maktaeliliktroniya.blogspot.com/2022/08/calculator.html" frameborder="0"></iframe>';
        gebi('clVu').style.display = 'none';
    }, 5000);
}

/* ////// short function \\\\\\\\\\ */
function gebi(pr) { return document.getElementById(pr); }
function clearing() { /* //f7  */ fichour.innerText = '0'; result.innerText = ''; }
function forziro() { if (fichour.innerText == '0') { fichour.innerText = ''; } }
function toFchr(pr = mim) {
    forziro();
    let fch = fichour.innerText, pr2 = pr.replace(/\d|,/g, '');
    inp = fch.replace(/\d/g, '');
    if (inp[inp.length - 1] == '.' && pr2[0] == '.') { fch += '+' + slcFchr(pr) } else { fch += pr; fch = slcFchr(fch) }
    fichour.innerText = fch; jump()
}
function hiToDiv(FR) { let Hist = localStorage['lHist' + FR]; Hist = Hist.split('@#'); return Hist; }
function ind(inp, pr, pr2 = 0) { inp = inp.indexOf(pr, pr2); return inp; }
function laIn(inp, pr, fin = inp.length) { return inp.lastIndexOf(pr, fin) }
function rep(inp, pr1, pr2) { return inp.replaceAll(pr1, pr2); }
function frNm(vl) {
    vl += '';
    let fl = '', i = ind(vl, '.');
    if (i > -1) { fl = vl.slice(i, vl.length); vl = vl.slice(0, i) }
    vl = new Intl.NumberFormat('en').format(vl);
    return vl + fl;
}
function slcFchr(inp) {
    inp = rep(inp, ',', ''); let tst = /\d\d\d\d/;
    if (tst.test(inp)) {
        let sp = inp.split(/[^\d|'.']/g), smb = inp.replace(/[\d|'.']/g, '');
        inp = '';
        sp.forEach((e, i) => {
            if (e) { e = frNm(e); inp += e }
            if (smb[i]) { inp += smb[i] }
        })
    }
    return inp
}
/* localStorage.removeItem('lHistF');
localStorage.removeItem('lHistR'); */

/* ////// histori and hiding histori   \\\\\\\\\\\\\ */
function hist() {
    gebi('contHist').style.display = 'block';

    setTimeout(() => {
        gebi('divHist').className += ' dHtrnf';
    }, 100);
    gebi('lHist').scrollTop = gebi('lHist').scrollHeight;
}

function hidHist() {
    gebi('divHist').className = 'divHist';

    setTimeout(() => {
        gebi('contHist').style.display = 'none';
    }, 210);


}

/* ////trensfer scientific and normal \\\\\\\\\ */
function scNrml() {
    let arStl = [['fdiv', 'divNum', 'drg', 'nrmldv'],//style
    [['none', 'none', 'none', 'grid'], ['grid', 'grid', 'block', 'none']]];//display
    if (SCN == 'normal') {
        for (let i = 0; i < arStl[0].length; i++) {
            gebi(arStl[0][i]).style.display = arStl[1][0][i];
        }
        localStorage.ScNo = 'normal';
        SCN = 'sc';
    } else {
        for (let i = 0; i < arStl[0].length; i++) {
            gebi(arStl[0][i]).style.display = arStl[1][1][i];
        }
        localStorage.ScNo = 'sc';
        SCN = 'normal';
    }

}

/*  jump functin */

function jump() {
    /* //// ce C0N */
    inp = fichour.innerText;
    let testr = /[^1-9]0\d/g, nm = '0123456789', symbols = '+-/×*^(', tst2 = /\d\d\d\d/;

    while (inp.charAt(0) == '0' && ind(nm, inp.charAt(1)) > -1 && inp != '0') { inp = inp.slice(1, inp.length); }

    if (testr.test(inp)) {
        let inZiro = ind(inp, '0'), dwInp;

        while (inZiro > -1) {
            dwInp = inp.slice(inZiro, inp.length);
            inp = inp.slice(0, inZiro);
            if (ind(symbols, inp.charAt(inZiro - 1)) > -1 && ind(nm, dwInp.charAt(1)) > -1) {
                dwInp = dwInp.slice(1, dwInp.length);
            } else {
                inZiro++;
            }
            inp += dwInp;
            inZiro = ind(inp, '0', inZiro);

        }
    }

    if (tst2.test(inp)) {
        let sp = inp.split(/[^\d|'.'|',']/g), e = sp[sp.length - 1], vl = e;
        if (e) { vl = rep(vl, ',', ''); vl = frNm(vl); inp = inp.slice(0, laIn(inp, e)); inp += vl; }
    }

    fichour.innerText = inp;

    /* //////jump \\\\\\\ */
    dvfch.scrollTop = dvfch.scrollHeight;
    calcule();
    //result.innerText =inp;
}


/* //// Up result to fichour */
function upRes() {
    if (result.innerText == '' || ind(result.innerText, 'You must') > -1) { return false }
    result.className += ' ogmentation';
    let fich = fichour.innerText, re = result.innerText;
    dvfch.className += ' upScrl';
    dvfch.scrollTo({ top: 1000, behavior: 'smooth' })
    svHist(fich, re); fichour.className = '';
    setTimeout(() => {
        fichour.innerText = re;
        dvfch.className = 'inp';
        result.innerText = '';
        result.className = 'result';
        fichour.className = 'fchr';
    }, 300);

}



/*  /////// add \\\\\\\\\ */
function add(pr) {//f1
    forziro();
    let inp = fichour.innerText, crs = ')²%π', crInp = inp.charAt(inp.length - 1);
    if (ind(crs, crInp) > -1) { addSymbF('×') }
    fichour.innerText += pr;
    jump();
}


/*  /////add caracter\\\\\\ */
function adCar(pr) { //f3

    let inp = fichour.innerText,
        len = inp.length, pls = '+' + inp,
        cr = pls.charAt(len),
        smb = '/÷*×-+(^',
        inpLef = rep(inp, '(', '').length,
        inpRi = rep(inp, ')', '').length;
    if (ind(smb, cr) < 0 && ind('%²', cr) < 0 || ind('^(²', pr) < 0) {
        if (pr != ')' || inpLef < inpRi && cr != '(') { inp += pr; }
    }
    fichour.innerText = inp;
    jump();
}

/* //////// add symbole × / */
function addSymbF(pr) {//f4
    let inp = fichour.innerText, lft = '(' + inp,
        len = lft.length - 2,
        cr = lft.charAt(len + 1),
        cr2 = lft.charAt(len),
        smb = '/÷*×-+.,';
    if (ind('(^', cr) < 0) {
        if (ind(smb, cr) > -1) { if (ind('(^', cr2) < 0) { inp = inp.slice(0, len) + pr; } } else { inp += pr; }
    }
    result.innerText = '';
    fichour.innerText = inp;
    fichour.scrollTop = fichour.scrollHeight;
}

/* /////// add Symbole + -  \\\\\\\ */
function addSymbP(pr) { //f5
    inp = fichour.innerText; let lenInp = inp.length - 1,
        crInp = inp.charAt(lenInp),
        plus = '+',
        symbols = '/÷*×-+.,';

    if (ind(symbols, crInp) > -1) {
        inp = inp.slice(0, lenInp);
        plus = '';
    }
    inp += pr;
    result.innerText = '';
    fichour.innerText = inp;
    fichour.scrollTop = fichour.scrollHeight;
    return plus
}

/* ////// add virguele \\\\\ */
function addVrgl() {
    inp = '+' + fichour.innerText; let fin = ')%π', smbl = '+-/×*^÷(', crInp = inp.charAt(inp.length - 1), add = '', tst = laIn(inp, '.'), inSm = 0;
    if (ind(fin, crInp) > -1) { add = '×0.'; } else if (ind(smbl, crInp) > -1) { add = '0.'; } else if (crInp !== '.') { add = '.'; }

    inp = inp.replace(/\d/g, '')
    if (inp[inp.length - 1] == '.') { add = '' }
    fichour.innerText += add;
    jump();
    //result.innerText = inp
}


/* ///// retour \\\\\\\\\\\ */
function retour() { //f6
    inp = fichour.innerText;
    let lenInp = inp.length, symbols = /([a-z]|\^|√)/gi,
        crInp = inp.charAt(lenInp - 1), crInp2 = inp.charAt(lenInp - 2);


    if (crInp == '(' && symbols.test(crInp2)) {
        ////replace 
        let arRep = [
            ['abs(', 'cosh(', 'acos(', 'cos(', 'e^(', 'Ln(', 'Log(', '√(', 'asin(', 'sinh(', 'sin(', 'atan(', 'tanh(', 'tan('],
            ['d', 'f', 'j', 'k', 'm', 'p', 'q', 'r', 'u', 'v', 'w', 'x', 'y', 'z']];

        for (let i = 0; i < arRep[0].length; i++) { inp = rep(inp.loCase(), arRep[0][i].loCase(), arRep[1][i]); }
        inp = inp.slice(0, inp.length - 1);
        /////reteur
        for (let i = 0; i < arRep[0].length; i++) { inp = rep(inp, arRep[1][i], arRep[0][i]); }
    } else { inp = inp.slice(0, inp.length - 1) }
    let sp = inp.split(/[^\d|'.'|',']/g), e = sp[sp.length - 1], vl = e;
    inp = inp.slice(0, laIn(inp, e));
    vl = rep(vl, ',', ''); inp += vl;
    fichour.innerText = inp;
    jump();
}


/* //////// replice drg ongle */
function drgFun() { //f8
    let drg = gebi('drg').innerText;
    if (drg == 'deg') {
        gebi('drg').innerText = 'rad'; ongl = '1'; reOngl = '1';
    } else if (drg == 'rad') {
        gebi('drg').innerText = 'grad'; ongl = '0.015707963267948967'; reOngl = '63.66197723675813';
    } else {
        gebi('drg').innerText = 'deg'; ongl = '0.017453292519943295'; reOngl = '57.29577951308329';
    }
    jump();
}

/* ////mimoiring number \\\\\\*/
function save() {//f9

    if (fichour.innerText !== '0' && fichour.innerText !== '') {
        mim = fichour.innerText;
        fichour.innerText = '';
        setTimeout(() => {
            fichour.innerText = mim;
        }, 90);
        localStorage.mim = mim;
        gebi('mimoir').style.color = 'black';
    } else if (fichour.innerText == '' || fichour.innerText == '0') {
        gebi('mimoir').style.color = 'transparent';
        mim = '';
        localStorage.mim = '';
    }
    fichour.scrollTop = fichour.scrollHeight;
}


/* ////// add save \\\\\\\\ */
function addSave() { //f11

    if (mim.length == 0) {
        save();
    } else {
        let nMim = fichour.innerText; mim += addSymbP('+') + nMim; fichour.innerText = '';
        setTimeout(() => { fichour.innerText = nMim; }, 90); localStorage.mim = mim;
    }
    fichour.scrollTop = fichour.scrollHeight;
}



function svHist(pr1, pr2) {
    let dvSv = gebi('lHist');
    if (pr1 == rLHF[rLHF.length - 1]) { return false }
    if (fichour.innerText === '0') { fichour.innerText == '' }
    dvSv.innerHTML += ' <div onclick="toFchr( this.innerText)" class="inpHist"><div>' + pr1 + '</div></div>' +
        '<div class="result resultHist" onclick="toFchr( this.innerText)">' + pr2 + '</div> <hr>';

    /* ///history */
    if (rLHF.length > 20) {
        rLHF = rLHF.slice(1, rLHF.length);
        rLHR = rLHR.slice(1, rLHR.length);
    }
    rLHF.push(pr1);
    rLHR.push(pr2);

    localStorage.lHistF = rLHF.join('@#');
    localStorage.lHistR = rLHR.join('@#');
}/* getItem */

/* ////// get Hist */
function gHist() {
    if (localStorage.getItem('lHistF')) {
        let dvSv = gebi('lHist'), alldvSv = '';
        rLHF = hiToDiv('F');
        rLHR = hiToDiv('R');
        for (let i = 0; i < rLHF.length; i++) {
            alldvSv += '<div onclick="toFchr( this.innerText)" class="inpHist">' + rLHF[i] +
                '</div>' +
                '<div class="result resultHist" onclick="toFchr( this.innerText)">' + rLHR[i] + '</div> <hr>';

        }
        dvSv.innerHTML = alldvSv;
    }
}



/*  ////////// equale \\\\\\\\\\\\\\ */
///////////////////////////////////////
///////////////////////////////////////

function nFix() {
    String.prototype.loCase = function () { let e = this.toLowerCase(); return e; }
    Number.prototype.fix = function (fx = 13) {
        let th = this; sth = '' + th;
        if (ind(sth, 'e') > -1) { th = fixing(th, fx); if (Math.abs(th) < 1e-12) { th = 0 } } else { th = th * 1e103; th = fixing(th, fx, 103); }

        return th;
    }

    function fixing(inp, fx, ng = 0) { // ng nember gonfel
        let sInp = '' + inp, inUpInp = ind(sInp, 'e'), inFx,
            dwInp = sInp.slice(inUpInp + 1, sInp.length) * 1;
        inp = sInp.slice(0, inUpInp) * 1; dwInp -= ng;
        inp = inp.toFixed(fx) * 1; inFx = inp.toFixed(5) * 1;
        if (Math.abs(inp - inFx) < 1e-10) { inp = inp.toFixed(5) * 1; }
        sInp = inp + 'e' + dwInp; inp = sInp * 1;
        return inp;
    }
}
/* ///////  numMath, num( =>num*Math, num*( \\\\\\\\\ */
function loopFun(inp, test, car, crs) {
    if (!test.test(inp)) { return inp }
    let index = ind(inp, car);
    while (index > -1) {
        dwInp = inp.slice(index, inp.length); inp = inp.slice(0, index);
        if (ind(crs, inp.charAt(index - 1), 0) > -1) { dwInp = '*' + dwInp; }
        index += 2; inp += dwInp; index = ind(inp, car, index);
    }
    return inp;
}


/* ///////// Calcule valure enter btackets \\\\\\\ */
function brackets(inp) {
    let inRB, upInp, inLB, dwInp, inRBDw, bet;
    while (ind(inp, '(') > -1) {
        inRB = ind(inp, ')');//index of Right bracket
        upInp = inp.slice(0, inRB); inLB = laIn(upInp, '(', inRB);
        dwInp = inp.slice(inLB, inp.length); inRBDw = ind(dwInp, ')');
        bet = dwInp.slice(1, inRBDw); upInp = inp.slice(0, inLB);

        bet = rep(bet, 'left', '('); bet = rep(bet, 'right', ')');
        bet = eval(bet); bet = bet.fix();
        dwInp = dwInp.slice(inRBDw, dwInp.length);
        dwInp = dwInp.replace(')', 'right')
        dwInp = 'left' + bet + dwInp;
        inp = upInp + dwInp;
    }
    inp = rep(inp, 'left', '('); inp = rep(inp, 'right', ')');
    return inp;
}

/* //// Calculate Math.function(x)  \\\\\ */
function calcMat(inp) { //acos asin atan and Math.cos,sin,tan
    let dwInp, i, rdw, ldw, inUpInp = laIn(inp, 'Math'), dwDwinp;//right dw and left
    while (inUpInp > -1) {
        if (inp.slice(inUpInp - reOngl.length - 1, inUpInp) == reOngl + '*') { inUpInp = laIn(inp, reOngl + '*Math') }
        rdw = 0; ldw = 0, i = 1; dwInp = inp.slice(inUpInp, inp.length);
        inp = inp.slice(0, inUpInp); ldw = ind(dwInp, '('); ldw++;
        while (i > 0) {//gebi('log').innerText+=i;
            rdw = ind(dwInp, ')', rdw); ldw = ind(dwInp, '(', ldw);
            if (ldw < rdw && ldw > -1) { ldw++; i++; } else { ldw = rdw; rdw++; i--; }
        }

        dwDwinp = dwInp.slice(rdw, dwInp.length);
        dwInp = dwInp.slice(0, rdw);
        if (ind(dwInp, ongl) === 9) { dwInp = dwInp.replace(ongl + '*', ongl + '*('); dwInp += ')'; }

        dwInp = brackets(dwInp);
        dwInp = eval(dwInp); dwInp = dwInp.fix();
        inp += dwInp + dwDwinp;
        inUpInp = laIn(inp, 'Math');
    }//gebi('log').innerText += inp ;

    return inp;
}

function calcule() { //f12

    let inp = fichour.innerText, lenInp = inp.length, crInp = inp.charAt(lenInp - 1),
        arSy = [], fich = inp, symbols = '/*×-+(^.';
    result.innerText = '';
    if ((ind(symbols, crInp) > -1 || lenInp < 2) && ind(inp, 'π') < 0) { return false; }
    if (inp.charAt(0) === '+' || inp.charAt(0) === '-') { inp = '0' + inp }

    /* ////replasment\\\\ */
    arSy = [[' ', ''], [' ', ''], [',', ''], ['×', '*'], ['%', '*1/100'], ['^', '**'], ['²', '**(2)'], ['π', '(3.141592653589793)'], ['÷', '/']];
    arSy.forEach((e) => { inp = rep(inp, e[0], e[1]); })

    if (ind(inp, '(') > -1 || ind(inp, 'e**') > -1) {
        let test1 = /\)(\d|M|\()/gi, test2 = /\dreOngl/gi, arRe = [],
            difRL = rep(inp, ')', '').length - rep(inp, '(', '').length;
        for (let i = 0; i < difRL; i++) { inp += ')'; }
        inp = inp.loCase();
        arRe = [
            ['cosh', 'acos', 'cos(', 'asin', 'sinh', 'sin(', 'atan', 'tanh', 'tan(', 'log', 'abs', 'k', 'j', 'f', 'e**',
                'ln', '√', 'w', 'u', 'v', 'z', 'x', 'y', '(-', '(+'],
            ['f', 'j', 'k', 'u', 'v', 'w', 'x', 'y', 'z', 'Math.logt', 'Math.abs', 'Math.cos(' + ongl + '*',
                'reOngl*Math.acos', 'Math.cosh', '(2.718281828459045)**', 'Math.log', 'Math.sqrt', 'Math.sin(' + ongl + '*',
                'reOngl*Math.asin', 'Math.sinh', 'Math.tan(' + ongl + '*', 'reOngl*Math.atan', 'Math.tanh', '(0-', '(0+'
            ]];

        for (let i = 0; i < arRe[0].length; i++) { inp = rep(inp, arRe[0][i], arRe[1][i]); }

        inp = loopFun(inp, /\d\(/gi, '(', num); inp = loopFun(inp, /\dM/gi, 'M', num);
        inp = loopFun(inp, /\dreOngl/gi, 'reOngl', num); inp = rep(inp, 'reOngl', reOngl);

        if (test1.test(inp)) {
            let inRight = ind(inp, ')'), dwInp;
            while (inRight > -1) {
                dwInp = inp.slice(inRight + 1, inp.length); inp = inp.slice(0, inRight + 1);
                if ((ind(num, dwInp.charAt(0)) > -1 || dwInp.charAt(0) === 'M' || dwInp.charAt(0) === '(')
                    && dwInp.length > 0) { dwInp = '*' + dwInp; }
                inRight++; inp += dwInp; inRight = ind(inp, ')', inRight);
            }
        }

        inp = rep(inp, 'logt', 'log10');
        inp = calcMat(inp);

        inp = brackets(inp);
    }

    /* /////// result */
    try {
        inp = eval(inp); inp = inp.fix();
        result.style.color = 'rgb(14, 66, 20)';

        if (!isNaN(inp)) {
            inp = frNm(inp);
            if (inp != fich) { result.innerText = inp }
        }
    } catch (e) {
        function forErr(pr1, pr2) {
            result.style.color = 'red'; result.innerText = 'You must convert " ' + pr1 + pr2 +
                ' " to " ' + pr1 + '(' + pr2 + ' "'
        }
        if (ind(inp, '*-') > -1) { forErr('×', '-') } else if (ind(inp, '*+') > -1) {
            forErr('×', '+')
        } else if (ind(inp, '/-') > -1) { forErr('÷', '-') } else if (ind(inp, '/+') > -1) {
            forErr('÷', '+')
        }
    }
}

/* instalation app */
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    let os = navigator.userAgent.toLocaleLowerCase();

    if (os.includes('android') || os.includes('ipad') || os.includes('iphone')) {
        gebi('dvdw').className = 'blck';
        gebi('dwnld').src = "https://virefie.github.io/imgs/anddw.png";
    }

});

gebi('dwnld').addEventListener('click', async () => {
    gebi('dvdw').className = 'n';
    deferredPrompt.prompt();
    deferredPrompt = null;
});
