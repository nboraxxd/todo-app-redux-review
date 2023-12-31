import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Input, Button, Select, Tag } from 'antd'
import Todo from '../Todo'
import { todoListRemainingSelector } from '../../redux/selector'
import todoListSlice from './todoListSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [todoPriority, setTodoPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todoListRemainingSelector)

  function handleAddTodo() {
    if (todoName.trim() === '') return

    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        isCompleted: false,
      }),
    )

    setTodoName('')
    setTodoPriority('Medium')
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            value={todoName}
            onChange={(ev) => setTodoName(ev.target.value)}
            placeholder="What did you do today?"
          />
          <Select defaultValue="Medium" value={todoPriority} onChange={(value) => setTodoPriority(value)}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo} disabled={todoName.trim() === ''}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
