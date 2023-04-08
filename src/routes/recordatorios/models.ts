export interface Iuser {
  name: string;
  last?: string;
  password: string;
  avatar: string;
}

export interface Irecordatorios {
  user: any;
  name: string;
  description: string;
  day: string;
  hours: string;
  reperat: boolean;
  importance: string;
}
