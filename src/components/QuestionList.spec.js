describe('The Question List', () => {
    beforeEach(() => {
        console.log("Before each!");
    })

    beforeAll(()=>{
        console.log("Before all!");
    })
    it ("shoud display a list of items", () => {
        expect (40 + 2).toEqual(42);
    });

    it.skip ("should break", () => {
        expect (45 + 5).toEqual(40);
    })
});