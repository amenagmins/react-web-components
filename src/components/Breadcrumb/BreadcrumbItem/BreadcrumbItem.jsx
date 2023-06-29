export const BreadcrumbItem = ({url, children}) => {
  if (!url) {
    return <li className="breadcrumb__item">{children}</li>
  }

  return (
    <li className="breadcrumb__item">
      <a className="breadcrumb__link" href={url}>{children}</a>
    </li>
  )
}