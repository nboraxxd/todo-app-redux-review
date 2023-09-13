import { Row, Tag, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { todoStatusChange } from '../../redux/actions'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ id, name, priority, isCompleted }) {
  const dispatch = useDispatch()

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(isCompleted === true ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={isCompleted} onChange={() => dispatch(todoStatusChange(id))}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}
