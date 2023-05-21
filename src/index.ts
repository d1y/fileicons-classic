import { iconData } from './icon_data'
const fileTypeMap: Record<string, string[]> = {
  image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp', 'ico'],
  video: ['mp4', 'webm', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
  audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac', 'm4a'],
  text: ['scss', 'sass', 'kt', 'gitignore', 'bat', 'properties', 'yml', 'css', 'js', 'md', 'xml', 'txt', 'py', 'go', 'html', 'less', 'php', 'rb', 'rust', 'script', 'java', 'sh', 'sql'],
  executable: ['exe', 'dll', 'com', 'vbs'],
  archive: ['7z', 'zip', 'rar', 'tar', 'gz'],
  pdf: ['pdf'],
  office: ['doc', 'docx', 'csv', 'xls', 'xlsx', "ppt", 'pptx'],
  three3d: ['dae', 'fbx', 'gltf', 'glb', 'obj', 'ply', 'stl'],
  document: ['txt', 'pages', 'epub', 'numbers', 'keynote']
}


/**
 * @example
 * ```ts
 * import { getFileIconName } from ".";
 * const filename = '/Users/d1y/Downloads/dev.mp4'
 * const result = getFileIconName(filename)
 * console.log(result) // the result is 'video'
 * ```
 */
export function getFileIconName(filename: string): string {
  let fileSuffix = getFileSuffix(filename);
  let fileType = getFileType(filename);

  const resultWithMap = iconData.get(fileSuffix as any)
  if (resultWithMap) return fileSuffix
  else if (fileType) return fileType
  return 'file'
}

export function getFileSuffix(name: string) {
  let lastIndex = name.lastIndexOf('.');
  if (lastIndex === -1) {
    return 'other';
  }
  return name.substring(lastIndex + 1).toLowerCase();
}

export function getFileName(name: string) {
  let lastIndex = name.lastIndexOf('.');
  if (lastIndex === -1) {
    return '';
  }
  return name.substring(0, lastIndex);
}

export function getFileType(name: string) {
  let fileType;
  for (let key in fileTypeMap) {
    let suffix = getFileSuffix(name);
    if (fileTypeMap[key].indexOf(suffix) !== -1) {
      fileType = key;
      break;
    }
  }
  return fileType;
}

export {
  iconData,
}