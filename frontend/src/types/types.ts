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