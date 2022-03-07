const Book = ({book}) => {
  return (
    <div className="bg-white m-2 p-2 lg:w-1/4">
            <h3>{book.title}</h3>
            <img src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"></img>
            <p>{book.description}</p>
        
    </div>
  )
}

export default Book