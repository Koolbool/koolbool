export interface reviews {
  uid: string;//User id
  bookid: string;//Book id
  rate: number;
  title: string;
  comment: string;
  reviewImg?: string;
  createdDate: Date;
}