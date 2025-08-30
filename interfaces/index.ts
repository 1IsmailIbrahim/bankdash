export interface IUser {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface IAuthResult {
  success: boolean;
  error?: string;
  user?: IUser;
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

export interface IAccountData extends Record<string, unknown> {
  id: number;
  name: string;
  accountNumber: string;
  description: string;
  status: string;
  rate: string;
  balance: string;
  deposit: string;
}
