export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  fullName: string;
  role: string;
  token: string;
}

export interface AddBookDto {
  title: string;
  author: string;
  category: string;
  totalCopies: number;
}

export interface UpdateBookDto {
  title: string;
  author: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
}

export interface UpdateUserStatusDto {
  isActive: boolean;
}

export interface BorrowBookDto {
  bookId: number;
}

export interface ReturnBookDto {
  bookId: number;
}