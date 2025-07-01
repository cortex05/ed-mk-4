export const handleCourseLinkColor = (value:string) => {
    switch(value){
      case "MATH":
        return "bg-red-500"
      case "ENGLISH":
        return "bg-blue-500"
      case "SCIENCE":
        return "bg-green-500"
      default:
        return "bg-yellow-500"
    }
  }