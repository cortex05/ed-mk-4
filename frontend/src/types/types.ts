// Grade Levels
export interface IGradeLink {
  id: string
  gradeName: string
  supportText: string
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
  id: string
  courseId: string
  name: string
  units: IUnit[]
}

export interface IUnit {
  id: string
  name: string
  chapterId: string
  description: string[]
  freeAssetLinks: IAssetLink[]
}

// export interface IDescription {
//   id: string
//   unitId: string
//   text: string
// }

export interface IAssetLink {
  id: string
  mediaType: string
  linkUrl: string
}