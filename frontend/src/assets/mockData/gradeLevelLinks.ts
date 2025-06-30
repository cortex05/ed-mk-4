export const mockGradeLinks = [
  {
    id: "KINDERGARTEN",
    gradeName: "Kindergarten",
    supportText: "This is the basic level of development. Materials are largely explained through play and personal discovery. Interaction is required.",
    courseLinks: [{domain: "MATH", name: "Math", id: "K-MATH"}, {domain: "READING", name: "Reading", id: "K-READING"}]
  },{
    id: "FIRST_GRADE",
    gradeName: "First Grade",
    supportText: "Harder than Kindergarten",
    courseLinks: [{domain: "MATH", name: "Math", id: "FIRST-MATH"}, {domain: "READING", name: "Reading", id: "FIRST-READING"}]
  },{
    id: "SEVENTH_GRADE",
    gradeName: "Seventh Grade",
    supportText: "Math splits off into various pathways",
    courseLinks: [{domain: "MATH", name: "Math", id: "SEVENTH-MATH"}, {domain: "MATH", name: "Algebra 1", id: "ALGEBRA-ONE"}, {domain: "READING", name: "Reading", id: "SEVENTH-READING"}, {domain: "ENGLISH", name: "English", id: "SEVENTH-ENGLISH"}]
  }
]