export const Breadcrumb = ({children}) => {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {children}
      </ul>
    </div>
  )
}