export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthResult {
  success: boolean;
  error?: string;
  user?: User;
}

export interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  description: string;
  date: string;
  category?: string;
}

export interface Card {
  id: string;
  type: "primary" | "secondary";
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
}
