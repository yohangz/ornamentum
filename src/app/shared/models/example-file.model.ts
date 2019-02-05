import { FileType } from 'helper-models';

export interface ExampleFile {
  name: string;
  type: FileType;
  content: string;
}
