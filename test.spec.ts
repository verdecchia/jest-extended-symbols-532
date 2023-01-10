import "jest-extended";

describe("toHaveBeenCalledWith, toHaveBeenCalledOnceWith symbol error", () => {
  it("call symbol the right way, it succeeds", async () => {
    const fn = jest.fn();
    const symbol = Symbol("foo");

    fn(symbol);

    expect(fn).toHaveBeenCalledWith(symbol); // jest : right

    expect(fn).toHaveBeenCalledOnceWith(symbol); // jest-extended : right
  });
});

describe("toHaveBeenCalledWith, symbol error", () => {
  it("call symbol the wrong way, it fails", async () => {
    const fn = jest.fn();
    const symbol = Symbol("foo");

    fn(symbol);

    expect(fn).toHaveBeenCalledWith(Symbol("foo")); // jest : wrong
  });
});

describe("toHaveBeenCalledOnceWith, symbol error", () => {
  it("call symbol the wrong way, it fails", async () => {
    const fn = jest.fn();
    const symbol = Symbol("foo");

    fn(symbol);

    expect(fn).toHaveBeenCalledOnceWith(Symbol("foo")); // jest-extended : right (but should be wrong)
  });
});
