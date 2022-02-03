
const Note = ({ title, content, important }) => {
  return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>{important ? 'important' : ''}</p>
        </div>
  )
}

export default Note
