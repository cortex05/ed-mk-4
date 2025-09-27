
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export interface ActiveSubjects {
  domain: string
  displayName: string,
  _id: string
}

interface DataContextType {
  activeSubjects: ActiveSubjects[] | null
  loading: boolean
}

const initialValues = {
  activeSubjects: [],
  loading: true
}

try {
  axios.get(`${baseUrl}/api/active-subjects`)
    .then((data) => {
      if (data.data) {
        initialValues.activeSubjects = data.data
        initialValues.loading = false
      } else {
        initialValues.activeSubjects = []
        initialValues.loading = false
      }
    })
    .catch((error) => {
      console.error("Error fetching course data:", error);
    })
} catch (error) {
  console.error("Error fetching course data:", error);
  initialValues.loading = false
}

const DataContext = createContext<DataContextType>(initialValues as DataContextType);

export default DataContext;