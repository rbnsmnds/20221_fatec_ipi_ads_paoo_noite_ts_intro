// recebe xs: number[] tal que xs.length > 0
// e devolve um elemento máximo de xs
function maxV0(xs: number[]): number {
    let cand = xs[0];
    for (const x of xs) {
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}

function max(xs: number[]): number | undefined {
    if (xs.length == 0) return undefined;
    let cand = xs[0];
    for (const x of xs) {
        if (x > cand) {
            cand = x;
        }
    }
    return cand;
}

const vecNum = [4, -2, -3, 8, -5, -7];

function maxByV0(xs: number[], 
    key: (x: number) => number): number | undefined {
        if (xs.length == 0) return undefined;
        let cand = xs[0];
        for (const x of xs)
            if (key(x) > key(cand)) cand = x;
        return cand;
}

// Escreva uma função que recebe xs: string[] e uma função
// key:(s: string) => number e devolve undefined se xs é vazio,
// ou, caso contrário, devolve uma string s de xs cuja chave key(s)
// é máxima.
function maxByStr(xs: string[], 
    key: (s: string) => number): string | undefined {
        if (xs.length == 0) return undefined;
        let cand = xs[0];
        for (const x of xs)
            if (key(x) > key(cand)) cand = x;
        return cand;
}

const vecStr = ['aaaa', 'bb', 'hhhhhhh', 'kkk', 'jjjj']

function maxBy<A>(xs: Array<A>, 
    key: (x: A) => number): A | undefined {
        if (xs.length == 0) return undefined;
        let cand = xs[0];
        for (const x of xs)
            if(key(x) > key(cand)) cand = x;
        return cand;
}

function minBy<A>(xs: Array<A>, chave: (x: A) => number) {
    return maxBy(xs, x => -chave(x));
}

console.log(maxV0([-4, 2, 3, -8, 5, 7]))

console.log(max(vecNum))

console.log(maxByV0([-8, 4, 6, -7, 1, 5], x => x*x));

console.log(maxByStr(vecStr, s => s.length));

const r = max([2, 4, 1, 8, 3, 5]);
if (r != undefined) console.log(r + 2);

function square(x: number): number { return x*x; }
function len(s: string): number { return s.length; }

console.log(maxBy(vecNum, x => x*x));
console.log(maxBy(vecStr, s => s.length));

function grade(s: string): number {
    switch (s) {
        case 'maria': return 10;
        case 'joao': return 8;
        case 'ana': return 6;
        default: return 4;
    }
}

console.log(maxBy(['joao', 'manuel', 'maria', 'ana'], grade));

function invGrade(s: string): number {return -grade(s); }

console.log(maxBy(['joao', 'manuel', 'maria', 'ana'], invGrade));

console.log(minBy(['joao', 'manuel', 'maria', 'ana'], grade));
