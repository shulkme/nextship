import { draw } from 'radash';

export const inspirations = Array.from({
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
      cover: `https://picsum.photos/seed/${index + 1}/${width}/${height}?random=${index}`,
      width,
      height,
    },
  };
});

export const apps = [
  {
    title: 'AI Cartoon Magic',
    desc: 'Turn everything into a classic cartoon',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/minions_sample.webp',
  },
  {
    title: 'Image Upscale',
    desc: 'Seamless photo extension',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/out_painting_image_v1.webp',
  },
  {
    title: 'AI ID Photos',
    desc: 'Generate professional ID photos instantly',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/profile_photo_sample_v3.webp',
  },
  {
    title: '4K Wallpaper Creator',
    desc: 'Create stunning 4K wallpapers for all your devices',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/wallpaper_sample_v3.webp',
  },
  {
    title: 'Watermark Remover',
    desc: 'Remove image marks to restore originals',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/remove_water_mark_sample_v1.webp',
  },
  {
    title: 'Keep Face Generation',
    desc: 'Generate with the same face',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/user_face_ref_v1.webp',
  },
  {
    title: 'Style Transfer',
    desc: 'Apply style from photo',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/style_transfer_v1.webp',
  },
  {
    title: 'Advanced AI Poster Creator',
    desc: 'Quickly create stylish text posters',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/ideogram.aaa111.webp',
  },
  {
    title: 'Explore Recraft AI Creation',
    desc: 'AI-Powered professional design magic',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/recraft.aaa11.webp',
  },
  {
    title: 'Old Photo Restoration',
    desc: 'Instantly restore damaged and faded old photos',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/onediff_old_photo_restore_v2.webp',
  },
  {
    title: 'Character Stickers',
    desc: 'Create cute and personalized character stickers',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/sticker_v1.webp',
  },
  {
    title: 'Face Unblur',
    desc: 'Enhance portrait quality',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/upscale_face_swap_v1.webp',
  },
  {
    title: 'Manga',
    desc: 'Japanese manga-style portraits',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/real_to_manga_v1.webp',
  },
  {
    title: 'Anime',
    desc: 'Create an animated-style face',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/real_to_anime_v1.webp',
  },
  {
    title: '2D to 3D',
    desc: 'Convert 2D images to 3D models',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/onediff_2d3d_small.webp',
  },
  {
    title: 'Cartoon',
    desc: 'Unique style of popular cartoons',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/rick_morty_v1.webp',
  },
  {
    title: 'Line Art',
    desc: 'Concise black and white line drawing',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/lineart_v1.webp',
  },
  {
    title: 'Pixel Art',
    desc: 'Professional pixel art images',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/onediff_pixel_v1.webp',
  },
  {
    title: 'Character Plastic Toy',
    desc: 'Transform characters into plastic toy style',
    image:
      'https://files.monica-cdn.im/assets/image_tools/workflow_template/sample/pvc_toy_v1.webp',
  },
];
