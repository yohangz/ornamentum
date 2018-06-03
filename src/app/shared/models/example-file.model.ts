import { FileType } from './file-type.enum';

export interface ExampleFile {
  name: string;
  type: FileType;
  content: string;
}
