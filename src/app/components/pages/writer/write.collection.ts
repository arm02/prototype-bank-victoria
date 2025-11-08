export interface WriterResponseCollection {
  writer_id: string;
  name: string;
  role: string;
  expertise: string;
  summaries: string;
  experience: string;
  linkedin: string;
  profilePicture: string;
  postCount: number;
}

export class CreateWriterRequest {
  writer_id: string = '';
  name: string = '';
  role: string = '';
  expertise: string = '';
  summaries: string[] = [''];
  experience: string = '';
  linkedin: string = '';
  profilePicture: string = '';
}
