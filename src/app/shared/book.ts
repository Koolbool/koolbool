export interface Book {
  id: string;
  bookname: string;
  bookauthors: string[];
  description:string;
  categories: string[];
  bookurl: string;
  bookimgurl?: string;
  createdDate: Date;
}