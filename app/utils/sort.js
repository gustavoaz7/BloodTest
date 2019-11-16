export const sortTestsByDate = tests =>
  tests.sort((a, b) => {
    const aa = a.date
      .split('.')
      .reverse()
      .join();
    const bb = b.date
      .split('.')
      .reverse()
      .join();
    if (aa < bb) return 1;
    if (aa > bb) return -1;
    return 0;
  });
