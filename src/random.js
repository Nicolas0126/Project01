const randomElement = (elements) => {
    const random = Math.floor(Math.random() * elements.length)
    return elements[random]
  }

  export default randomElement