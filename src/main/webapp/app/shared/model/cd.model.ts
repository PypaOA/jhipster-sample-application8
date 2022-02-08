import dayjs from 'dayjs';
import { State } from 'app/shared/model/enumerations/state.model';

export interface ICd {
  id?: number;
  name?: string;
  performer?: string | null;
  releaseYear?: string | null;
  discCount?: string | null;
  medium?: string | null;
  label?: string | null;
  state?: State | null;
  added?: string | null;
}

export const defaultValue: Readonly<ICd> = {};
