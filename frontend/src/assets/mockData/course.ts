export const mockCourse = {
  id: "ALGEBRA_ONE",
  name: "Algebra 1",
  chapters: [
    {
      id: "CH_ALG_ONE_1",
      courseId: "ALGEBRA_ONE",
      name: "1 - Basics",
      units: [
        {
          id: "U_ALG_ONE_1_BASICS",
          name: "1.1 Algebra basics",
          chapterId: "CH_ALG_ONE_1",
          description: [
            {
              id: "D_FIRST",
              unitId: "U_ALG_ONE_1_BASICS",
              text: "You need to know the basics operators (Addition, Subtraction, Multiplication, Division."
            },{
              id: "D_SECOND",
              unitId: "U_ALG_ONE_1_BASICS",
              text: "It would also be nice to be good at them."
            } 
          ],
          freeAssetLinks: [
            {
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "docs",
              linkUrl: "https://byjus.com/maths/number-lines/"
            }
          ]
        },{
          id: "U_ALG_ONE_2_EXPONENT",
          name: "1.2 Exponents",
          chapterId: "CH_ALG_ONE_1",
          description: [
            {
              id: "D_FIRST",
              unitId: "U_ALG_ONE_2_EXPONENT",
              text: "It would also be nice to be good at them."
            }
          ],
          freeAssetLinks: [
            {
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "docs",
              linkUrl: "https://byjus.com/maths/number-lines/"
            },{
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "docs",
              linkUrl: "https://byjus.com/maths/number-lines/"
            },{
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "docs",
              linkUrl: "https://byjus.com/maths/number-lines/"
            }
          ]
        }
      ]
    },{
      id: "CH_ALG_ONE_2",
      courseId: "ALGEBRA_ONE",
      name: "2 - Order of Operations",
      units: [
        {
          id: "U_ALG_ONE_1_PEMDAS",
          name: "2.1 PEMDAS",
          chapterId: "CH_ALG_ONE_2",
          description: [
            {
              id: "D_FIRST",
              unitId: "U_ALG_ONE_1_PEMDAS",
              text: "It would also be nice to be good at them."
            } 
          ],
          freeAssetLinks: [
            {
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            }
          ]
        }
      ]
    }
  ]
}

export const badCourse = {
  id: "BAD_COURSE",
  name: "Something went wrong. Course not fetched",
  chapters: []
}