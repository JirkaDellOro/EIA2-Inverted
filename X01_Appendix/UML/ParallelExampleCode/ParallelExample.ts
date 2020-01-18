namespace ParallelExample {
  waitForSomething();
  doSomethingElse();

  async function waitForSomething(): Promise<void> {
    console.log("starting to wait for something")
    await something();
    console.log("done waiting for something");
  }

  function doSomethingElse(): void {
    console.log("doing something else")
  }

  async function something(): Promise<void> {
    return new Promise<void>(_resolve => setTimeout(_resolve, 1000))
  }
}