// Grade Levels
export interface IGradeLink {
  id: string
  gradeName: string
  supportText: string
  courseLinks: ICourseLink[]
  order: number
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
  courseId: string
  name: string
  order: number
  units: IUnit[]
}

export interface IUnit {
  chapterId: number
  name: string
  order: Number
  description: IDescription[]
  freeAssetLinks: IAssetLink[]
}

export interface IDescription {
  id: number
  text: string
}

export interface IAssetLink {
  id: number
  mediaType: string
  linkUrl: string
}