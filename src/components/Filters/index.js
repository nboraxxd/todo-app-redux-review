import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFilterChange, statusFilterChange } from '../../redux/actions'
import { searchTextSelector, statusFilterSelector } from '../../redux/selector'

const { Search } = Input

export default function Filters() {
  const [_priorityList, _setPriorityList] = useState([])

  const dispatch = useDispatch()
  const searchText = useSelector(searchTextSelector)
  const status = useSelector(statusFilterSelector)

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={(ev) => dispatch(searchFilterChange(ev.target.value))}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={(ev) => dispatch(statusFilterChange(ev.target.value))}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select mode="multiple" allowClear placeholder="Please select" style={{ width: '100%' }}>
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
      </Col>
    </Row>
  )
}
