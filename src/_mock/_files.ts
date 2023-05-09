// _mock
import _mock from './_mock';

// ----------------------------------------------------------------------

const GB = 1000000000 * 24;

const FILE_TYPE = [
  'jpg',
  'jpg',
  'mp3',
  'mp4',
  'pdf',
  'txt',
  'psd',
  'docx',
  'xlsx',
  'zip',
  'ai',
  'pptx',
];

const FILE_NAME = [
  'cover_12.jpg',
  'cover_18.jpg',
  'design_suriname_2015.mp3',
  'expertise_2015_conakry_sao-tome-and-principe_gender.mp4',
  'money-popup-crack.pdf',
  'large_news.txt',
  'nauru-6015-small-fighter-left-gender.psd',
  'gustavia-entertainment-productivity.docx',
  'indonesia-quito-nancy-grace-left-glad.xlsx',
  'legislation-grain.zip',
  'kyrgyzstan-04795009-picabo-street-guide-style.ai',
  'socio_respectively_366996.pptx',
];

const FILE_URL = [
  _mock.image.cover(12),
  _mock.image.cover(18),
  'https://www.cloud.com/s/c218bo6kjuqyv66/design_suriname_2015.mp3',
  'https://www.cloud.com/s/c218bo6kjuqyv66/expertise_2015_conakry_sao-tome-and-principe_gender.mp4',
  'https://www.cloud.com/s/c218bo6kjuqyv66/money-popup-crack.pdf',
  'https://www.cloud.com/s/c218bo6kjuqyv66/large_news.txt',
  'https://www.cloud.com/s/c218bo6kjuqyv66/nauru-6015-small-fighter-left-gender.psd',
  'https://www.cloud.com/s/c218bo6kjuqyv66/gustavia-entertainment-productivity.docx',
  'https://www.cloud.com/s/c218bo6kjuqyv66/indonesia-quito-nancy-grace-left-glad.xlsx',
  'https://www.cloud.com/s/c218bo6kjuqyv66/legislation-grain.zip',
  'https://www.cloud.com/s/c218bo6kjuqyv66/kyrgyzstan-04795009-picabo-street-guide-style.ai',
  'https://www.cloud.com/s/c218bo6kjuqyv66/socio_respectively_366996.pptx',
];

// ----------------------------------------------------------------------

export const _files = FILE_NAME.map((file, index) => ({
  name: file,
  size: GB / ((index + 1) * 500),
  type: FILE_TYPE[index],
  path: file,
  preview: FILE_URL[index],
  dateCreated: _mock.time(index),
  dateModified: _mock.time(index),
}));
