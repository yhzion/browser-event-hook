describe("Example", () => {
  let example;

  beforeEach(() => {
    example = new Example("John");
  });

  it("should create an instance of Example", () => {
    expect(example).toBeInstanceOf(Example);
  });

  it("should have a name property", () => {
    expect(example.name).toBe("John");
  });

  it("should have a default name property if not provided", () => {
    const defaultExample = new Example();
    expect(defaultExample.name).toBe(undefined);
  });

  it("should have a doSomething method", () => {
    expect(example.doSomething).toBeInstanceOf(Function);
  });
});
import Example from "../example";
