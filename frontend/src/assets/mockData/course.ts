export const mockCourse = {
  id: "ALGEBRA_ONE",
  name: "Algebra 1",
  chapters: [
    {
      id: "CH_ALG_ONE_1",
      courseId: "ALGEBRA_ONE",
      units: [
        "Unit 1.1"
      ]
    }
  ]
}

export const badCourse = {
  id: "BAD_COURSE",
  name: "Something went wrong. Course not fetched",
  chapters: []
}

// [
//         {
//           id: "U_ALG_ONE_1_BASICS",
//           name: "Algebra basics",
//           chapterId: "CH_ALG_ONE_1",
//           description: [
//             {
//               id: 0,
//               unitId: "DES_ALG_ONE_1_BASICS",
//               text: "This is where we build out the ground work for all of algebra. Some of this may be review, but if not, it must be learned now."
//             }
//           ],
//           freeAssetLinks: [{
//             id: "FAL_ALG_ONE_1_1",
//             mediaType: "YOU_TUBE",
//             linkUrl: "https://www.youtube.com/watch?v=GAN-jgzYsIo"
//           }]
//         }
//       ]