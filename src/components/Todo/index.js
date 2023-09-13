import { memo } from 'react'
import { Row, Tag, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import todoListSlice from '../TodoList/todoListSlice'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

const Todo = memo(
  function Todo({ id, name, priority, isCompleted }) {
    const dispatch = useDispatch()

    return (
      <Row
        justify="space-between"
        style={{
          marginBottom: 3,
          ...(isCompleted === true ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
        }}
      >
        <Checkbox checked={isCompleted} onChange={() => dispatch(todoListSlice.actions.todoStatusChange(id))}>
          {name}
        </Checkbox>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
      </Row>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.isCompleted === nextProps.isCompleted
  },
)

export default Todo
