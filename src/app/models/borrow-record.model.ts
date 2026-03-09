export interface BorrowRecord {
  borrowId: number;
  userId: number;
  bookId: number;
  borrowDate: string;
  returnDate: string | null;
  status: string;
  // populated by backend include
  user?: { fullName: string; email: string };
  book?: { title: string; author: string };
}