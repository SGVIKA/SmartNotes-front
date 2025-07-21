export default function PointListWithTitles({ title, description }) {

  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}