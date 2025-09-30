import  { createContext } from 'react';

export interface ActiveSubjects {
  domain: string
  displayName: string,
  _id: string
}

export interface GradeLevelLink {
  id: string
  gradeName: string
  supportText: string
  courseLinks: {
    domain: string
    name: string
    id: string
  }[]
}

interface DataContextType {
  activeSubjects: ActiveSubjects[] | null
  gradeLevelLinks: GradeLevelLink[] | null
}

const initialValues = {
  activeSubjects: [],
  gradeLevelLinks: []
}

const DataContext = createContext<DataContextType>(initialValues as DataContextType);

export default DataContext;