export const mockCourse = {
  id: "ALGEBRA_ONE",
  name: "Algebra 1",
  chapters: [
    {
      id: 0,
      name: "1 - Basics",
      units: [
        {
          id: 0,
          name: "1.1 Algebra basics",
          description: [
            {
              id: 0,
              text: "You need to know the basics operators (Addition, Subtraction, Multiplication, Division."
            },{
              id: 1,
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
              mediaType: "Documents",
              linkUrl: "https://byjus.com/maths/number-lines/"
            }
          ]
        },{
          id: 1,
          name: "1.2 Exponents",
          description: [
            {
              id: 0,
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
              mediaType: "Documents",
              linkUrl: "https://byjus.com/maths/number-lines/"
            },{
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "Documents",
              linkUrl: "https://byjus.com/maths/number-lines/"
            },{
              id: "one",
              mediaType: "YouTube",
              linkUrl: "www.youtube.com"
            },{
              id: "two",
              mediaType: "Documents",
              linkUrl: "https://byjus.com/maths/number-lines/"
            }
          ]
        }
      ]
    },{
      id: 1,
      name: "2 - Order of Operations",
      units: [
        {
          id: 0,
          name: "2.1 PEMDAS",
          description: [
            {
              id: 0,
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