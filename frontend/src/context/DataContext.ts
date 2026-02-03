import  { createContext } from 'react';
import type { IGradeLink } from '../types/types';

export interface ActiveSubjects {
  domain: string
  displayName: string,
  description: string,
  id: string,
  courseLinks: {
    domain: string
    name: string
    id: string
  }[]
}

interface DataContextType {
  activeSubjects: ActiveSubjects[] | null
  gradeLevelLinks: IGradeLink[] | null
}

const initialValues = {
  activeSubjects: [],
  gradeLevelLinks: []
}

const DataContext = createContext<DataContextType>(initialValues as DataContextType);

export default DataContext;