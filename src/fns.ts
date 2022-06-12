
const log = console.log;

function counter (initial: number): () => number {
    return () => initial++;
}

const c1 = counter(10);
const c2 = counter(5);

log(c1())
log(c2())
log(c1())
log(c2())
log(c1())
log(c2())
log(c1())
log(c2())
log(c1())
log(c2())
