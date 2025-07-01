export const handleColor = (value:string) => {
    switch(value){
      case "MATH":
        return "bg-red-500"
      default:
        return "bg-blue-500"
    }
  }