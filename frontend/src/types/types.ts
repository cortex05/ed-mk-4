// Grade Levels
export interface IGradeLink {
  id: string
  gradeName: string
  supportText: string
  courseLinks: ICourseLink[]
}

// Subjects
export interface ISubjectLink {
  id: string
  displayName: string
  domain: string,
  description: string,
  courseLinks: ICourseLink[]
}

// Courses
export interface ICourseLink {
  domain: string,
  name: string,
  id: string
}

export interface ICourse {
  id: string
  name: string
  chapters: IChapter[]
}

export interface IChapter {
  id: number
  name: string
  units: IUnit[]
}

export interface IUnit {
  id: number
  name: string
  description: IDescription[]
  freeAssetLinks: IAssetLink[]
}

export interface IDescription {
  id: number
  text: string
}

export interface IAssetLink {
  id: string
  mediaType: string
  linkUrl: string
}