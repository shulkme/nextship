import { draw } from 'radash';

export const data = Array.from({
  length: 200,
}).map((_, index) => {
  const width = 600;
  const height =
    draw([600, 1200, 900, 1500, 400, 800, 450, 240, 1066, 337]) || 600;

  return {
    key: index,
    data: {
      avatar: `/images/icon.png`,
      author: 'Author',
      title: process.env.NEXT_PUBLIC_APP_NAME || 'Title',
      cover: `https://picsum.photos/seed/${index + 1}/${width}/${height}?grayscale&random=${index}`,
      width,
      height,
    },
  };
});
