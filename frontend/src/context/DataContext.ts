import  { createContext } from 'react';

export interface ActiveSubjects {
  domain: string
  displayName: string,
  _id: string
}

interface DataContextType {
  activeSubjects: ActiveSubjects[] | null
}

const initialValues = {
  activeSubjects: []
}

const DataContext = createContext<DataContextType>(initialValues as DataContextType);

export default DataContext;