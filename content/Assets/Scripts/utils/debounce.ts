const defaultDelay = 250;

const debounce = (fn: () => void, ms: number = defaultDelay) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: []) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

export default debounce;
