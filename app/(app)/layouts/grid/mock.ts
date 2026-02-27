export const data = Array.from({
  length: 100,
}).map((_, index) => {
  return {
    key: index,
    data: {
      title: process.env.NEXT_PUBLIC_APP_NAME || 'Title',
      cover: `https://picsum.photos/seed/${index + 1}/1200/800?grayscale&random=${index}`,
    },
  };
});
