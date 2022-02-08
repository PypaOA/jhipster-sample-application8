import dayjs from 'dayjs';
import { State } from 'app/shared/model/enumerations/state.model';

export interface IDvd {
  id?: number;
  name?: string;
  performer?: string | null;
  releaseYear?: string | null;
  discCount?: string | null;
  format?: string | null;
  lang?: string | null;
  state?: State | null;
  added?: string | null;
}

export const defaultValue: Readonly<IDvd> = {};
