import type { UploadFile } from 'antd';

const useTransformImageLinksToFiles = (
  imageLinks: string | string[] | undefined
): UploadFile[] => {
  // handle single string or undefined input
  if (typeof imageLinks === 'string' && imageLinks !== '') {
    return [
      {
        uid: 'initial-0',
        name: 'image.png',
        url: imageLinks,
        status: 'done',
      },
    ];
  }

  // if there are no imageLinks or imageLinks is not an array
  // return an empty array
  if (!imageLinks || !Array.isArray(imageLinks)) {
    return [];
  }

  return imageLinks.map((link, index) => ({
    uid: `initial-${index}`,
    name: `image-${index}.png`,
    url: link,
    status: 'done',
  }));
};

export default useTransformImageLinksToFiles;
