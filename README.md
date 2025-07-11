CREATE TABLE wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES users(id),
  balance NUMERIC DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE card_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  status TEXT DEFAULT 'pending',
  id_document TEXT NOT NULL, -- file path
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  amount NUMERIC NOT NULL,
  type TEXT NOT NULL, -- topup, spend
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


<!-- Typescript service api.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private BASE_URL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.BASE_URL}/auth/login`, data);
  }

  getWallet(token: string) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.BASE_URL}/wallet`, { headers });
  }

  topUp(token: string, amount: number) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(`${this.BASE_URL}/wallet/topup`, { amount }, { headers });
  }

  applyForCard(token: string, file: File) {
    const formData = new FormData();
    formData.append('idDocument', file);
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post(`${this.BASE_URL}/card/apply`, formData, { headers });
  }

  getTransactions(token: string) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.BASE_URL}/transactions`, { headers });
  }
} -->
"# NOIMED" 
